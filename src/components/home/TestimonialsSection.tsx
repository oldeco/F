import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "This platform has revolutionized how I coach. My clients are seeing 40% faster strength gains with the precise form feedback.",
    author: "M.T.",
    role: "Strength Coach",
    rating: 5,
  },
  {
    quote:
      "The AI form analysis catches things I might miss. It's like having an extra set of expert eyes on every single rep.",
    author: "S.M.",
    role: "Personal Trainer",
    rating: 5,
  },
  {
    quote:
      "Finally, a tool that helps me scale my coaching without sacrificing quality. My clients love the detailed feedback.",
    author: "J.C.",
    role: "CrossFit Coach",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-card/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="orb orb-3 -bottom-[200px] left-1/4" style={{ animationDelay: "-8s" }} />
      </div>

      <div className="container-wide mx-auto relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Trusted by top trainers
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of athletic trainers who are transforming how they coach.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-soft hover:shadow-medium hover:border-accent/20 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30">
                  <span className="text-lg font-semibold text-accent">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
