import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Sparkles, BarChart3, Target, Quote } from "lucide-react";
import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import AnalysisResults from "@/components/AnalysisResults";

const videoUrlSchema = z.string()
  .url("Please enter a valid URL")
  .max(2000, "URL is too long")
  .refine(
    (url) => {
      try {
        const parsed = new URL(url);
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
      } catch {
        return false;
      }
    },
    "URL must use HTTP or HTTPS protocol"
  );

const Home = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisData, setAnalysisData] = useState<any>(null);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    try {
      const validatedUrl = videoUrlSchema.parse(videoUrl);
      
      setIsAnalyzing(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockResults = {
        title: "Sample Video Analysis",
        views: 125000,
        engagement: 8.5,
        suggestions: [
          "Consider adding more call-to-actions in the first 30 seconds",
          "Your thumbnail could benefit from brighter colors",
          "Tags optimization needed for better discoverability"
        ]
      };
      
      setAnalysisData(mockResults);
      toast({
        title: "Analysis Complete!",
        description: "Your video insights are ready.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid URL",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to analyze video. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Turn Your Videos Into Viral Hits
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Hype Wave Maker uses advanced AI to analyze your videos, optimize your content, and help you grow your YouTube channel faster than ever.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
              <Input
                placeholder="Paste your YouTube video URL..."
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={handleAnalyze} 
                disabled={isAnalyzing || !videoUrl}
                size="lg"
              >
                {isAnalyzing ? "Analyzing..." : "Try it Free"}
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              No credit card required • Get instant insights
            </p>
          </div>
        </section>

        {/* Analysis Results */}
        {analysisData && (
          <section className="py-12 px-4 bg-muted/30">
            <div className="container mx-auto">
              <AnalysisResults data={analysisData} />
            </div>
          </section>
        )}

        {/* Key Benefits */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Creators Love Hype Wave Maker
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <TrendingUp className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Boost Your Views</h3>
                  <p className="text-muted-foreground">
                    Get data-driven recommendations to optimize titles, thumbnails, and descriptions for maximum reach.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <Sparkles className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
                  <p className="text-muted-foreground">
                    Our advanced AI analyzes thousands of successful videos to give you winning strategies.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <BarChart3 className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Track Your Growth</h3>
                  <p className="text-muted-foreground">
                    Monitor your performance with detailed analytics and see your channel grow in real-time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Everything You Need to Succeed
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Target className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
                  <p className="text-muted-foreground">
                    Get keyword suggestions, tag recommendations, and title improvements to rank higher in search.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Sparkles className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Thumbnail Analyzer</h3>
                  <p className="text-muted-foreground">
                    AI-powered thumbnail analysis shows you what works and what doesn't before you publish.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <BarChart3 className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Performance Dashboard</h3>
                  <p className="text-muted-foreground">
                    Track views, engagement, and growth metrics all in one beautiful, easy-to-use dashboard.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <TrendingUp className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Trend Detection</h3>
                  <p className="text-muted-foreground">
                    Stay ahead with AI that spots trending topics and suggests content ideas for your niche.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Creators Are Saying
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-4">
                    "Hype Wave Maker helped me double my views in just two months. The AI insights are incredible!"
                  </p>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">Tech Review Channel</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-4">
                    "Finally, a tool that actually understands what makes videos go viral. Game changer for my channel!"
                  </p>
                  <div className="font-semibold">Marcus Chen</div>
                  <div className="text-sm text-muted-foreground">Gaming Content Creator</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-4">
                    "The thumbnail analyzer alone is worth it. My click-through rate has increased by 40%!"
                  </p>
                  <div className="font-semibold">Emily Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Lifestyle Vlogger</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Grow Your Channel?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of creators who are already using AI to optimize their content and grow faster.
            </p>
            <Button size="lg" asChild>
              <NavLink to="/">Try it Free - No Credit Card Required</NavLink>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
