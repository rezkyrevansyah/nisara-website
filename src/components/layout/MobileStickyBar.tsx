"use client";

import React, { useState, useEffect } from "react";
import { Phone, HeartHandshake } from "lucide-react";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Aksi Cepat Mobile"
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-paper/95 backdrop-blur-md border-t border-line px-3.5 py-3 shadow-sticky transition-transform"
    >
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        {/* Butuh Bantuan */}
        <a
          href="tel:112"
          className="flex-1 h-[48px] bg-plum hover:bg-plum-dark text-white rounded-[24px] flex items-center justify-center gap-2 text-[13px] font-bold shadow-sm active:scale-95 transition-all text-center"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          <span>Butuh bantuan</span>
        </a>

        {/* Gabung */}
        <a
          href="#gabung"
          className="flex-1 h-[48px] bg-paper border border-plum text-plum hover:bg-cream rounded-[24px] flex items-center justify-center gap-2 text-[13px] font-bold active:scale-95 transition-all text-center"
        >
          <HeartHandshake className="w-4 h-4 text-plum" aria-hidden="true" />
          <span>Gabung</span>
        </a>
      </div>
    </aside>
  );
}
