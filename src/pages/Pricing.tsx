import { ArrowRight, Users, Zap, Shield, HeadphonesIcon } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Users,
    title: "Unlimited Clients",
    description: "Train as many clients as you want with full AI form analysis on every session.",
  },
  {
    icon: Zap,
    title: "Real-Time Analysis",
    description: "Instant form feedback powered by advanced computer vision and machine learning.",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security to protect your clients' health and training data.",
  },
  {
    icon: HeadphonesIcon,
    title: "Trainer Support",
    description: "Dedicated onboarding and ongoing support to maximize your coaching results.",
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="orb orb-1 -top-[200px] left-1/4" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow" />
        </div>

        <div className="container-tight mx-auto text-center relative">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Plans built for <span className="text-gradient">trainers</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you're a solo trainer or run a full gym, we have a plan that fits your coaching needs.
          </p>
        </div>
      </section>

      {/* Contact CTA Card */}
      <section className="section-padding bg-background -mt-8 relative">
        <div className="container-tight mx-auto">
          <div className="relative p-12 md:p-16 rounded-3xl bg-accent/10 border border-accent/50 shadow-accent text-center">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 rounded-full bg-accent-gradient flex items-center justify-center shadow-accent animate-glow-pulse">
                <Users className="w-10 h-10 text-accent-foreground" />
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Let's Build Your Plan
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
                Tell us about your training practice—how many clients you coach, your facility setup, and your goals. We'll create a custom plan for you.
              </p>

              <Button variant="accent" size="xl" asChild className="animate-glow-pulse">
                <Link to="/contact">
                  Contact Our Team
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="container-wide mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              What You Get
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              Enterprise-grade features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-medium group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="orb orb-2 bottom-0 right-1/4" style={{ animationDelay: "-12s" }} />
        </div>

        <div className="container-tight mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to coach smarter?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            See how Form Spotter can help you deliver better results for your clients.
            Schedule a demo today.
          </p>
          <Button variant="accent" size="xl" asChild className="animate-glow-pulse">
            <Link to="/contact">
              Contact Our Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
