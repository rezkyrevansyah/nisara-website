"use client";

import React from "react";
import { BookHeart, MessagesSquare, Users, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { PROGRAMS } from "@/data/content";

const iconMap = {
  "book-heart": BookHeart,
  "messages-square": MessagesSquare,
  users: Users,
};

export default function ProgramsSection() {
  return (
    <section
      id="program"
      className="w-full bg-cream px-4 sm:px-8 md:px-12 lg:px-[72px] py-14 sm:py-18 md:py-[96px]"
      aria-label="Program dan Gerakan"
    >
      <div className="max-w-[1296px] mx-auto flex flex-col gap-8 sm:gap-10 md:gap-[42px]">
        {/* Header */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6 lg:gap-20">
          <div className="max-w-[700px] flex flex-col gap-2.5 sm:gap-3">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[1.4px] text-terra uppercase">
              PROGRAM &amp; GERAKAN
            </span>
            <h2 className="font-heading text-[26px] sm:text-[36px] md:text-[45px] leading-[1.15] tracking-[-0.8px] sm:tracking-[-1px] text-plum-dark font-normal break-words">
              Mulai dari percakapan, bertumbuh menjadi aksi bersama.
            </h2>
          </div>
          <p className="text-[14px] leading-[1.6] text-muted max-w-[400px]">
            Rangkaian di bawah adalah format yang perlu dikonfirmasi berdasarkan program Nisara
            yang benar-benar aktif.
          </p>
        </div>

        {/* Program Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-[16px]">
          {PROGRAMS.map((prog, index) => {
            const Icon = iconMap[prog.iconName];
            return (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="min-h-[260px] sm:min-h-[300px] p-5 sm:p-[26px] rounded-[18px] sm:rounded-[20px] flex flex-col justify-between transition-all shadow-sm hover:shadow-card group"
                style={{ backgroundColor: prog.bgCard }}
              >
                {/* Card Top */}
                <div className="w-full flex items-center justify-between gap-2">
                  <div className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-[14px] bg-white/60 flex items-center justify-center text-plum shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="w-[22px] h-[22px] sm:w-[23px] sm:h-[23px]" aria-hidden="true" />
                  </div>
                  <span className="text-[11px] font-medium text-plum bg-white/60 px-2.5 py-1 rounded-[14px]">
                    {prog.tag}
                  </span>
                </div>

                {/* Card Copy */}
                <div className="flex flex-col gap-2 mt-6 sm:mt-8">
                  <h3 className="font-heading font-semibold text-[22px] sm:text-[24px] md:text-[28px] text-ink">
                    {prog.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] leading-[1.6] text-muted">{prog.description}</p>
                  <div className="pt-2">
                    <a
                      href={prog.linkHref}
                      target={prog.linkHref.startsWith("http") ? "_blank" : undefined}
                      rel={prog.linkHref.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-[13px] font-bold text-plum hover:text-plum-dark group-hover:translate-x-1 transition-all py-1"
                    >
                      <span>{prog.linkText}</span>
                      <ArrowUpRight className="w-[15px] h-[15px]" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
