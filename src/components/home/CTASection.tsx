import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-tight mx-auto relative">
        <div className="relative rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl animate-pulse" style={{ animationDelay: "-2s" }} />
            <div className="absolute inset-0 grid-pattern opacity-20" />
          </div>

          <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to elevate your <span className="text-gradient">coaching</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Start helping your clients perfect their form and maximize their results today.
              Get in touch to learn how we can help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="accent"
                size="xl"
                asChild
                className="animate-glow-pulse"
              >
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-border/50"
                asChild
              >
                <Link to="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
