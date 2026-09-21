"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, Instagram } from "lucide-react";
import logoImg from "../../../public/images/nisara-logo.png";

export default function Footer() {
  return (
    <footer
      className="w-full bg-plum-dark text-white px-4 sm:px-8 md:px-12 lg:px-[72px] pt-12 sm:pt-16 md:pt-[72px] pb-24 md:pb-[34px] border-t border-white/10"
      aria-label="Footer Nisara"
    >
      <div className="max-w-[1296px] mx-auto flex flex-col gap-8 sm:gap-10 md:gap-[52px]">
        {/* Top: Brand and Links */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-20">
          {/* Brand Info */}
          <div className="max-w-[480px] flex flex-col gap-3.5 sm:gap-4 items-start">
            <Link href="/" className="inline-block" aria-label="Nisara Beranda">
              <div className="relative w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[92px] md:h-[92px]">
                <Image
                  src={logoImg}
                  alt="Logo Nisara Footer"
                  fill
                  sizes="92px"
                  className="object-contain"
                />
              </div>
            </Link>
            <div className="text-[13px] sm:text-[14px] text-rose tracking-[0.4px] font-medium">
              Berdaya · Menggema · Merangkul
            </div>
            <p className="text-[13px] sm:text-[14px] leading-[1.6] text-[#DCCED8]">
              Ruang sebaya untuk perempuan Indonesia yang ingin paham, bersuara, dan tidak
              sendirian.
            </p>
          </div>

          {/* Links 3 Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-14 lg:gap-[72px] w-full lg:w-auto">
            {/* Col 1: Jelajahi */}
            <div className="flex flex-col gap-3">
              <span className="text-[12px] font-bold tracking-[1px] text-terra uppercase">
                Jelajahi
              </span>
              <ul className="flex flex-col gap-2.5 text-[13px] text-[#E5D9E1]">
                <li>
                  <a href="#tentang" className="hover:text-white transition-colors">
                    Tentang
                  </a>
                </li>
                <li>
                  <a href="#panduan" className="hover:text-white transition-colors">
                    Panduan
                  </a>
                </li>
                <li>
                  <a href="#program" className="hover:text-white transition-colors">
                    Program
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 2: Terhubung */}
            <div className="flex flex-col gap-3">
              <span className="text-[12px] font-bold tracking-[1px] text-terra uppercase">
                Terhubung
              </span>
              <ul className="flex flex-col gap-2.5 text-[13px] text-[#E5D9E1]">
                <li>
                  <a
                    href="https://instagram.com/nisaraid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-rose" />
                    <span>@nisaraid</span>
                  </a>
                </li>
                <li>
                  <a href="#kolaborasi" className="hover:text-white transition-colors">
                    Kolaborasi
                  </a>
                </li>
                <li>
                  <a href="#gabung" className="hover:text-white transition-colors">
                    Gabung komunitas
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Legal */}
            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <span className="text-[12px] font-bold tracking-[1px] text-terra uppercase">
                Legal
              </span>
              <ul className="flex flex-col gap-2.5 text-[13px] text-[#E5D9E1]">
                <li>
                  <Link
                    href="/kebijakan-privasi"
                    className="hover:text-white transition-colors"
                  >
                    Kebijakan Privasi
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="hover:text-white transition-colors">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <span className="text-white/40 cursor-default">
                    Aksesibilitas (WCAG 2.1)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer Banner Box */}
        <div className="w-full bg-white/[0.04] border border-white/10 rounded-[10px] p-4 sm:p-[18px] flex items-start gap-3">
          <AlertTriangle className="w-[18px] h-[18px] text-terra shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-[12px] leading-[1.6] text-[#CDBFC8]">
            Nisara bukan aparat, pengacara, layanan kesehatan, atau layanan darurat. Informasi
            di situs ini bersifat edukasi dan tidak menggantikan nasihat profesional. Dalam
            bahaya segera hubungi 112.
          </p>
        </div>

        {/* Bottom Copyright & Hashtags */}
        <div className="w-full border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#AFA0AA]">
          <div>© 2026 Nisara · nisara.id [domain kandidat]</div>
          <div className="flex items-center gap-2 font-medium">
            <span>#SahabatNisara</span>
            <span>·</span>
            <span>#BerdayaMenggemaMerangkul</span>
            <span>·</span>
            <span>#StopKekerasan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
