"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const materials = [
  {
    name: "Natural Oak",
    description: "Warm honey tones with distinctive grain patterns",
    image: "/images/texture-oak.jpg",
  },
  {
    name: "Matte Vinyl",
    description: "Modern texture with subtle wood-look embossing",
    image: "/images/texture-vinyl.jpg",
  },
  {
    name: "Polished Marble",
    description: "Elegant veining with luxurious gloss finish",
    image: "/images/texture-tile.jpg",
  },
];

function MaterialCard({ material, index }: { material: (typeof materials)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative aspect-square rounded-2xl overflow-hidden cursor-zoom-in"
      data-hover
    >
      {/* Background Image */}
      <Image
        src={material.image}
        alt={material.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* Magnifier Effect */}
      {isHovered && (
        <div
          className="absolute w-32 h-32 rounded-full border-2 border-primary/50 pointer-events-none overflow-hidden"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${material.image})`,
              backgroundSize: "400%",
              backgroundPosition: `${-mousePosition.x * 2 + 64}px ${-mousePosition.y * 2 + 64}px`,
            }}
          />
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <div className="glass rounded-xl p-4">
          <h3 className="text-lg font-bold mb-1">{material.name}</h3>
          <p className="text-sm text-muted-foreground">{material.description}</p>
        </div>
      </div>

      {/* Zoom hint */}
      <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Zoom to explore
      </div>
    </motion.div>
  );
}

export function MaterialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} id="materials" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div className="text-center mb-16">
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
              Material <span className="text-gradient">Experience</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore the textures and finishes that define luxury flooring.
            Hover to zoom and experience each material up close.
          </motion.p>
        </motion.div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {materials.map((material, index) => (
            <MaterialCard key={material.name} material={material} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
