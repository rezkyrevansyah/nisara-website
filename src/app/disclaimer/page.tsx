import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import type { Metadata } from "next";
import logoImg from "../../../public/images/nisara-logo.png";

export const metadata: Metadata = {
  title: "Disclaimer — Nisara",
  description:
    "Nisara hadir sebagai teman edukasi dan komunitas. Pahami batas peran dan tanggung jawab kami sejak awal.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-paper flex flex-col items-center">
      {/* Disclaimer Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 w-full bg-nav/95 backdrop-blur-md border-b border-line shadow-sm">
        <div className="max-w-[1040px] mx-auto h-[64px] sm:h-[79.5px] px-4 sm:px-8 md:px-14 flex items-center justify-between">
          <Link href="/" aria-label="Kembali ke beranda Nisara">
            <div className="relative w-[42px] h-[42px] sm:w-[58px] sm:h-[58px]">
              <Image
                src={logoImg}
                alt="Logo Nisara"
                fill
                sizes="58px"
                className="object-contain"
              />
            </div>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-[12px] sm:text-[13px] font-medium text-plum hover:text-plum-dark transition-colors py-1.5 px-2.5 rounded-lg hover:bg-cream"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke beranda</span>
          </Link>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[64px] sm:h-[79.5px] w-full shrink-0" aria-hidden="true" />

      {/* Main Document Container */}
      <main className="w-full max-w-[1040px] bg-paper flex flex-col flex-1">
        {/* Header Banner */}
        <div className="w-full bg-cream px-4 sm:px-8 md:px-14 lg:px-[120px] py-8 sm:py-12 md:py-[72px] flex flex-col gap-3 sm:gap-4.5 border-b border-line/50">
          <span className="text-[10px] sm:text-[11px] font-bold text-terra tracking-[1.2px] uppercase">
            LEGAL · BACA SEBELUM MENGGUNAKAN INFORMASI
          </span>
          <h1 className="font-heading font-semibold text-[28px] sm:text-[40px] md:text-[52px] leading-[1.1] text-plum-dark break-words">
            Disclaimer
          </h1>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.65] text-muted max-w-[760px]">
            Nisara hadir sebagai teman edukasi dan komunitas. Kami ingin batas peran ini terasa
            jelas sejak awal.
          </p>
        </div>

        {/* Content Body */}
        <div className="w-full px-4 sm:px-8 md:px-14 lg:px-[120px] py-8 sm:py-10 md:py-[54px] pb-16 sm:pb-20 flex flex-col gap-6 sm:gap-8 md:gap-[30px]">
          {/* Emergency Alert Box */}
          <div className="bg-plum-dark text-white rounded-[12px] p-5 sm:p-6 flex items-start gap-4 shadow-md">
            <AlertTriangle className="w-6 h-6 text-terra shrink-0 mt-0.5" aria-hidden="true" />
            <div className="flex flex-col gap-1">
              <span className="text-[14px] font-bold text-white">
                Jika kamu dalam bahaya sekarang
              </span>
              <p className="text-[13px] leading-[1.55] text-[#DCCED8]">
                Hubungi 112 atau kanal resmi setempat. Nisara tidak memantau situs ini 24 jam.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <section className="flex flex-col gap-2 pt-2 border-b border-line pb-6">
            <h2 className="font-heading font-semibold text-[20px] sm:text-[24px] text-ink">
              Bukan layanan profesional
            </h2>
            <p className="text-[14px] leading-[1.65] text-muted">
              Nisara bukan aparat, pengacara, tenaga kesehatan, psikolog, atau layanan darurat.
              Konten tidak menggantikan nasihat hukum, medis, atau psikologis.
            </p>
          </section>

          {/* Section 2 */}
          <section className="flex flex-col gap-2 border-b border-line pb-6">
            <h2 className="font-heading font-semibold text-[20px] sm:text-[24px] text-ink">
              Tidak ada jaminan hasil
            </h2>
            <p className="text-[14px] leading-[1.65] text-muted">
              Setiap situasi berbeda. Keputusan untuk mendokumentasikan, bercerita, atau melapor
              tetap berada pada pengguna, dengan keselamatan sebagai prioritas.
            </p>
          </section>

          {/* Section 3 */}
          <section className="flex flex-col gap-2 border-b border-line pb-6">
            <h2 className="font-heading font-semibold text-[20px] sm:text-[24px] text-ink">
              Informasi kanal bantuan
            </h2>
            <p className="text-[14px] leading-[1.65] text-muted">
              Nomor dan tautan layanan pihak ketiga dapat berubah. Semua kanal wajib diverifikasi
              ulang sebelum peluncuran.
            </p>
          </section>

          {/* Section 4 */}
          <section className="flex flex-col gap-2 border-b border-line pb-6">
            <h2 className="font-heading font-semibold text-[20px] sm:text-[24px] text-ink">
              Cerita &amp; consent
            </h2>
            <p className="text-[14px] leading-[1.65] text-muted">
              Nisara tidak akan menampilkan identitas atau cerita penyintas tanpa persetujuan yang
              spesifik, sadar, dan dapat ditarik kembali.
            </p>
          </section>

          {/* Section 5 */}
          <section className="flex flex-col gap-2 pb-2">
            <h2 className="font-heading font-semibold text-[20px] sm:text-[24px] text-ink">
              Batas tanggung jawab
            </h2>
            <p className="text-[14px] leading-[1.65] text-muted">
              Nisara tidak bertanggung jawab atas layanan, kebijakan, atau keputusan pihak ketiga
              yang ditautkan dari situs.
            </p>
          </section>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="w-full bg-paper border-t border-line py-6 text-center text-xs text-muted">
        <p>© 2026 Nisara · Ruang Sebaya Perempuan Indonesia</p>
      </footer>
    </div>
  );
}
