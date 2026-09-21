import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Info } from "lucide-react";
import type { Metadata } from "next";
import logoImg from "../../../public/images/nisara-logo.png";

export const metadata: Metadata = {
  title: "Kebijakan Privasi — Nisara",
  description:
    "Privasi lebih penting daripada growth. Halaman ini menjelaskan bagaimana data dijaga dengan aman dan bertanggung jawab.",
};

export default function KebijakanPrivasiPage() {
  return (
    <div className="min-h-screen bg-paper flex flex-col items-center">
      {/* Privacy Navigation */}
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

      {/* Main Legal Document Container */}
      <main className="w-full max-w-[1040px] bg-paper flex flex-col flex-1">
        {/* Header Banner */}
        <div className="w-full bg-cream px-4 sm:px-8 md:px-14 lg:px-[120px] py-8 sm:py-12 md:py-[72px] flex flex-col gap-3 sm:gap-4.5 border-b border-line/50">
          <span className="text-[10px] sm:text-[11px] font-bold text-terra tracking-[1.2px] uppercase">
            LEGAL · TERAKHIR DIPERBARUI 17 SEPTEMBER 2026
          </span>
          <h1 className="font-heading font-semibold text-[28px] sm:text-[40px] md:text-[52px] leading-[1.1] text-plum-dark break-words">
            Kebijakan Privasi
          </h1>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.65] text-muted max-w-[760px]">
            Privasi lebih penting daripada growth. Halaman ini menjelaskan data apa yang kami
            minta, mengapa, dan bagaimana kamu tetap punya kendali.
          </p>
        </div>

        {/* Content Body */}
        <div className="w-full px-4 sm:px-8 md:px-14 lg:px-[120px] py-8 sm:py-10 md:py-[54px] pb-16 sm:pb-20 flex flex-col gap-6 sm:gap-8 md:gap-[34px]">
          {/* Section 1 */}
          <section className="flex flex-col gap-2">
            <h2 className="font-heading font-semibold text-[21px] sm:text-[25px] text-ink">
              1. Data yang kami kumpulkan
            </h2>
            <p className="text-[14px] leading-[1.65] text-muted">
              Formulir dapat meminta nama panggilan (opsional), peran, kota atau kampus,
              institusi, serta kontak yang aman. Jangan kirim cerita rinci atau data sensitif yang
              tidak diperlukan.
            </p>
          </section>

          {/* Section 2 */}
          <section className="flex flex-col gap-2">
            <h2 className="font-heading font-semibold text-[21px] sm:text-[25px] text-ink">
              2. Cara kami menggunakan data
            </h2>
            <p className="text-[14px] leading-[1.65] text-muted">
              Data hanya digunakan untuk menanggapi permintaan gabung atau kolaborasi. Tidak
              digunakan untuk iklan tertarget dan tidak dijual kepada pihak ketiga.
            </p>
          </section>

          {/* Section 3 */}
          <section className="flex flex-col gap-2">
            <h2 className="font-heading font-semibold text-[21px] sm:text-[25px] text-ink">
              3. Penyimpanan &amp; akses
            </h2>
            <p className="text-[14px] leading-[1.65] text-muted">
              Data dikirim melalui HTTPS dan hanya dapat diakses oleh pengelola yang berwenang.
              Retensi, penyedia formulir, lokasi server, dan penanggung jawab wajib dikonfirmasi
              sebelum rilis.
            </p>
          </section>

          {/* Section 4 */}
          <section className="flex flex-col gap-2">
            <h2 className="font-heading font-semibold text-[21px] sm:text-[25px] text-ink">
              4. Pilihanmu
            </h2>
            <p className="text-[14px] leading-[1.65] text-muted">
              Kamu dapat meminta akses, koreksi, atau penghapusan data melalui email resmi Nisara.
              Pengiriman formulir harus selalu disertai consent yang jelas.
            </p>
          </section>

          {/* Section 5 */}
          <section className="flex flex-col gap-2">
            <h2 className="font-heading font-semibold text-[21px] sm:text-[25px] text-ink">
              5. Analitik
            </h2>
            <p className="text-[14px] leading-[1.65] text-muted">
              Gunakan analitik dasar tanpa pixel agresif. Hindari pelacakan lintas situs, terutama
              pada klik bantuan dan hotline.
            </p>
          </section>

          {/* Section 6 */}
          <section className="flex flex-col gap-2">
            <h2 className="font-heading font-semibold text-[21px] sm:text-[25px] text-ink">
              6. Kontak privasi
            </h2>
            <p className="text-[14px] leading-[1.65] text-muted">
              Email resmi dan penanggung jawab data akan dicantumkan setelah dikonfirmasi
              stakeholder.
            </p>
          </section>

          {/* Note Callout */}
          <div className="bg-sage/70 border border-line rounded-xl p-4 sm:p-5 flex items-start gap-3 mt-4">
            <Info className="w-5 h-5 text-plum shrink-0 mt-0.5" />
            <p className="text-[12px] sm:text-[13px] leading-[1.6] text-ink">
              Draft desain: detail email, retensi, CRM, dan pengelola data harus dikunci sebelum
              development.
            </p>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="w-full bg-paper border-t border-line py-6 text-center text-xs text-muted">
        <p>© 2026 Nisara · Ruang Sebaya Perempuan Indonesia</p>
      </footer>
    </div>
  );
}
