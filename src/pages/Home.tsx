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
        url: validatedUrl,
        titleSuggestions: [
          "10 Secrets That Will Transform Your Content Strategy",
          "How I Gained 100K Subscribers Using This ONE Trick",
          "You Won't Believe What Happened When I Tried This..."
        ],
        thumbnailIdeas: [
          "Use a close-up reaction shot with bright contrasting colors",
          "Split-screen comparison showing before/after results",
          "Bold text overlay with emoji and high contrast background"
        ],
        seoKeywords: [
          "video optimization",
          "youtube growth",
          "content strategy",
          "viral videos",
          "creator tips",
          "SEO techniques"
        ],
        summary: "This video demonstrates effective content creation strategies with strong engagement potential. The pacing is good, but consider adding more visual variety in the first 30 seconds to hook viewers immediately.",
        metrics: {
          estimatedReach: "50K-100K",
          viralPotential: "High",
          retentionScore: 8.5
        }
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

  const handleNewAnalysis = () => {
    setAnalysisData(null);
    setVideoUrl("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section with Animated Background */}
        <section className="relative min-h-[90vh] bg-gradient-to-b from-[#0a0e1a] to-[#0f1a3b] flex items-center justify-center px-4 overflow-hidden">
          
          {/* Animated Waves Background */}
          <div className="absolute bottom-0 left-0 w-full h-3/5 overflow-hidden opacity-60">
            <div 
              className="absolute bottom-0 w-full h-full animate-wave"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%231e3a8a'/%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.21-43.62C894.54,2.5,941.36,12.25,982.38,28.99,1028.87,49.19,1098.67,68.75,1200,56.37V0Z' opacity='.5' fill='%233b82f6'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat-x',
                backgroundSize: '50% 100%'
              }}
            />
            <div 
              className="absolute bottom-0 w-full h-full animate-wave2 opacity-40"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%231e3a8a'/%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.21-43.62C894.54,2.5,941.36,12.25,982.38,28.99,1028.87,49.19,1098.67,68.75,1200,56.37V0Z' opacity='.5' fill='%233b82f6'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat-x',
                backgroundSize: '50% 100%'
              }}
            />
          </div>

          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 md:w-2 md:h-2 bg-cyan-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60 + 20}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}

          {/* Main Content */}
          <div className="relative z-10 text-center max-w-md w-full space-y-6">
            
            {/* YouTube Neon Icon */}
            <div 
              className="mx-auto w-20 h-20 md:w-24 md:h-24 bg-red-600 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse"
              style={{ boxShadow: '0 0 30px #ff0000, 0 0 60px #ff3366' }}
            >
              <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.83c-.24-.32-.7-.59-1.24-.7C16.76 5.8 12 5.8 12 5.8s-4.76 0-6.35.33c-.54.11-1 .38-1.24.7C4 7.66 4 12 4 12s0 4.34.41 5.17c.24.32.7.59 1.24.7C7.24 18.2 12 18.2 12 18.2s4.76 0 6.35-.33c.54-.11 1-.38 1.24-.7C20 16.34 20 12 20 12s0-4.34-.41-5.17zM10 15V9l6 3-6 3z"/>
              </svg>
            </div>

            {/* Gradient Heading */}
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-glow">
              Turn Your Videos Into Viral Hits
            </h1>

            {/* Input Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-blue-500/30 shadow-2xl transition-all hover:border-cyan-400 hover:shadow-cyan-400/50 hover:-translate-y-1">
              <Input
                type="text"
                placeholder="Enter YouTube video link"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="w-full bg-blue-900/60 text-white placeholder:text-blue-300 text-center py-3 px-4 rounded-xl border-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-all"
              />
              <Button
                onClick={handleAnalyze}
                disabled={isAnalyzing || !videoUrl}
                className="mt-4 w-full py-3 px-6 rounded-full font-semibold text-white bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 shadow-lg hover:shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300 border-none"
              >
                {isAnalyzing ? "Analyzing..." : "Try it Free"}
              </Button>
            </div>

            {/* Footer */}
            <p className="text-sm text-cyan-300 font-medium">No credit card required • Get instant insights</p>
          </div>
        </section>

        {/* Analysis Results */}
        {analysisData && (
          <section className="py-12 px-4 bg-muted/30">
            <div className="container mx-auto">
              <AnalysisResults data={analysisData} onNewAnalysis={handleNewAnalysis} />
            </div>
          </section>
        )}

        {/* Key Benefits */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-[#0f1a3b] via-[#1a1f3a] to-[#0a0e1a] overflow-hidden">
          {/* Background Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px]" />
          
          <div className="container mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Why Creators Love Hype Wave Maker
            </h2>
            <p className="text-center text-cyan-300/70 mb-12 max-w-2xl mx-auto">
              Powerful AI tools designed to skyrocket your YouTube success
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group bg-gradient-to-br from-blue-900/40 to-cyan-900/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)' }}>
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-100">Boost Your Views</h3>
                <p className="text-cyan-300/70 leading-relaxed">
                  Get data-driven recommendations to optimize titles, thumbnails, and descriptions for maximum reach.
                </p>
              </div>
              
              <div className="group bg-gradient-to-br from-purple-900/40 to-pink-900/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(192, 132, 252, 0.4)' }}>
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-100">AI-Powered Insights</h3>
                <p className="text-purple-300/70 leading-relaxed">
                  Our advanced AI analyzes thousands of successful videos to give you winning strategies.
                </p>
              </div>
              
              <div className="group bg-gradient-to-br from-orange-900/40 to-yellow-900/20 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/20 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ boxShadow: '0 0 20px rgba(251, 146, 60, 0.4)' }}>
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-orange-100">Track Your Growth</h3>
                <p className="text-orange-300/70 leading-relaxed">
                  Monitor your performance with detailed analytics and see your channel grow in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-[#0a0e1a] to-[#0f1a3b]">
          <div className="container mx-auto max-w-5xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              Everything You Need to Succeed
            </h2>
            <p className="text-center text-blue-300/70 mb-12">
              Comprehensive tools for video optimization and growth
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:bg-white/10 group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{ boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)' }}>
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-100">SEO Optimization</h3>
                  <p className="text-blue-300/70">
                    Get keyword suggestions, tag recommendations, and title improvements to rank higher in search.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:bg-white/10 group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{ boxShadow: '0 0 15px rgba(168, 85, 247, 0.3)' }}>
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-100">Thumbnail Analyzer</h3>
                  <p className="text-purple-300/70">
                    AI-powered thumbnail analysis shows you what works and what doesn't before you publish.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 hover:bg-white/10 group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{ boxShadow: '0 0 15px rgba(249, 115, 22, 0.3)' }}>
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-orange-100">Performance Dashboard</h3>
                  <p className="text-orange-300/70">
                    Track views, engagement, and growth metrics all in one beautiful, easy-to-use dashboard.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:bg-white/10 group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{ boxShadow: '0 0 15px rgba(34, 197, 94, 0.3)' }}>
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-100">Trend Detection</h3>
                  <p className="text-green-300/70">
                    Stay ahead with AI that spots trending topics and suggests content ideas for your niche.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-[#0f1a3b] to-[#0a0e1a] overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />
          
          <div className="container mx-auto max-w-5xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              What Creators Are Saying
            </h2>
            <p className="text-center text-purple-300/70 mb-12">
              Join thousands of creators growing their channels
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-gradient-to-br from-blue-900/50 to-cyan-900/30 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4" style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)' }}>
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-cyan-100/80 mb-6 italic">
                    "Hype Wave Maker helped me double my views in just two months. The AI insights are incredible!"
                  </p>
                  <div className="font-semibold text-cyan-100">Sarah Johnson</div>
                  <div className="text-sm text-cyan-300/60">Tech Review Channel</div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-4" style={{ boxShadow: '0 0 20px rgba(192, 132, 252, 0.4)' }}>
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-purple-100/80 mb-6 italic">
                    "Finally, a tool that actually understands what makes videos go viral. Game changer for my channel!"
                  </p>
                  <div className="font-semibold text-purple-100">Marcus Chen</div>
                  <div className="text-sm text-purple-300/60">Gaming Content Creator</div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-gradient-to-br from-orange-900/50 to-yellow-900/30 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center mb-4" style={{ boxShadow: '0 0 20px rgba(251, 146, 60, 0.4)' }}>
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-orange-100/80 mb-6 italic">
                    "The thumbnail analyzer alone is worth it. My click-through rate has increased by 40%!"
                  </p>
                  <div className="font-semibold text-orange-100">Emily Rodriguez</div>
                  <div className="text-sm text-orange-300/60">Lifestyle Vlogger</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-[#0a0e1a] to-[#0f1a3b]">
          <div className="container mx-auto text-center max-w-3xl relative z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-[100px]" />
            
            <h2 className="relative text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
              Ready to Grow Your Channel?
            </h2>
            <p className="relative text-xl text-blue-200/80 mb-8">
              Join thousands of creators who are already using AI to optimize their content and grow faster.
            </p>
            <Button 
              size="lg" 
              asChild
              className="relative bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 hover:from-pink-500 hover:via-orange-400 hover:to-yellow-400 text-white border-none shadow-lg hover:shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6"
            >
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
