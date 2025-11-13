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

    // Generate shorts metadata (we'll create placeholders since actual video processing requires FFmpeg)
    const shorts = [];
    
    for (let i = 0; i < Math.min(3, viralMoments.length); i++) {
      const moment = viralMoments[i];
      const shortNumber = i + 1;
      const startTime = moment.startSeconds;
      const endTime = Math.min(startTime + 30, analysis.video_duration); // 30-second clips
      
      // Generate YouTube download URL using yt5s.io API
      const downloadUrl = `https://www.y2mate.com/youtube/${videoId}?start=${startTime}&end=${endTime}`;
      const storagePath = `${videoId}/short_${shortNumber}.mp4`;
      
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
          storage_url: `https://www.youtube.com/embed/${videoId}?start=${startTime}&end=${endTime}`,
        })
        .select()
        .single();

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
        downloadUrl: downloadUrl,
      });
    }

    console.log('Generated shorts metadata:', shorts.length);

    return new Response(
      JSON.stringify({
        success: true,
        shorts,
        message: 'Shorts metadata generated successfully. Note: Full video processing with FFmpeg requires server-side setup.',
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