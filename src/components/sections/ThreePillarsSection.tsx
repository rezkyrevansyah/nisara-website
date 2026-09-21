"use client";

import React from "react";
import { Sparkles, Megaphone, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import { PILLARS } from "@/data/content";

const iconMap = {
  sparkles: Sparkles,
  megaphone: Megaphone,
  "heart-handshake": HeartHandshake,
};

export default function ThreePillarsSection() {
  return (
    <section className="w-full bg-plum-dark text-white px-4 sm:px-8 md:px-12 lg:px-[72px] py-14 sm:py-18 md:py-[96px]">
      <div className="max-w-[1296px] mx-auto flex flex-col gap-10 sm:gap-12 md:gap-[48px]">
        {/* Header */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6 lg:gap-20">
          <div className="max-w-[700px] flex flex-col gap-2.5 sm:gap-3">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[1.4px] text-terra uppercase">
              CARA KAMI HADIR
            </span>
            <h2 className="font-heading text-[26px] sm:text-[36px] md:text-[46px] leading-[1.15] tracking-[-0.8px] sm:tracking-[-1.2px] text-white font-normal break-words">
              Tiga kata. Satu gerakan yang saling menjaga.
            </h2>
          </div>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] text-[#DCCED8] max-w-[380px]">
            Kami percaya pengetahuan menjadi daya ketika dibagikan, disuarakan, dan dipeluk bersama.
          </p>
        </div>

        {/* Pillars Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-[18px]">
          {PILLARS.map((pillar, index) => {
            const Icon = iconMap[pillar.iconName];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -4 }}
                className="min-h-[250px] sm:min-h-[280px] flex flex-col justify-between p-6 sm:p-7 bg-white/[0.04] border border-white/[0.12] hover:border-white/[0.25] rounded-[18px] transition-all backdrop-blur-sm"
              >
                <div
                  className="w-[52px] h-[52px] rounded-[16px] flex items-center justify-center text-plum-dark shrink-0"
                  style={{ backgroundColor: pillar.bgIcon }}
                >
                  <Icon className="w-[25px] h-[25px]" aria-hidden="true" />
                </div>

                <div className="flex flex-col gap-2.5 mt-8">
                  <h3 className="font-heading font-semibold text-[26px] md:text-[30px] text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-[#DCCED8]">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
