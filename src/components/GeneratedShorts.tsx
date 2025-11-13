import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Short {
  id: string;
  shortNumber: number;
  title: string;
  description: string;
  startTime: number;
  endTime: number;
  timestamp: string;
  previewUrl: string;
  downloadUrl: string | null;
}

interface GeneratedShortsProps {
  shorts: Short[];
}

const GeneratedShorts = ({ shorts }: GeneratedShortsProps) => {
  const { toast } = useToast();

  const handleShare = async (short: Short) => {
    const shareUrl = short.downloadUrl || short.previewUrl;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: short.title,
          text: short.description,
          url: shareUrl,
        });
        toast({
          title: "Shared successfully!",
          description: "Short has been shared",
        });
      } catch (error) {
        // User cancelled or error occurred
        if ((error as Error).name !== 'AbortError') {
          // Fallback to clipboard
          await navigator.clipboard.writeText(shareUrl);
          toast({
            title: "Link copied!",
            description: "Link copied to clipboard",
          });
        }
      }
    } else {
      // Fallback for browsers without share API
      try {
        await navigator.clipboard.writeText(shareUrl);
        toast({
          title: "Link copied!",
          description: "Link copied to clipboard",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Could not copy link",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
          Your Viral Shorts Are Ready! 🎉
        </h2>
        <p className="text-cyan-300/70">
          Preview your generated shorts below
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {shorts.map((short) => (
          <div
            key={short.id}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <Card className="relative bg-gradient-to-br from-blue-900/50 to-purple-900/30 backdrop-blur-xl border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-cyan-100 text-lg">
                  Short #{short.shortNumber}
                </CardTitle>
                <p className="text-sm text-cyan-300/60">{short.timestamp}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Video Preview */}
                <div className="relative aspect-[9/16] bg-black rounded-xl overflow-hidden">
                  <iframe
                    src={short.previewUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Description */}
                <p className="text-cyan-300/80 text-sm line-clamp-2">
                  {short.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white"
                    onClick={() => window.open(short.downloadUrl!, '_blank')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Watch on YouTube
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10"
                    onClick={() => handleShare(short)}
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="text-center text-sm text-cyan-300/60">
        <p>Note: Full video processing with effects and captions requires server-side setup.</p>
        <p>Currently showing preview clips from original video.</p>
      </div>
    </div>
  );
};

export default GeneratedShorts;