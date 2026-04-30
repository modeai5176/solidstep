"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Send, Phone, Mail, MapPin, Instagram } from "lucide-react";

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-background.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-primary mb-8"
            />

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : { y: 100 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Ready to <span className="text-gradient">Transform</span> Your Space?
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted-foreground text-lg mb-10 max-w-md"
            >
              Get a free estimate for your flooring project. Our team is ready to bring
              your vision to life with premium craftsmanship.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <a
                href="tel:+16045551234"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
                data-hover
              >
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>(604) 555-1234</span>
              </a>
              <a
                href="mailto:info@solidstepflooring.ca"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
                data-hover
              >
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>info@solidstepflooring.ca</span>
              </a>
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Surrey, British Columbia, Canada</span>
              </div>
              <a
                href="https://www.instagram.com/solid_step_flooring/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
                data-hover
              >
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <span>@solid_step_flooring</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass rounded-3xl p-8 md:p-10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">
                    We&apos;ve received your request and will be in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="(604) 555-1234"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="hardwood">Hardwood Flooring</option>
                      <option value="vinyl">Luxury Vinyl Plank</option>
                      <option value="laminate">Laminate Flooring</option>
                      <option value="tile">Tile Installation</option>
                      <option value="carpet">Carpet Installation</option>
                      <option value="stairs">Custom Stairs</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 pulse-glow"
                    data-hover
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Get Free Estimate
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
