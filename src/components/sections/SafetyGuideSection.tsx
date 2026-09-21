"use client";

import React, { useState } from "react";
import {
  BookOpen,
  ShieldCheck,
  FileKey,
  MessagesSquare,
  PhoneCall,
  CheckCircle2,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SAFETY_STEPS } from "@/data/content";

const iconMap = {
  "shield-check": ShieldCheck,
  "file-key": FileKey,
  "messages-square": MessagesSquare,
  "phone-call": PhoneCall,
};

export default function SafetyGuideSection() {
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  return (
    <section
      id="panduan"
      className="w-full bg-cream px-4 sm:px-8 md:px-12 lg:px-[72px] py-14 sm:py-18 md:py-[104px]"
      aria-label="Panduan Keselamatan"
    >
      <div className="max-w-[1296px] mx-auto flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-[72px] items-start">
        {/* Left Column: Intro */}
        <div className="w-full lg:w-[430px] shrink-0 flex flex-col gap-4 sm:gap-[22px]">
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[1.4px] text-terra uppercase">
            KALAU INI TERJADI
          </span>
          <h2 className="font-heading text-[26px] sm:text-[36px] md:text-[45px] leading-[1.15] tracking-[-0.8px] sm:tracking-[-1px] text-plum-dark font-normal break-words">
            Tarik napas. Kamu boleh memilih langkah yang paling aman.
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.65] text-muted">
            Tidak ada urutan yang sempurna dan kamu tidak wajib melakukan semuanya.
            Keselamatanmu lebih penting daripada bukti atau laporan.
          </p>

          <div className="pt-1">
            <button
              type="button"
              onClick={() => setGuideModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-plum text-white text-[14px] font-medium min-h-[48px] px-5 py-3 rounded-[24px] hover:bg-plum-dark transition-all hover:shadow-md active:scale-95 text-center"
            >
              <span>Buka panduan lengkap</span>
              <BookOpen className="w-[17px] h-[17px]" aria-hidden="true" />
            </button>
          </div>

          <p className="text-[11px] sm:text-[12px] text-muted italic font-normal">
            Konten edukasi, bukan nasihat hukum atau medis.
          </p>
        </div>

        {/* Right Column: 4 Steps */}
        <div className="flex-1 w-full flex flex-col divide-y divide-line">
          {SAFETY_STEPS.map((step, index) => {
            const Icon = iconMap[step.iconName];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="py-5 sm:py-6 first:pt-0 last:pb-0 flex items-start gap-3.5 sm:gap-5 group"
              >
                {/* Number Badge */}
                <div
                  className={`w-9 h-9 sm:w-[44px] sm:h-[44px] rounded-full shrink-0 flex items-center justify-center font-bold text-[11px] sm:text-[12px] transition-transform group-hover:scale-105 ${
                    step.isPrimary
                      ? "bg-terra text-white"
                      : "bg-rose text-plum"
                  }`}
                >
                  {step.step}
                </div>

                {/* Body */}
                <div className="flex-1 flex flex-col gap-1.5">
                  <div className="w-full flex items-center justify-between gap-2">
                    <h3 className="font-heading font-semibold text-[17px] sm:text-[20px] md:text-[23px] text-ink">
                      {step.title}
                    </h3>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-plum shrink-0" aria-hidden="true" />
                  </div>
                  <p className="text-[13px] sm:text-[14px] leading-[1.6] text-muted max-w-[620px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Guide Detail Modal */}
      <AnimatePresence>
        {guideModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setGuideModalOpen(false)}
              className="absolute inset-0 bg-plum-dark/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-2xl bg-paper rounded-2xl shadow-2xl p-5 sm:p-8 border border-line z-10 max-h-[88vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-line gap-3">
                <div>
                  <span className="text-[10px] sm:text-xs font-bold text-terra uppercase tracking-wider">
                    Panduan Praktis
                  </span>
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-plum-dark">
                    Langkah Awal Penanganan Pelecehan
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setGuideModalOpen(false)}
                  className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full hover:bg-cream transition-colors text-muted hover:text-ink shrink-0"
                  aria-label="Tutup panduan"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 space-y-5 text-sm text-ink leading-relaxed">
                <div className="p-4 rounded-xl bg-cream border border-line/60">
                  <h4 className="font-bold text-plum flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-terra" />
                    Prinsip Pertama: Validasi Perasaanmu
                  </h4>
                  <p className="text-muted mt-1 text-xs sm:text-sm">
                    Reaksi syok, bingung, atau merasa bersalah adalah hal wajar. Ingat:
                    pelecehan adalah tanggung jawab pelaku, bukan kesalahan caramu berpakaian,
                    berjalan, atau berada di suatu tempat.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-base text-plum-dark">
                    1. Amankan Diri &amp; Cari Tempat Terbuka
                  </h4>
                  <p className="text-muted mt-1">
                    Segera hindari area sepi. Masuk ke toko, halte ramai, pos satpam kampus,
                    atau hampiri orang lain. Jangan ragu meminta tolong dengan nada tegas.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-base text-plum-dark">
                    2. Dokumentasi yang Aman (Bila Memungkinkan)
                  </h4>
                  <p className="text-muted mt-1">
                    Jika tidak membahayakan dirimu, catat plat nomor kendaraan pelaku, warna baju,
                    ciri fisik, atau titik lokasi dan waktu kejadian. Jika pelecehan terjadi di
                    ruang digital, ambil tangkapan layar (screenshot) link profil, chat, dan nomor kontak pelaku sebelum diblokir.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-base text-plum-dark">
                    3. Berbagi Cerita Tanpa Tekanan
                  </h4>
                  <p className="text-muted mt-1">
                    Berceritalah hanya kepada teman, sahabat, atau keluarga yang bisa dipercaya.
                    Jika lingkungan sekitar belum aman, hubungi peer support atau layanan konseling gratis.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-base text-plum-dark">
                    4. Memilih Saluran Pengaduan
                  </h4>
                  <p className="text-muted mt-1">
                    Kamu berhak memilih apakah ingin melapor ke Satgas PPKS kampus, UPTD PPA kota,
                    atau pihak berwajib jika sudah merasa siap secara mental dan fisik.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-line flex justify-end">
                <button
                  type="button"
                  onClick={() => setGuideModalOpen(false)}
                  className="px-5 py-2.5 bg-plum text-white font-medium rounded-xl hover:bg-plum-dark transition-colors"
                >
                  Saya Mengerti
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
