import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Lightbulb, Target, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Hype Wave Maker
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering creators with AI technology to unlock their full potential on YouTube
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Hype Wave Maker was born from a simple observation: talented creators were struggling to get their content seen, not because their videos weren't good, but because they lacked the data and insights to optimize their content strategy.
              </p>
              <p>
                As content creators ourselves, we experienced the frustration of spending hours creating videos only to see them underperform. We knew there had to be a better way. That's when we decided to combine our passion for video creation with cutting-edge AI technology.
              </p>
              <p>
                After months of research, analyzing millions of successful videos, and testing various algorithms, we created Hype Wave Maker—an AI-powered platform that gives every creator access to the same insights and optimization strategies used by the biggest channels on YouTube.
              </p>
              <p>
                Today, we're proud to help thousands of creators around the world grow their channels, reach more viewers, and turn their passion into success.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Democratize Success</h3>
                  <p className="text-muted-foreground">
                    Make professional-grade video optimization tools accessible to every creator, regardless of their channel size or budget.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <Lightbulb className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Innovate Continuously</h3>
                  <p className="text-muted-foreground">
                    Stay at the forefront of AI technology, constantly improving our algorithms to provide the most accurate and actionable insights.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Build Community</h3>
                  <p className="text-muted-foreground">
                    Foster a supportive community where creators can learn from each other and grow together.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <Heart className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Empower Creators</h3>
                  <p className="text-muted-foreground">
                    Help creators focus on what they do best—creating amazing content—while we handle the optimization and analytics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">The Technology Behind Hype Wave Maker</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Our platform is powered by advanced machine learning algorithms trained on millions of successful YouTube videos. We analyze patterns in titles, thumbnails, descriptions, tags, and engagement metrics to understand what makes content perform well.
              </p>
              <p>
                The AI continuously learns from new data, adapting to changing trends and platform algorithms. This means our recommendations are always current and relevant to today's YouTube landscape.
              </p>
              <p>
                We've built our technology with privacy and security at its core. Your video data is processed securely, and we never share your insights with anyone else. Your success is your own.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Our Vision for the Future</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We envision a future where every creator has the tools and insights they need to succeed. A future where great content gets the recognition it deserves, and where AI helps amplify human creativity rather than replace it.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We're working on exciting new features including real-time trend prediction, collaborative tools for creator teams, and even deeper insights into audience behavior. Our goal is to become the essential companion for every serious YouTube creator.
            </p>
            <p className="text-lg text-muted-foreground">
              Join us on this journey. Together, we're shaping the future of content creation.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
