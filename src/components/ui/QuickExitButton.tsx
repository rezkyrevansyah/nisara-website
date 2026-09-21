"use client";

import React from "react";
import { EyeOff } from "lucide-react";

export default function QuickExitButton() {
  const handleQuickExit = () => {
    // Clear sensitive session / local cache and quickly replace location
    try {
      sessionStorage.clear();
    } catch {
      // ignore
    }
    window.location.replace("https://www.google.com");
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40">
      <button
        type="button"
        onClick={handleQuickExit}
        className="group flex items-center gap-2 bg-plum-dark/90 hover:bg-plum-dark text-white text-xs font-semibold px-3.5 py-2.5 rounded-full shadow-lg border border-white/20 backdrop-blur-md transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-terra"
        title="Klik untuk langsung menutup situs ini dan berpindah ke Google demi keamanan privasimu."
        aria-label="Keluar Cepat: Tutup situs ini segera dan buka Google"
      >
        <EyeOff className="w-3.5 h-3.5 text-rose group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">Keluar Cepat</span>
        <span className="text-[10px] px-1.5 py-0.5 bg-white/15 rounded text-white/90">
          ESC
        </span>
      </button>
    </div>
  );
}
