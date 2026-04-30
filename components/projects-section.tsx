"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate, useInView } from "framer-motion";

// Project images with flooring installations
const projects = [
  { image: "/images/project-1.jpg", label: "Herringbone Oak Living Room" },
  { image: "/images/project-2.jpg", label: "Luxury Vinyl Kitchen" },
  { image: "/images/project-3.jpg", label: "Walnut Master Bedroom" },
  { image: "/images/project-4.jpg", label: "Marble Tile Bathroom" },
  { image: "/images/project-5.jpg", label: "Custom Oak Staircase" },
  { image: "/images/project-6.jpg", label: "Dark Walnut Office" },
  { image: "/images/service-hardwood.jpg", label: "Premium Hardwood" },
  { image: "/images/service-vinyl.jpg", label: "Waterproof LVP" },
  { image: "/images/service-laminate.jpg", label: "Modern Laminate" },
  { image: "/images/service-tile.jpg", label: "Porcelain Tile" },
  { image: "/images/service-carpet.jpg", label: "Plush Carpet" },
  { image: "/images/service-stairs.jpg", label: "Stair Treads" },
  { image: "/images/hero-flooring.jpg", label: "Luxury Living Space" },
  { image: "/images/after-floor.jpg", label: "Refinished Hardwood" },
  { image: "/images/texture-oak.jpg", label: "Oak Wood Grain" },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section ref={sectionRef} id="projects" className="relative overflow-hidden">
      {/* Section Header */}
      <div className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div className="text-center">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-primary mx-auto mb-8"
            />

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : { y: 100 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                Project <span className="text-gradient">Showcase</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Move your cursor to reveal our portfolio of completed transformations across Surrey and beyond.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Gallery Spotlight Grid */}
      <div
        className="min-h-screen overflow-hidden relative group"
        onMouseMove={handleMouseMove}
        style={{ backgroundColor: "#000000" }}
      >
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Spotlight effect following mouse */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.15),
                transparent 80%
              )
            `,
          }}
        />

        {/* Project grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-900 w-full h-full min-h-screen">
          {projects.map((project, i) => (
            <div key={i} className="relative bg-black group/card overflow-hidden">
              <div className="absolute inset-0 bg-neutral-900/50" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                className="w-full h-full object-cover opacity-20 grayscale group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500 transform group-hover/card:scale-110"
                alt={project.label}
              />
              {/* Label on hover */}
              <div className="absolute bottom-0 left-0 p-4 translate-y-full group-hover/card:translate-y-0 transition-transform duration-300">
                <span className="text-white font-mono text-xs bg-primary px-2 py-1">
                  {project.label}
                </span>
              </div>

              {/* Corner Markers */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
