import { Layout } from "@/components/layout/Layout";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision First",
    description:
      "Every rep matters. Our AI ensures trainers can spot form issues that lead to injury or slow progress.",
  },
  {
    icon: Heart,
    title: "Trainer Focused",
    description:
      "Built by trainers, for trainers. We understand the challenges of coaching multiple clients effectively.",
  },
  {
    icon: Lightbulb,
    title: "AI Innovation",
    description:
      "Cutting-edge computer vision and machine learning to analyze movement patterns in real-time.",
  },
  {
    icon: Users,
    title: "Client Success",
    description:
      "Help your clients achieve their goals faster with data-driven insights and personalized feedback.",
  },
];

const stats = [
  { value: "100+", label: "Active Trainers" },
  { value: "2M+", label: "Reps Analyzed" },
  { value: "40%", label: "Faster Progress" },
  { value: "95%", label: "Form Accuracy" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="orb orb-1 -top-[300px] right-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow" />
        </div>

        <div className="container-tight mx-auto text-center relative">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            We're building the future of <span className="text-gradient">athletic training</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Founded in 2025, Form Spotter was born from a simple idea: every athlete
            deserves perfect form. Today, we help trainers deliver
            precise, AI-powered coaching.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card/30 border-y border-border/50">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-accent">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="orb orb-3 bottom-0 left-0" style={{ animationDelay: "-5s" }} />
        </div>

        <div className="container-tight mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                From the gym floor to AI innovation
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Form Spotter started when our founders, experienced strength coaches
                  and software engineers, saw how hard it was to catch every form
                  breakdown when training multiple clients. Injuries were happening,
                  and progress was stalling.
                </p>
                <p>
                  They combined their expertise to build an AI that could analyze
                  movement patterns in real-time, giving trainers superhuman vision
                  to spot issues before they cause problems. Today, Form Spotter is
                  trusted by trainers worldwide.
                </p>
                <p>
                  We're a passionate team of athletes, coaches, and engineers,
                  united by our mission to help every client train safer and
                  achieve better results.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-glow" />
                <div className="text-6xl relative z-10">🏋️</div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-accent/10 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="container-wide mx-auto relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              What drives us every day
            </h2>
            <p className="text-lg text-muted-foreground">
              These principles guide every decision we make and every product
              we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 text-center hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
