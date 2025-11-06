import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: May 15, 2024
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardContent className="pt-8 space-y-8">
                {/* Introduction */}
                <div>
                  <p className="text-muted-foreground">
                    At Hype Wave Maker, we take your privacy seriously. This Privacy Policy explains how we collect, use, protect, and share your personal information when you use our AI-powered video optimization platform. We believe in transparency and want you to feel confident about how your data is handled.
                  </p>
                </div>

                {/* Data Collection */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">What Information We Collect</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Account Information:</strong> When you create an account, we collect your name, email address, and password. This helps us identify you and keep your account secure.
                    </p>
                    <p>
                      <strong className="text-foreground">Video Data:</strong> When you analyze videos, we temporarily process video URLs, metadata (titles, descriptions, tags), and publicly available performance metrics. We use this data solely to provide you with insights and recommendations.
                    </p>
                    <p>
                      <strong className="text-foreground">Usage Information:</strong> We collect data about how you use our platform, including features accessed, analysis history, and interaction patterns. This helps us improve our service and personalize your experience.
                    </p>
                    <p>
                      <strong className="text-foreground">Device Information:</strong> We automatically collect technical information like your IP address, browser type, device type, and operating system. This helps us ensure compatibility and detect potential security issues.
                    </p>
                  </div>
                </div>

                {/* How We Use Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>We use your information to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide, maintain, and improve our AI video analysis services</li>
                      <li>Generate personalized recommendations and insights for your content</li>
                      <li>Send you important updates about your account and our services</li>
                      <li>Respond to your questions, comments, and support requests</li>
                      <li>Detect and prevent fraud, abuse, and security incidents</li>
                      <li>Analyze usage patterns to improve our platform's performance and features</li>
                      <li>Send you marketing communications (only if you've opted in)</li>
                    </ul>
                  </div>
                </div>

                {/* Cookies */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Cookies and Similar Technologies</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We use cookies and similar technologies to enhance your experience on our platform. Cookies are small text files stored on your device that help us remember your preferences and understand how you use our service.
                    </p>
                    <p>
                      <strong className="text-foreground">Essential Cookies:</strong> These are necessary for the platform to function properly, such as keeping you logged in.
                    </p>
                    <p>
                      <strong className="text-foreground">Analytics Cookies:</strong> These help us understand how users interact with our platform so we can improve it.
                    </p>
                    <p>
                      <strong className="text-foreground">Preference Cookies:</strong> These remember your settings and preferences for a better experience.
                    </p>
                    <p>
                      You can control cookies through your browser settings, but please note that disabling certain cookies may affect platform functionality.
                    </p>
                  </div>
                </div>

                {/* Third-Party Services */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We work with trusted third-party service providers to help us operate our platform. These partners include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-foreground">Cloud hosting providers</strong> for data storage and processing</li>
                      <li><strong className="text-foreground">Analytics services</strong> to understand platform usage</li>
                      <li><strong className="text-foreground">Payment processors</strong> for subscription billing</li>
                      <li><strong className="text-foreground">Email service providers</strong> for communications</li>
                      <li><strong className="text-foreground">YouTube API</strong> for accessing publicly available video data</li>
                    </ul>
                    <p>
                      These providers are contractually obligated to protect your data and use it only for the purposes we specify. We never sell your personal information to third parties.
                    </p>
                  </div>
                </div>

                {/* Data Security */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">How We Protect Your Data</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We implement industry-standard security measures to protect your information:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>All data is encrypted in transit using SSL/TLS protocols</li>
                      <li>Sensitive data is encrypted at rest in our secure databases</li>
                      <li>Regular security audits and vulnerability assessments</li>
                      <li>Strict access controls limiting who can view your data</li>
                      <li>Secure authentication and password protection</li>
                      <li>Regular backups to prevent data loss</li>
                    </ul>
                    <p>
                      While we strive to protect your data, no method of transmission over the internet is 100% secure. We encourage you to use strong passwords and keep your login credentials confidential.
                    </p>
                  </div>
                </div>

                {/* Your Rights */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>You have the following rights regarding your personal information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-foreground">Access:</strong> Request a copy of the personal data we hold about you</li>
                      <li><strong className="text-foreground">Correction:</strong> Update or correct inaccurate information</li>
                      <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal data</li>
                      <li><strong className="text-foreground">Portability:</strong> Receive your data in a portable format</li>
                      <li><strong className="text-foreground">Opt-out:</strong> Unsubscribe from marketing communications</li>
                      <li><strong className="text-foreground">Object:</strong> Object to certain types of data processing</li>
                    </ul>
                    <p>
                      To exercise any of these rights, please contact us using the information provided below. We'll respond to your request within 30 days.
                    </p>
                  </div>
                </div>

                {/* Data Retention */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">How Long We Keep Your Data</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We retain your personal information only for as long as necessary to provide our services and fulfill the purposes outlined in this policy. When you delete your account, we'll remove your personal information within 90 days, except where we're required to retain it for legal, regulatory, or security purposes.
                    </p>
                  </div>
                </div>

                {/* Children's Privacy */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Hype Wave Maker is not intended for users under the age of 16. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately, and we'll delete it.
                    </p>
                  </div>
                </div>

                {/* Changes to Policy */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make significant changes, we'll notify you via email or through a prominent notice on our platform. The "Last updated" date at the top of this page indicates when the policy was last revised.
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact Us About Privacy</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      If you have questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please don't hesitate to reach out:
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                      <p><strong className="text-foreground">Email:</strong> privacy@hypewavemaker.com</p>
                      <p><strong className="text-foreground">Support:</strong> support@hypewavemaker.com</p>
                      <p><strong className="text-foreground">Address:</strong> Hype Wave Maker, 123 Creator Street, Innovation City, CA 90210</p>
                    </div>
                    <p>
                      We're committed to protecting your privacy and will respond to your inquiries as quickly as possible.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
