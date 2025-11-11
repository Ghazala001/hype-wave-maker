import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Lightbulb, 
  Target, 
  Hash, 
  FileText, 
  TrendingUp,
  Image as ImageIcon,
  RefreshCw,
  Copy,
  Check,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import GeneratedShorts from "./GeneratedShorts";

interface AnalysisResultsProps {
  data: {
    url: string;
    videoId: string;
    analysisId: string;
    titleSuggestions: string[];
    thumbnailIdeas: string[];
    seoKeywords: string[];
    summary: string;
    metrics: {
      estimatedReach: string;
      viralPotential: string;
      retentionScore: number;
    };
    viralMoments?: Array<{
      timestamp: string;
      description: string;
      startSeconds: number;
    }>;
  };
  onNewAnalysis: () => void;
}

const AnalysisResults = ({ data, onNewAnalysis }: AnalysisResultsProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [generatingShorts, setGeneratingShorts] = useState(false);
  const [generatedShorts, setGeneratedShorts] = useState<any[]>([]);
  const { toast } = useToast();

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
    toast({
      title: "Copied!",
      description: "Text copied to clipboard",
    });
  };

  const handleGenerateShorts = async () => {
    try {
      setGeneratingShorts(true);
      
      console.log('Generating shorts with data:', {
        analysisId: data.analysisId,
        videoId: data.videoId
      });
      
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-shorts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          analysisId: data.analysisId,
          videoId: data.videoId
        }),
      });

      console.log('Response status:', response.status);
      const results = await response.json();
      console.log('Response data:', results);

      if (!response.ok) {
        throw new Error(results.error || 'Failed to generate shorts');
      }
      
      if (!results.success) {
        throw new Error(results.error || 'Shorts generation failed');
      }

      setGeneratedShorts(results.shorts);
      
      toast({
        title: "Shorts Generated! 🎉",
        description: `${results.shorts.length} viral shorts तैयार हैं`,
      });

      // Scroll to shorts section
      setTimeout(() => {
        document.getElementById('generated-shorts')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 300);
    } catch (error) {
      console.error('Error generating shorts:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Shorts generate करने में समस्या आई",
        variant: "destructive",
      });
    } finally {
      setGeneratingShorts(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">Analysis Results</h2>
          <p className="text-muted-foreground">AI-powered insights for your video</p>
        </div>
        <Button onClick={onNewAnalysis} variant="outline" className="gap-2">
          <RefreshCw className="w-4 h-4" />
          New Analysis
        </Button>
      </div>

      {/* Metrics Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-card border-border/50">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Estimated Reach</p>
              <p className="text-2xl font-bold">{data.metrics.estimatedReach}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card border-border/50">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Viral Potential</p>
              <p className="text-2xl font-bold">{data.metrics.viralPotential}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card border-border/50">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Retention Score</p>
              <p className="text-2xl font-bold">{data.metrics.retentionScore}/10</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Summary */}
      <Card className="p-6 border-border/50">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Content Summary</h3>
            <p className="text-muted-foreground leading-relaxed">{data.summary}</p>
          </div>
        </div>
      </Card>

      {/* Title Suggestions */}
      <Card className="p-6 border-border/50">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Title Suggestions</h3>
            <div className="space-y-3">
              {data.titleSuggestions.map((title, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth group"
                >
                  <Badge variant="outline" className="mt-0.5 flex-shrink-0">
                    {index + 1}
                  </Badge>
                  <p className="flex-1 font-medium">{title}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(title, index)}
                    className="opacity-0 group-hover:opacity-100 transition-smooth"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Thumbnail Ideas */}
      <Card className="p-6 border-border/50">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
            <ImageIcon className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Thumbnail Ideas</h3>
            <div className="space-y-3">
              {data.thumbnailIdeas.map((idea, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth"
                >
                  <Badge variant="outline" className="mt-0.5 flex-shrink-0">
                    {index + 1}
                  </Badge>
                  <p className="flex-1">{idea}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* SEO Keywords */}
      <Card className="p-6 border-border/50">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
            <Hash className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">SEO Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {data.seoKeywords.map((keyword, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm cursor-pointer hover:bg-secondary/80 transition-smooth"
                  onClick={() => copyToClipboard(keyword, 100 + index)}
                >
                  {keyword}
                  {copiedIndex === 100 + index && (
                    <Check className="w-3 h-3 ml-1 text-green-600" />
                  )}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Viral Moments */}
      {data.viralMoments && data.viralMoments.length > 0 && (
        <Card className="p-6 border-green-500/20 bg-gradient-to-br from-green-900/10 to-emerald-900/10">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Viral Moments Detected</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {data.viralMoments.length} engaging moments जहाँ से shorts बनाए जा सकते हैं
              </p>
              <div className="space-y-3">
                {data.viralMoments.map((moment, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-smooth border border-green-500/20"
                  >
                    <Badge variant="outline" className="mt-0.5 flex-shrink-0 bg-green-500/10 border-green-500/30">
                      {moment.timestamp}
                    </Badge>
                    <p className="flex-1 text-sm">{moment.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Generate Shorts CTA */}
      {!generatedShorts.length && (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl" />
          <Card className="relative p-8 border-green-500/30 bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-xl text-center">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-green-400" />
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Viral Shorts बनाने के लिए तैयार?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              हमारा AI आपकी video के सबसे engaging moments से 3 optimized short clips automatically create करेगा
            </p>
            {data.viralMoments && data.viralMoments.length > 0 ? (
              <Button
                size="lg"
                onClick={handleGenerateShorts}
                disabled={generatingShorts}
                className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 hover:from-green-500 hover:via-emerald-400 hover:to-teal-400 text-white border-none shadow-lg hover:shadow-2xl hover:shadow-green-500/50 transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {generatingShorts ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Shorts बना रहे हैं...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    3 Viral Shorts Generate करें
                  </>
                )}
              </Button>
            ) : (
              <p className="text-yellow-400 text-sm">
                इस video में viral moments detect नहीं हुए। कृपया दूसरी video try करें।
              </p>
            )}
          </Card>
        </div>
      )}

      {/* Generated Shorts Section */}
      {generatedShorts.length > 0 && (
        <div id="generated-shorts">
          <GeneratedShorts shorts={generatedShorts} />
        </div>
      )}
    </div>
  );
};

export default AnalysisResults;
