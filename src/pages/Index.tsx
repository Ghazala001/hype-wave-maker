import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Sparkles, Video, TrendingUp, Target, Zap } from "lucide-react";
import AnalysisResults from "@/components/AnalysisResults";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// URL validation schema for security
const videoUrlSchema = z.string()
  .trim()
  .url({ message: "Must be a valid URL" })
  .max(2000, { message: "URL too long" })
  .refine(
    (url) => {
      try {
        const parsed = new URL(url);
        return ['http:', 'https:'].includes(parsed.protocol);
      } catch {
        return false;
      }
    },
    { message: "Only HTTP/HTTPS URLs are allowed" }
  );

const Index = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    // Validate URL for security
    try {
      const validatedUrl = videoUrlSchema.parse(videoUrl);
      
      setIsAnalyzing(true);
    
      // Simulate AI analysis - will be replaced with actual Lovable AI integration
      setTimeout(() => {
        setAnalysisData({
          url: validatedUrl,
        titleSuggestions: [
          "10 Game-Changing Tips That Will Transform Your Content",
          "The Ultimate Guide: Everything You Need to Know",
          "Why Everyone Is Talking About This Right Now"
        ],
        thumbnailIdeas: [
          "Bold text overlay with contrasting colors and emotion-driven facial expression",
          "Before/After split screen showing transformation or results",
          "Eye-catching graphic with numbers or statistics prominently displayed"
        ],
        seoKeywords: [
          "viral content strategy",
          "engagement optimization",
          "content marketing tips",
          "video growth hacks",
          "audience retention"
        ],
        summary: "This video covers essential strategies for content creation and audience engagement. The pacing is strong, with clear value propositions throughout. Consider adding more call-to-action elements in the first 30 seconds to improve retention.",
        metrics: {
          estimatedReach: "50K-100K",
          viralPotential: "High",
          retentionScore: 8.5
        }
      });
      setIsAnalyzing(false);
        toast({
          title: "Analysis complete!",
          description: "Your video insights are ready",
        });
      }, 3000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid URL",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">AI-Powered Video Intelligence</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Optimize Your Videos<br />
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                With AI Insights
              </span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Get instant AI-powered analysis, optimization tips, and growth strategies for your video content
            </p>
          </div>

          {/* Input Section */}
          <Card className="max-w-3xl mx-auto p-8 shadow-glow border-accent/20 bg-gradient-card backdrop-blur-sm">
            <div className="space-y-4">
              <div className="flex gap-3">
                <Input
                  type="url"
                  placeholder="Paste your video URL here..."
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  className="flex-1 h-12 text-lg border-border/50 focus:border-accent transition-smooth"
                  disabled={isAnalyzing}
                />
                <Button 
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  size="lg"
                  className="px-8 bg-gradient-primary hover:shadow-glow transition-smooth"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 mr-2" />
                      Analyze
                    </>
                  )}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Supports YouTube, Vimeo, and most major video platforms
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      {!analysisData && (
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Powerful AI Analysis Features
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-medium transition-smooth border-border/50">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Content Analysis</h3>
                <p className="text-muted-foreground">
                  Deep AI analysis of your video content, pacing, and structure to identify strengths and opportunities
                </p>
              </Card>

              <Card className="p-6 hover:shadow-medium transition-smooth border-border/50">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Growth Insights</h3>
                <p className="text-muted-foreground">
                  Get data-driven recommendations for titles, thumbnails, and SEO to maximize your reach
                </p>
              </Card>

              <Card className="p-6 hover:shadow-medium transition-smooth border-border/50">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Optimization Tips</h3>
                <p className="text-muted-foreground">
                  Actionable strategies to improve engagement, retention, and overall video performance
                </p>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      {analysisData && (
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <AnalysisResults data={analysisData} onNewAnalysis={() => {
              setAnalysisData(null);
              setVideoUrl("");
            }} />
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;
