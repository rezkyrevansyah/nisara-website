"use client";

import React from "react";
import {
  Phone,
  HeartPulse,
  BadgeAlert,
  Landmark,
  Scale,
  GraduationCap,
  ArrowUpRight,
  EyeOff,
} from "lucide-react";
import { motion } from "framer-motion";
import { HELP_CHANNELS } from "@/data/content";

const iconMap = {
  phone: Phone,
  "heart-pulse": HeartPulse,
  badge: BadgeAlert,
  landmark: Landmark,
  scale: Scale,
  "graduation-cap": GraduationCap,
};

export default function HelpChannelsSection() {
  return (
    <section
      id="bantuan"
      className="w-full bg-paper px-4 sm:px-8 md:px-12 lg:px-[72px] py-14 sm:py-18 md:py-[96px]"
      aria-label="Kanal Bantuan Resmi"
    >
      <div className="max-w-[1296px] mx-auto flex flex-col gap-8 sm:gap-10 md:gap-[40px]">
        {/* Header with Digital Safety Tip */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6 lg:gap-[60px]">
          <div className="max-w-[670px] flex flex-col gap-2.5 sm:gap-3">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[1.4px] text-terra uppercase">
              KANAL BANTUAN
            </span>
            <h2 className="font-heading text-[26px] sm:text-[36px] md:text-[45px] leading-[1.15] tracking-[-0.8px] sm:tracking-[-1px] text-plum-dark font-normal break-words">
              Cari bantuan dari jalur yang paling terasa aman.
            </h2>
          </div>

          {/* Safety Tip Card */}
          <div className="w-full lg:w-[410px] shrink-0 bg-sage p-4 rounded-[12px] flex items-start gap-3 border border-line/40">
            <EyeOff className="w-5 h-5 text-plum shrink-0 mt-0.5" aria-hidden="true" />
            <div className="flex flex-col gap-1">
              <span className="text-[13px] font-bold text-ink">Butuh privasi lebih?</span>
              <p className="text-[12px] leading-[1.5] text-muted">
                Gunakan mode penyamaran (incognito) dan hapus riwayat penelusuran jika perangkatmu diawasi orang lain.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 md:gap-[14px]">
          {HELP_CHANNELS.map((channel, index) => {
            const Icon = iconMap[channel.iconName];
            const isHighlighted = index < 3;
            return (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`min-h-[200px] sm:min-h-[215px] p-5 sm:p-[22px] rounded-[18px] sm:rounded-[20px] flex flex-col justify-between border border-line transition-all hover:shadow-card group ${
                  isHighlighted ? "bg-cream/70 hover:bg-cream" : "bg-paper hover:bg-cream/30"
                }`}
              >
                {/* Card Top */}
                <div className="w-full flex items-center justify-between gap-3">
                  <div className="w-10 h-10 rounded-full bg-paper flex items-center justify-center text-plum shadow-sm group-hover:scale-110 transition-transform shrink-0">
                    <Icon className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px]" aria-hidden="true" />
                  </div>
                  <span
                    className={`font-heading ${
                      channel.value.length <= 4
                        ? "text-[24px] sm:text-[28px] font-medium text-plum"
                        : "text-[13px] sm:text-[14px] md:text-[15px] font-medium text-plum text-right break-all"
                    }`}
                  >
                    {channel.value}
                  </span>
                </div>

                {/* Card Body */}
                <div className="flex flex-col gap-1.5 my-3">
                  <h3 className="font-sans font-bold text-[14px] sm:text-[15px] text-ink">{channel.title}</h3>
                  <p className="text-[12px] sm:text-[13px] leading-[1.5] text-muted">{channel.description}</p>
                </div>

                {/* Card Action Link */}
                <div className="pt-1">
                  <a
                    href={channel.actionHref}
                    target={channel.isTel || channel.actionHref.startsWith("#") ? undefined : "_blank"}
                    rel={channel.isTel || channel.actionHref.startsWith("#") ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-plum hover:text-plum-dark group-hover:translate-x-0.5 transition-all py-1 min-h-[36px]"
                  >
                    <span>{channel.actionLabel}</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <p className="text-[12px] text-muted italic font-normal">
          Nomor dan tautan wajib diverifikasi ulang sebelum peluncuran. Nisara bukan layanan darurat.
        </p>
      </div>
    </section>
  );
}
