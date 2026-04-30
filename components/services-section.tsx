"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const services = [
  {
    title: "Hardwood",
    description: "Premium solid and engineered hardwood flooring with timeless beauty and durability.",
    image: "/images/service-hardwood.jpg",
    details: "Our hardwood flooring options include oak, maple, walnut, and exotic species. Expert installation with precision fitting and seamless transitions.",
  },
  {
    title: "Vinyl Plank",
    description: "Luxury vinyl plank (LVP) offering waterproof durability with stunning wood aesthetics.",
    image: "/images/service-vinyl.jpg",
    details: "100% waterproof vinyl planks perfect for kitchens, bathrooms, and basements. Realistic wood textures with easy maintenance.",
  },
  {
    title: "Laminate",
    description: "High-quality laminate flooring combining affordability with exceptional style.",
    image: "/images/service-laminate.jpg",
    details: "Durable laminate options with advanced scratch and wear resistance. Wide variety of styles and textures available.",
  },
  {
    title: "Tile",
    description: "Elegant tile installations for bathrooms, kitchens, and entryways.",
    image: "/images/service-tile.jpg",
    details: "Porcelain, ceramic, and natural stone tile installation. Custom patterns including herringbone, chevron, and mosaic designs.",
  },
  {
    title: "Carpet",
    description: "Plush, comfortable carpet installations for bedrooms and living spaces.",
    image: "/images/service-carpet.jpg",
    details: "Premium carpet brands with stain-resistant technology. Professional stretching and seaming for flawless results.",
  },
  {
    title: "Custom Stairs",
    description: "Bespoke stair treads and custom finishing for a cohesive look throughout your home.",
    image: "/images/service-stairs.jpg",
    details: "Custom stair nosing, treads, and risers to match your flooring. Safety-focused installation with anti-slip options.",
  },
];

function ServiceCard({
  service,
  index,
  onSelect,
}: {
  service: (typeof services)[0];
  index: number;
  onSelect: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((y - centerY) / 20);
    setRotateY((centerX - x) / 20);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
      className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      data-hover
    >
      {/* Background Image */}
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Glow border on hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/30 transition-all duration-500 group-hover:shadow-[inset_0_0_30px_rgba(200,170,110,0.1)]" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <motion.h3
          className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
        >
          {service.title}
        </motion.h3>
        <motion.p
          className="text-sm text-muted-foreground opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100"
        >
          {service.description}
        </motion.p>
        <motion.span
          className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200"
        >
          Learn more
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.span>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);

  return (
    <section ref={sectionRef} id="services" className="py-24 md:py-32">
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
              Our <span className="text-gradient">Services</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            From hardwood to custom stairs, we deliver premium flooring solutions
            tailored to your unique style and needs.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              onSelect={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/90 backdrop-blur-xl"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-card rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 p-2 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                data-hover
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {selectedService.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {selectedService.description}
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    {selectedService.details}
                  </p>
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity w-fit"
                    data-hover
                  >
                    Get a Quote
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
