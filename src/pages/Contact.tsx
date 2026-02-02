import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@formspotter.com",
    href: "mailto:info@formspotter.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (315) 882-5458",
    href: "tel:+13158825458",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "New York, NY",
    href: "#",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: "#",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="orb orb-1 -top-[200px] -right-[200px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow" />
        </div>

        <div className="container-tight mx-auto text-center relative">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Let's elevate your <span className="text-gradient">coaching</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to give your clients the edge? Schedule a demo or ask us anything
            about how Form Spotter can transform your training practice.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background relative">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Get in touch
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Want to see AI form analysis in action? Have questions about how
                it works for your gym or training practice? We're here to help.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 group-hover:shadow-accent transition-all duration-300">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="p-8 md:p-10 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-soft relative overflow-hidden">
                {/* Form glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

                <div className="relative">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Send us a message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-12 bg-background/50 border-border/50 focus:border-accent"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-12 bg-background/50 border-border/50 focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Gym / Facility (Optional)</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your gym or training facility"
                        value={formData.company}
                        onChange={handleChange}
                        className="h-12 bg-background/50 border-border/50 focus:border-accent"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your training practice, number of clients, and what you're looking for..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="resize-none bg-background/50 border-border/50 focus:border-accent"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-80 bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 shadow-accent">
              <MapPin className="w-8 h-8 text-accent" />
            </div>
            <p className="text-lg font-medium text-foreground">
              New York, NY
            </p>
            <p className="text-muted-foreground">
              United States
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
