import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "How does AI analyze my videos?",
      answer: "Hype Wave Maker uses advanced machine learning algorithms to analyze multiple aspects of your videos. Our AI examines your title, thumbnail, description, tags, video content, pacing, retention patterns, and engagement metrics. It then compares these elements against millions of successful videos in our database to identify optimization opportunities and provide personalized recommendations for improvement."
    },
    {
      question: "Is my data safe and secure?",
      answer: "Absolutely! We take data security very seriously. All your video data is encrypted in transit and at rest. We never share your analytics, insights, or video information with third parties. Your data is used solely to provide you with personalized recommendations, and you maintain full ownership and control. We're fully GDPR and CCPA compliant."
    },
    {
      question: "Does it work for YouTube Shorts?",
      answer: "Yes! Hype Wave Maker fully supports YouTube Shorts analysis. Our AI is specifically trained to understand the unique dynamics of short-form content, including optimal pacing, hook effectiveness, and Shorts-specific SEO strategies. You'll get tailored recommendations designed to maximize your Shorts performance."
    },
    {
      question: "Can I download reports?",
      answer: "Yes, you can download comprehensive PDF reports of your video analysis, channel performance metrics, and growth insights. These reports are perfect for sharing with team members, clients, or keeping for your records. You can customize which metrics to include and export data in various formats including PDF, CSV, and Excel."
    },
    {
      question: "How accurate are the AI recommendations?",
      answer: "Our AI recommendations are based on analyzing patterns from millions of successful videos across various niches. While we can't guarantee specific results (as many factors affect video performance), our users typically see significant improvements in CTR, engagement, and overall channel growth when implementing our suggestions. The more you use the platform, the more it learns about your specific audience and niche."
    },
    {
      question: "What video platforms do you support?",
      answer: "Currently, Hype Wave Maker is optimized specifically for YouTube, including regular videos, Shorts, and live streams. We chose to focus on YouTube to provide the most accurate and valuable insights. Support for additional platforms like TikTok and Instagram Reels is on our roadmap for future releases."
    },
    {
      question: "Do I need technical knowledge to use this?",
      answer: "Not at all! Hype Wave Maker is designed to be user-friendly for creators of all technical levels. Our interface is intuitive, and all recommendations are presented in plain English with clear action steps. You simply paste your video URL, and our AI does the rest. No coding, no complex configurations—just actionable insights."
    },
    {
      question: "How long does video analysis take?",
      answer: "Most video analyses complete within 30-60 seconds. Complex or longer videos may take up to 2 minutes. You'll receive real-time updates during the analysis process, and you can continue browsing the platform while your video is being analyzed. You'll get a notification when your insights are ready."
    },
    {
      question: "Can I analyze videos from other channels?",
      answer: "Yes! You can analyze any public YouTube video, not just your own. This is perfect for competitive research, learning from successful creators in your niche, or understanding what makes viral videos work. However, detailed performance metrics are only available for videos from channels you've connected."
    },
    {
      question: "Is there a limit to how many videos I can analyze?",
      answer: "This depends on your subscription plan. Our free tier allows you to analyze up to 5 videos per month. Paid plans offer higher limits, with our Pro plan providing unlimited video analysis. Check our pricing page for detailed information about each plan's features and limits."
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Got questions? We've got answers. Find everything you need to know about Hype Wave Maker.
            </p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="/blog" 
                className="inline-flex items-center justify-center px-6 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
              >
                Read Our Blog
              </a>
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-center mb-8">Popular Help Topics</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Getting Started</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Learn the basics of using Hype Wave Maker
                  </p>
                  <a href="#" className="text-primary text-sm hover:underline">
                    View Guide →
                  </a>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Account & Billing</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Manage your subscription and payments
                  </p>
                  <a href="#" className="text-primary text-sm hover:underline">
                    View Guide →
                  </a>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Best Practices</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Tips for maximizing your results
                  </p>
                  <a href="#" className="text-primary text-sm hover:underline">
                    View Guide →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
