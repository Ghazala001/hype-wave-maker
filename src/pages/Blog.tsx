import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "10 AI-Powered Strategies to Boost Your YouTube CTR by 50%",
      excerpt: "Discover how artificial intelligence can revolutionize your thumbnail and title optimization. Learn the data-driven techniques top creators use to dramatically increase their click-through rates and grow their channels faster.",
      category: "Growth Strategies",
      date: "May 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80"
    },
    {
      title: "The Ultimate Guide to YouTube SEO in 2024",
      excerpt: "Master the art of YouTube search optimization with this comprehensive guide. From keyword research to video metadata, learn how to make your content discoverable and rank higher in search results.",
      category: "SEO",
      date: "May 12, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80"
    },
    {
      title: "How to Create Thumbnails That Get Clicked Every Time",
      excerpt: "Your thumbnail is your first impression. Learn the psychology behind high-converting thumbnails, color theory, composition techniques, and design principles that make viewers stop scrolling and click on your video.",
      category: "Content Optimization",
      date: "May 8, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hype Wave Maker Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn everything about AI tools, YouTube growth strategies, SEO optimization, and content creation. Stay ahead with expert insights and actionable tips.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <Badge className="mb-4">Featured Post</Badge>
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    {blogPosts[0].category}
                  </Badge>
                  <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                  <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <button className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                    Read Full Article <ArrowRight className="h-4 w-4" />
                  </button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-3">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <button className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                      Read More <ArrowRight className="h-4 w-4" />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Explore by Category</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold mb-2">AI Tools</h3>
                  <p className="text-sm text-muted-foreground">12 articles</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold mb-2">Growth Strategies</h3>
                  <p className="text-sm text-muted-foreground">18 articles</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold mb-2">SEO</h3>
                  <p className="text-sm text-muted-foreground">15 articles</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold mb-2">Content Optimization</h3>
                  <p className="text-sm text-muted-foreground">20 articles</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest articles, tips, and insights delivered straight to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
