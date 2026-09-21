"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/data/content";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`w-full bg-nav border-b border-line transition-all duration-200 ${
        scrolled ? "shadow-sm backdrop-blur-md bg-nav/95" : ""
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-[72px] h-[64px] sm:h-[76px] md:h-[91.5px] flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="Nisara Beranda"
        >
          <div className="relative w-[42px] h-[42px] sm:w-[50px] sm:h-[50px] md:w-[62px] md:h-[62px] shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/images/nisara-logo.png"
              alt="Logo Nisara"
              fill
              sizes="(max-width: 640px) 42px, (max-width: 768px) 50px, 62px"
              priority
              className="object-contain"
            />
          </div>
          <span className="sr-only">Nisara</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-7"
          aria-label="Navigasi Utama"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-ink hover:text-plum transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-terra hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#gabung"
            className="inline-flex items-center gap-2 bg-plum text-white text-[14px] font-medium px-[18px] py-[11px] rounded-[24px] hover:bg-plum-dark transition-all hover:shadow-md active:scale-95"
          >
            <span>Gabung Komunitas</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-11 h-11 rounded-full bg-cream flex items-center justify-center text-plum border border-line focus:outline-none focus-visible:ring-2 focus-visible:ring-terra active:scale-95"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-ink" />
          ) : (
            <Menu className="w-5 h-5 text-ink" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[100px] sm:top-[116px] bg-plum-dark/40 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 bg-paper border-b border-line shadow-xl z-50 md:hidden px-5 sm:px-6 py-6"
            >
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[48px] text-[15px] sm:text-[16px] font-medium text-ink py-2.5 px-3 rounded-lg hover:bg-cream active:bg-cream/80 transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-muted" />
                  </a>
                ))}

                <div className="pt-4 border-t border-line flex flex-col gap-3">
                  <a
                    href="#gabung"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full bg-plum text-white text-[14px] font-bold py-3 px-4 rounded-xl text-center hover:bg-plum-dark transition-colors active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Gabung Komunitas</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:112"
                    className="w-full bg-cream text-plum border border-line text-[14px] font-semibold py-3 px-4 rounded-xl text-center hover:bg-rose/40 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-terra" />
                    <span>Panggilan Darurat (112)</span>
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
