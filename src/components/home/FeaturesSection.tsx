import { Video, Target, TrendingUp, BarChart3, MessageSquare, Sparkles } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Real-Time Form Analysis",
    description:
      "AI-powered video analysis that identifies form issues and provides instant feedback on every rep.",
  },
  {
    icon: Target,
    title: "Precision Coaching",
    description:
      "Deliver targeted advice with detailed breakdowns of movement patterns and muscle engagement.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Monitor client improvements over time with visual progress reports and performance metrics.",
  },
  {
    icon: BarChart3,
    title: "Set & Rep Analytics",
    description:
      "Deep insights into workout performance including tempo, range of motion, and fatigue patterns.",
  },
  {
    icon: MessageSquare,
    title: "Client Communication",
    description:
      "Send personalized feedback and coaching cues directly to clients through the app.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description:
      "Smart suggestions for exercise modifications and corrections based on individual client data.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="orb orb-2 top-0 right-0" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container-wide mx-auto relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Everything you need to coach smarter
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful tools designed to help athletic trainers deliver precise,
            data-driven coaching for every client.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-soft hover:shadow-medium hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:shadow-accent transition-all duration-300">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
