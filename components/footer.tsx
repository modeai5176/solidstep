"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6" data-hover>
              <Image
                src="/images/logo.png"
                alt="Solid Step Flooring"
                width={180}
                height={68}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Transforming floors across Surrey with premium craftsmanship.
              Experience the difference of quality flooring installation.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/solid_step_flooring/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                data-hover
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                data-hover
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {["Hardwood", "Vinyl Plank", "Laminate", "Tile", "Carpet", "Custom Stairs"].map((item) => (
                <li key={item}>
                  <Link
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-hover
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="tel:+16045551234" className="hover:text-primary transition-colors" data-hover>
                  (604) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:info@solidstepflooring.ca" className="hover:text-primary transition-colors" data-hover>
                  info@solidstepflooring.ca
                </a>
              </li>
              <li>Surrey, BC, Canada</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Solid Step Flooring. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            data-hover
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
