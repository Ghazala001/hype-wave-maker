import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { 
  Video, 
  FileText, 
  Image, 
  TrendingUp, 
  BarChart3, 
  Target,
  Sparkles,
  Zap,
  Users,
  Clock,
  CheckCircle2,
  Search
} from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful AI Tools for YouTube Success
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to optimize your videos, grow your audience, and dominate your niche
            </p>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-20">
              {/* Video Analysis */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Video className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-3xl font-bold mb-4">AI Video Analysis</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our advanced AI examines every aspect of your video—from pacing to content structure—to identify what's working and what could be improved. Get detailed reports on viewer retention points, engagement triggers, and content optimization opportunities.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Analyze video content and structure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Identify retention drop-off points</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Get personalized improvement suggestions</span>
                    </li>
                  </ul>
                </div>
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                  <CardContent className="p-8">
                    <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
                      <Video className="h-20 w-20 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Title & SEO */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5 md:order-first order-last">
                  <CardContent className="p-8">
                    <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
                      <FileText className="h-20 w-20 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
                <div>
                  <Search className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Title & SEO Optimization</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Craft titles that rank high and drive clicks. Our AI analyzes top-performing videos in your niche to suggest keywords, phrases, and title structures that maximize discoverability and click-through rates.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Generate click-worthy titles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Get keyword and tag recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Optimize descriptions for search ranking</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Thumbnail Suggestions */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Image className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Thumbnail Intelligence</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Your thumbnail is your first impression. Our AI analyzes color schemes, composition, text placement, and emotional appeal to help you create thumbnails that stand out in crowded feeds and drive more clicks.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Analyze thumbnail effectiveness</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Get design and composition tips</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Compare against top performers</span>
                    </li>
                  </ul>
                </div>
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                  <CardContent className="p-8">
                    <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
                      <Image className="h-20 w-20 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Growth Insights */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5 md:order-first order-last">
                  <CardContent className="p-8">
                    <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-20 w-20 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
                <div>
                  <TrendingUp className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Growth Insights</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Understand what's driving your channel's growth with actionable insights. Track your progress over time, identify your best-performing content, and get strategic recommendations for sustained growth.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Track channel growth metrics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Identify content patterns that work</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Get strategic growth recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Performance Dashboard */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <BarChart3 className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Performance Dashboard</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    All your important metrics in one beautiful, easy-to-understand dashboard. Monitor views, engagement, subscriber growth, and revenue—all with real-time updates and intuitive visualizations.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Real-time analytics and reporting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Custom date ranges and comparisons</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Export reports for stakeholders</span>
                    </li>
                  </ul>
                </div>
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                  <CardContent className="p-8">
                    <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-20 w-20 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Features Grid */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Even More Features</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <Sparkles className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Trend Detection</h3>
                  <p className="text-muted-foreground">
                    Stay ahead of the curve with AI-powered trend analysis that spots emerging topics in your niche before they go mainstream.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <Target className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Competitor Analysis</h3>
                  <p className="text-muted-foreground">
                    Understand what's working for similar channels and find opportunities to differentiate your content and capture market share.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <Zap className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Quick Actions</h3>
                  <p className="text-muted-foreground">
                    Streamline your workflow with one-click optimizations, bulk updates, and automated recommendations for your entire video library.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Audience Insights</h3>
                  <p className="text-muted-foreground">
                    Deep dive into who's watching your content, when they're watching, and what keeps them coming back for more.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <Clock className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Upload Scheduling</h3>
                  <p className="text-muted-foreground">
                    Find the optimal posting times for your audience and schedule your content for maximum visibility and engagement.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <FileText className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Content Ideas</h3>
                  <p className="text-muted-foreground">
                    Never run out of video ideas with AI-generated content suggestions tailored to your niche and audience preferences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Unlock These Features?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start optimizing your videos today and see the difference AI can make for your channel.
            </p>
            <Button size="lg" asChild>
              <NavLink to="/">Get Started Free</NavLink>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
