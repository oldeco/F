import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PhoneMockup } from "./PhoneMockup";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background min-h-[90vh] flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        {/* Animated orbs */}
        <div className="orb orb-1 -top-[200px] -right-[200px]" style={{ animationDelay: "0s" }} />
        <div className="orb orb-2 top-1/2 -left-[150px]" style={{ animationDelay: "-7s" }} />
        <div className="orb orb-3 -bottom-[200px] right-1/4" style={{ animationDelay: "-14s" }} />
        
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow animate-pulse" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative container-wide mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm shadow-soft border border-border mb-8 animate-fade-up"
              style={{ animationDelay: "0ms" }}
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
                AI-powered form analysis for trainers
              </span>
              <ArrowRight className="w-4 h-4 text-accent" />
            </div>

            {/* Headline */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Perfect every rep,{" "}
              <span className="text-gradient">maximize results</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              The smart platform for athletic trainers to analyze client form,
              track progress, and deliver precise coaching advice for every set.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <Button variant="accent" size="xl" asChild className="animate-glow-pulse">
                <Link to="/contact">
                  Start Training Smarter
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-border/50 backdrop-blur-sm">
                <Play className="w-5 h-5" />
                See It In Action
              </Button>
            </div>

            {/* Social Proof */}
            <div
              className="mt-12 animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by elite trainers and gyms
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 opacity-50">
                {["CrossFit Elite", "Peak Performance", "Iron Athletics", "Apex Training", "FitPro"].map((company) => (
                  <div
                    key={company}
                    className="text-lg font-semibold text-muted-foreground"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div 
            className="flex justify-center lg:justify-end animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
