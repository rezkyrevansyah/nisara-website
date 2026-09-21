"use client";

import React from "react";
import { ShieldAlert, Phone } from "lucide-react";

export default function EmergencyTopBar() {
  return (
    <aside
      aria-label="Informasi Kontak Darurat"
      className="w-full bg-plum-dark text-white px-3 sm:px-6 md:px-12 py-2 sm:py-2.5 flex items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs md:text-[13px] font-medium z-50 transition-colors"
    >
      <ShieldAlert className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose shrink-0" aria-hidden="true" />
      <span className="text-center leading-tight">
        Dalam bahaya sekarang? Hubungi{" "}
        <a
          href="tel:112"
          className="font-bold text-rose underline decoration-rose/60 underline-offset-2 hover:text-white transition-colors"
          title="Telepon darurat 112"
        >
          112
        </a>{" "}
        atau SAPA{" "}
        <a
          href="tel:129"
          className="font-bold text-rose underline decoration-rose/60 underline-offset-2 hover:text-white transition-colors"
          title="Hotline SAPA 129 KemenPPPA"
        >
          129
        </a>
      </span>
      <a
        href="tel:112"
        className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-white border border-white/35 rounded-md hover:bg-white/10 hover:border-white transition-all active:scale-95 shrink-0"
      >
        <span>Hubungi sekarang</span>
        <Phone className="w-3.5 h-3.5" aria-hidden="true" />
      </a>
    </aside>
  );
}
