"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    word: "Precision",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    word: "Detail",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
  },
  {
    word: "No Shortcuts",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "100%", label: "Satisfaction Rate" },
];

export function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        {/* Values */}
        <div className="text-center mb-20">
          <div className="flex flex-wrap items-start justify-center gap-8 md:gap-16">
            {values.map((value, index) => (
              <motion.div
                key={value.word}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="text-primary mb-4"
                >
                  {value.icon}
                </motion.div>
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap">{value.word}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-20"
        />

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 1 + index * 0.15 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Decorative lines */}
        <div className="relative mt-20">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="absolute left-0 top-0 h-px bg-gradient-to-r from-primary/50 via-primary/10 to-transparent"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1.5, delay: 1.7 }}
            className="absolute right-0 top-4 h-px bg-gradient-to-l from-primary/50 via-primary/10 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
