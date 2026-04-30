"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export function TransformationSection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const isInView = useInView(textRef, { once: true, amount: 0.5 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <section
      ref={containerRef}
      id="transformations"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          ref={textRef}
          style={{ opacity: textOpacity }}
          className="text-center mb-16"
        >
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
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              From <span className="text-muted-foreground">Worn</span>
            </motion.h2>
          </div>
          
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : { y: 100 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
            >
              To <span className="text-gradient">WOW</span>
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted-foreground mt-6 max-w-lg mx-auto"
          >
            Drag to reveal the transformation
          </motion.p>
        </motion.div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[16/10] md:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize glow"
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          data-hover
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0">
            <Image
              src="/images/after-floor.jpg"
              alt="After: Beautiful new hardwood flooring"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute bottom-6 right-6 glass px-4 py-2 rounded-full text-sm font-medium">
              After
            </div>
          </div>

          {/* Before Image (Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src="/images/before-floor.jpg"
              alt="Before: Worn old flooring"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute bottom-6 left-6 glass px-4 py-2 rounded-full text-sm font-medium">
              Before
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize"
            style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-primary-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </div>

          {/* Grain overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay" />
        </motion.div>
      </div>
    </section>
  );
}
