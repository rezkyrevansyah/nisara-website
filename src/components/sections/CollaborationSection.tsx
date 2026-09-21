"use client";

import React, { useState } from "react";
import { Send, Info, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { COLLABORATION_TYPES } from "@/data/content";

export default function CollaborationSection() {
  const [collabForm, setCollabForm] = useState({
    institution: "",
    needs: "",
    contact: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!collabForm.institution.trim() || !collabForm.contact.trim()) {
      alert("Mohon lengkapi nama institusi dan kontak.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  return (
    <section
      id="kolaborasi"
      className="w-full bg-paper px-4 sm:px-8 md:px-12 lg:px-[72px] py-14 sm:py-18 md:py-[96px]"
      aria-label="Kolaborasi Institusi dan Kampus"
    >
      <div className="max-w-[1296px] mx-auto flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-[70px] items-start">
        {/* Left Narrative Column */}
        <div className="flex-1 w-full flex flex-col gap-5 sm:gap-6 md:gap-[22px]">
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[1.4px] text-terra uppercase">
            KOLABORASI
          </span>
          <h2 className="font-heading text-[26px] sm:text-[36px] md:text-[44px] leading-[1.15] tracking-[-0.8px] sm:tracking-[-1px] text-plum-dark font-normal break-words">
            Mari buat ruang aman bertumbuh di lebih banyak tempat.
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.65] text-muted">
            Untuk kampus, media, komunitas, dan mitra CSR yang ingin mengembangkan edukasi
            anti-kekerasan secara bertanggung jawab.
          </p>

          {/* Types List */}
          <div className="w-full flex flex-col divide-y divide-line pt-2">
            {COLLABORATION_TYPES.map((type) => (
              <div
                key={type.title}
                className="py-3.5 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 group hover:bg-cream/30 px-2 rounded-lg transition-colors"
              >
                <span className="text-[13px] sm:text-[14px] font-bold text-ink">{type.title}</span>
                <span className="text-[12px] sm:text-[13px] text-muted">{type.detail}</span>
              </div>
            ))}
          </div>

          {/* About Nisara Note */}
          <div className="w-full bg-cream p-4 sm:p-[18px] rounded-[12px] flex items-start gap-3 border border-line/50 mt-1 sm:mt-2">
            <Info className="w-5 h-5 text-plum shrink-0 mt-0.5" aria-hidden="true" />
            <div className="flex flex-col gap-1">
              <span className="text-[13px] font-bold text-ink">Tentang Nisara</span>
              <p className="text-[12px] leading-[1.55] text-muted">
                Nisara adalah inisiatif komunitas perempuan Indonesia. Status badan hukum dan
                program aktif perlu dikonfirmasi sebelum publikasi.
              </p>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[480px] xl:w-[540px] shrink-0 bg-cream border border-line rounded-[18px] p-5 sm:p-7 md:p-8 shadow-card"
        >
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center py-8 sm:py-10 gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-sage flex items-center justify-center text-plum animate-bounce">
                <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9 text-plum" />
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-plum-dark">
                Pesan Terkirim!
              </h3>
              <p className="text-xs sm:text-sm text-muted max-w-sm">
                Terima kasih atas inisiatif baikmu. Tim kami akan segera meninjau proposal
                kolaborasi dan menghubungi kontak yang tertera.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  setCollabForm({
                    institution: "",
                    needs: "",
                    contact: "",
                    message: "",
                  });
                }}
                className="mt-2 text-xs font-semibold text-terra underline hover:text-plum transition-colors p-2"
              >
                Kirim proposal lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <h3 className="font-heading font-semibold text-[22px] sm:text-[26px] md:text-[30px] text-plum-dark">
                  Ceritakan kebutuhanmu
                </h3>
              </div>

              {/* Field 1: Nama institusi */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="collab-inst"
                  className="text-[12px] font-medium text-ink"
                >
                  Nama institusi / komunitas <span className="text-terra">*</span>
                </label>
                <input
                  id="collab-inst"
                  type="text"
                  required
                  placeholder="Nama organisasi"
                  value={collabForm.institution}
                  onChange={(e) =>
                    setCollabForm({ ...collabForm, institution: e.target.value })
                  }
                  className="w-full h-[48px] px-3.5 text-[14px] bg-paper border border-line rounded-[8px] text-ink placeholder:text-[#948891] focus:outline-none focus:border-plum transition-colors"
                />
              </div>

              {/* Field 2: Kebutuhan kolaborasi */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="collab-need"
                  className="text-[12px] font-medium text-ink"
                >
                  Kebutuhan kolaborasi
                </label>
                <input
                  id="collab-need"
                  type="text"
                  placeholder="Workshop, kampanye, media, atau lainnya"
                  value={collabForm.needs}
                  onChange={(e) =>
                    setCollabForm({ ...collabForm, needs: e.target.value })
                  }
                  className="w-full h-[48px] px-3.5 text-[14px] bg-paper border border-line rounded-[8px] text-ink placeholder:text-[#948891] focus:outline-none focus:border-plum transition-colors"
                />
              </div>

              {/* Field 3: Kontak */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="collab-contact"
                  className="text-[12px] font-medium text-ink"
                >
                  Kontak <span className="text-terra">*</span>
                </label>
                <input
                  id="collab-contact"
                  type="text"
                  required
                  placeholder="Email atau WhatsApp"
                  value={collabForm.contact}
                  onChange={(e) =>
                    setCollabForm({ ...collabForm, contact: e.target.value })
                  }
                  className="w-full h-[48px] px-3.5 text-[14px] bg-paper border border-line rounded-[8px] text-ink placeholder:text-[#948891] focus:outline-none focus:border-plum transition-colors"
                />
              </div>

              {/* Field 4: Detail Pesan */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="collab-msg"
                  className="text-[12px] font-medium text-ink"
                >
                  Pesan / Rencana
                </label>
                <textarea
                  id="collab-msg"
                  rows={3}
                  placeholder="Ceritakan tujuan, audiens, dan waktu yang diharapkan..."
                  value={collabForm.message}
                  onChange={(e) =>
                    setCollabForm({ ...collabForm, message: e.target.value })
                  }
                  className="w-full p-3.5 text-[14px] bg-paper border border-line rounded-[8px] text-ink placeholder:text-[#948891] focus:outline-none focus:border-plum transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[50px] mt-1 bg-plum text-white text-[14px] sm:text-[15px] font-bold rounded-[25px] flex items-center justify-center gap-2 hover:bg-plum-dark transition-all hover:shadow-md active:scale-95 disabled:opacity-75 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Mengirim...</span>
                  </>
                ) : (
                  <>
                    <span>Ajukan kolaborasi</span>
                    <Send className="w-4 h-4" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
