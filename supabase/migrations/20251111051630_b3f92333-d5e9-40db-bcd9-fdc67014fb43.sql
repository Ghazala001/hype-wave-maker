-- Create storage bucket for shorts videos
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'shorts',
  'shorts',
  true,
  31457280, -- 30MB limit
  ARRAY['video/mp4']
);

-- Create RLS policies for shorts bucket
CREATE POLICY "Anyone can view shorts"
ON storage.objects FOR SELECT
USING (bucket_id = 'shorts');

CREATE POLICY "Anyone can upload shorts"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'shorts');

-- Create table for video analysis history
CREATE TABLE public.video_analyses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  video_id TEXT NOT NULL,
  video_url TEXT NOT NULL,
  video_title TEXT,
  video_duration INTEGER,
  video_thumbnail TEXT,
  transcript TEXT,
  estimated_reach TEXT,
  viral_potential TEXT,
  retention_score NUMERIC(3,1),
  content_summary TEXT,
  viral_moments JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on video_analyses
ALTER TABLE public.video_analyses ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to view analyses (public data)
CREATE POLICY "Anyone can view analyses"
ON public.video_analyses
FOR SELECT
USING (true);

-- Create policy to allow anyone to create analyses
CREATE POLICY "Anyone can create analyses"
ON public.video_analyses
FOR INSERT
WITH CHECK (true);

-- Create table for generated shorts
CREATE TABLE public.generated_shorts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  analysis_id UUID NOT NULL REFERENCES public.video_analyses(id) ON DELETE CASCADE,
  short_number INTEGER NOT NULL,
  start_time INTEGER NOT NULL,
  end_time INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  storage_path TEXT,
  storage_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on generated_shorts
ALTER TABLE public.generated_shorts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to view shorts
CREATE POLICY "Anyone can view shorts"
ON public.generated_shorts
FOR SELECT
USING (true);

-- Create policy to allow anyone to create shorts
CREATE POLICY "Anyone can create shorts"
ON public.generated_shorts
FOR INSERT
WITH CHECK (true);

-- Create index for faster lookups
CREATE INDEX idx_video_analyses_video_id ON public.video_analyses(video_id);
CREATE INDEX idx_generated_shorts_analysis_id ON public.generated_shorts(analysis_id);