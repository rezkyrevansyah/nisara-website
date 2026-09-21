"use client";

import React from "react";
import { MapPin, School, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { FACTS } from "@/data/content";

const iconMap = {
  "map-pin": MapPin,
  school: School,
  smartphone: Smartphone,
};

export default function WhyNisaraSection() {
  return (
    <section className="w-full bg-paper px-4 sm:px-8 md:px-12 lg:px-[72px] py-12 sm:py-16 md:py-[88px]">
      <div className="max-w-[1296px] mx-auto flex flex-col gap-8 sm:gap-10 md:gap-[42px]">
        {/* Header */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6 lg:gap-20">
          <div className="max-w-[650px] flex flex-col gap-2.5 sm:gap-3">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[1.4px] text-terra uppercase">
              MENGAPA KITA PERLU BERSUARA
            </span>
            <h2 className="font-heading text-[26px] sm:text-[36px] md:text-[44px] leading-[1.15] tracking-[-0.8px] sm:tracking-[-1.2px] text-plum-dark font-normal break-words">
              Yang terasa kecil bagi orang lain, bisa tinggal lama di tubuh kita.
            </h2>
          </div>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] text-muted max-w-[430px]">
            Pelecehan sering dinormalisasi, terutama di ruang publik, kampus, dan internet.
            Nisara hadir agar kita punya bahasa, pilihan, dan dukungan.
          </p>
        </div>

        {/* 3 Facts Row / Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 border-y border-line divide-y md:divide-y-0 md:divide-x divide-line">
          {FACTS.map((fact, index) => {
            const Icon = iconMap[fact.iconName];
            return (
              <motion.div
                key={fact.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 sm:p-7 md:p-8 flex flex-col gap-3.5 sm:gap-[18px] group hover:bg-cream/40 transition-colors"
              >
                <div className="w-full flex items-center justify-between">
                  <span className="text-[12px] font-bold text-terra">{fact.number}</span>
                  <div className="w-[34px] h-[34px] rounded-full bg-cream flex items-center justify-center text-plum group-hover:scale-110 transition-transform">
                    <Icon className="w-[20px] h-[20px]" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-[24px] md:text-[27px] text-ink">
                  {fact.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-muted">{fact.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Source note */}
        <p className="text-[12px] text-muted italic font-normal">
          Catatan: informasi di atas adalah edukasi umum berdasarkan percakapan komunitas dan bukan
          statistik resmi.
        </p>
      </div>
    </section>
  );
}
