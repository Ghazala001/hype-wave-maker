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
  Check
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface AnalysisResultsProps {
  data: {
    url: string;
    titleSuggestions: string[];
    thumbnailIdeas: string[];
    seoKeywords: string[];
    summary: string;
    metrics: {
      estimatedReach: string;
      viralPotential: string;
      retentionScore: number;
    };
  };
  onNewAnalysis: () => void;
}

const AnalysisResults = ({ data, onNewAnalysis }: AnalysisResultsProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
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
    </div>
  );
};

export default AnalysisResults;
