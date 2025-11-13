import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { analysisId, videoId } = await req.json();
    console.log('Generating shorts for analysis:', analysisId);

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch analysis data
    const { data: analysis, error: fetchError } = await supabase
      .from('video_analyses')
      .select('*')
      .eq('id', analysisId)
      .single();

    if (fetchError || !analysis) {
      throw new Error('Analysis not found');
    }

    const viralMoments = analysis.viral_moments as Array<{
      timestamp: string;
      description: string;
      startSeconds: number;
    }>;

    if (!viralMoments || viralMoments.length === 0) {
      throw new Error('No viral moments found in analysis');
    }

    console.log('Found viral moments:', viralMoments.length);

    // Generate shorts with actual video processing
    const shorts = [];
    
    for (let i = 0; i < Math.min(3, viralMoments.length); i++) {
      const moment = viralMoments[i];
      const shortNumber = i + 1;
      const startTime = moment.startSeconds;
      const endTime = Math.min(startTime + 30, analysis.video_duration); // 30-second clips
      
      const storagePath = `${videoId}/short_${shortNumber}.mp4`;
      
      // Process video using yt-dlp and FFmpeg
      console.log(`Processing clip ${shortNumber}: ${startTime}s to ${endTime}s`);
      
      try {
        // Download and extract clip using yt-dlp with FFmpeg
        const ytDlpCommand = new Deno.Command("yt-dlp", {
          args: [
            "-f", "best[height<=720]",
            "--download-sections", `*${startTime}-${endTime}`,
            "-o", `/tmp/clip_${shortNumber}.mp4`,
            `https://www.youtube.com/watch?v=${videoId}`
          ],
        });
        
        const { code, stderr } = await ytDlpCommand.output();
        
        if (code !== 0) {
          console.error('yt-dlp error:', new TextDecoder().decode(stderr));
          throw new Error('Failed to process video');
        }
        
        // Read the processed file
        const videoFile = await Deno.readFile(`/tmp/clip_${shortNumber}.mp4`);
        
        // Upload to Supabase Storage
        const { error: uploadError } = await supabase.storage
          .from('video-clips')
          .upload(storagePath, videoFile, {
            contentType: 'video/mp4',
            upsert: true
          });
        
        if (uploadError) {
          console.error('Storage upload error:', uploadError);
          throw new Error('Failed to upload video');
        }
        
        // Get public URL
        const { data: urlData } = supabase.storage
          .from('video-clips')
          .getPublicUrl(storagePath);
        
        console.log(`Clip ${shortNumber} processed successfully`);
        
        // Store short metadata in database
        const { data: shortData, error: insertError } = await supabase
          .from('generated_shorts')
          .insert({
            analysis_id: analysisId,
            short_number: shortNumber,
            start_time: startTime,
            end_time: endTime,
            title: `${analysis.video_title} - Clip ${shortNumber}`,
            description: moment.description,
            storage_path: storagePath,
            storage_url: urlData.publicUrl,
          })
          .select()
          .single();
        
        // Clean up temp file
        try {
          await Deno.remove(`/tmp/clip_${shortNumber}.mp4`);
        } catch (e) {
          console.log('Temp file cleanup skipped');
        }

        if (insertError) {
          console.error('Error inserting short:', insertError);
          continue;
        }

        shorts.push({
          id: shortData.id,
          shortNumber,
          title: shortData.title,
          description: moment.description,
          startTime,
          endTime,
          timestamp: moment.timestamp,
          previewUrl: `https://www.youtube.com/embed/${videoId}?start=${startTime}&end=${endTime}`,
          downloadUrl: urlData.publicUrl,
        });
      } catch (error) {
        console.error(`Failed to process clip ${shortNumber}:`, error);
        // Skip this clip and continue with the next one
        continue;
      }
    }

    console.log('Generated shorts metadata:', shorts.length);

    return new Response(
      JSON.stringify({
        success: true,
        shorts,
        message: shorts.length > 0 
          ? 'Shorts processed and ready for download!' 
          : 'Failed to process any shorts. Please try again.',
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in generate-shorts function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        success: false 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});