"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="tentang"
      className="w-full bg-paper px-4 sm:px-8 md:px-12 lg:px-[72px] py-4 sm:py-6 md:py-8"
      aria-label="Tentang Nisara"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[1296px] mx-auto bg-cream rounded-[20px] sm:rounded-[24px] md:rounded-[28px] p-5 sm:p-8 md:p-12 flex flex-col lg:flex-row gap-7 lg:gap-[52px] items-center overflow-hidden border border-line/40 shadow-card"
      >
        {/* Copy Column */}
        <div className="flex-1 w-full flex flex-col gap-4 sm:gap-5 md:gap-6 items-start">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span
              className="w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] rounded-full bg-terra shrink-0 animate-pulse"
              aria-hidden="true"
            />
            <span className="text-[10px] sm:text-[11px] md:text-[12px] font-bold tracking-[1.2px] sm:tracking-[1.4px] text-plum uppercase">
              RUANG SEBAYA PEREMPUAN INDONESIA
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-semibold text-[32px] xs:text-[38px] sm:text-[48px] md:text-[60px] lg:text-[66px] leading-[1.08] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] text-plum-dark break-words">
            Berdaya. Menggema.
            <br />
            Merangkul.
          </h1>

          {/* Subtitle */}
          <p className="text-[14px] sm:text-[16px] md:text-[19px] leading-[1.6] text-muted max-w-[580px]">
            Ruang sebaya untuk perempuan yang ingin paham, bersuara, dan tidak sendirian
            menghadapi kekerasan—dari kampus hingga ruang digital.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-1">
            <a
              href="#panduan"
              className="inline-flex items-center justify-center gap-2 bg-plum text-white text-[14px] sm:text-[15px] font-medium min-h-[48px] px-5 py-3 rounded-[26px] hover:bg-plum-dark transition-all hover:shadow-md active:scale-95 text-center"
            >
              <span>Saya ingin paham dulu</span>
              <ArrowDown className="w-[17px] h-[17px]" aria-hidden="true" />
            </a>
            <a
              href="#gabung"
              className="inline-flex items-center justify-center gap-2 border border-plum text-plum text-[14px] sm:text-[15px] font-medium min-h-[48px] px-5 py-3 rounded-[26px] hover:bg-plum/5 transition-all active:scale-95 text-center"
            >
              <HeartHandshake className="w-[17px] h-[17px]" aria-hidden="true" />
              <span>Gabung Sahabat</span>
            </a>
          </div>

          {/* Assurance microcopy */}
          <p className="text-[12px] md:text-[13px] text-muted italic font-normal pt-1">
            Kamu tidak salah. Kamu tidak sendirian. Ada langkah yang bisa diambil hari ini.
          </p>
        </div>

        {/* Hero Photo Column */}
        <div className="w-full lg:w-[480px] xl:w-[535px] h-[220px] xs:h-[260px] sm:h-[340px] lg:h-[460px] shrink-0 relative rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1512025171430-131d62a041a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3ODk5NTcyNDl8&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Komunitas perempuan Indonesia saling merangkul dan berdaya bersama"
            fill
            sizes="(max-width: 1024px) 100vw, 535px"
            priority
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/20 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
