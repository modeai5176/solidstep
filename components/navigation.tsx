"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Materials", href: "#materials" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass py-4" : "py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10" data-hover>
            <Image
              src="/images/logo.png"
              alt="Solid Step Flooring"
              width={160}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
                  data-hover
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                href="#contact"
                className="glass px-6 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full"
                data-hover
              >
                Get Estimate
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-10 p-2 text-foreground"
            data-hover
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-medium"
                >
                  Get Free Estimate
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
