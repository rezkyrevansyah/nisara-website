"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { VOLUNTEER_ROLES } from "@/data/content";
import CustomSelect from "@/components/ui/CustomSelect";

const ROLE_OPTIONS = [
  { value: "konten", label: "Relawan Konten & Edukasi" },
  { value: "kampus", label: "Mitra / Duta Kampus" },
  { value: "peer", label: "Peer Support Terlatih" },
  { value: "lainnya", label: "Lainnya" },
];

export default function JoinCommunitySection() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    cityOrCampus: "",
    contact: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.contact.trim() || !formData.consent) {
      alert("Mohon isi kontak yang aman dan centang persetujuan data.");
      return;
    }

    setIsSubmitting(true);
    // Simulate lightweight client-side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  return (
    <section
      id="gabung"
      className="w-full bg-plum-dark text-white px-4 sm:px-8 md:px-12 lg:px-[72px] py-14 sm:py-18 md:py-[104px]"
      aria-label="Bergabung dengan Sahabat Nisara"
    >
      <div className="max-w-[1296px] mx-auto flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-[68px] items-start">
        {/* Story Left Column */}
        <div className="flex-1 w-full flex flex-col gap-5 sm:gap-6 md:gap-[25px]">
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[1.4px] text-terra uppercase">
            SAHABAT NISARA
          </span>
          <h2 className="font-heading text-[26px] sm:text-[36px] md:text-[48px] leading-[1.15] tracking-[-0.8px] sm:tracking-[-1.1px] text-white font-normal break-words">
            Merangkul yang lain juga bisa dimulai dari hal kecil.
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.65] text-[#DCCED8]">
            Bantu membuat konten, membuka ruang di kampus, atau menjadi mitra program. Kami
            akan menyesuaikan peran dengan kapasitas dan pelatihan yang tersedia.
          </p>

          {/* Principle Quote */}
          <div className="border-l-[3px] border-terra pl-4 sm:pl-5 py-2 my-1 sm:my-2 flex flex-col gap-2">
            <blockquote className="font-heading text-[18px] sm:text-[22px] md:text-[24px] leading-[1.35] text-white italic font-normal">
              “Percaya pada cerita, hormati pilihan, jaga kerahasiaan.”
            </blockquote>
            <span className="text-[11px] sm:text-[12px] text-[#BDAEB8]">
              Prinsip komunitas Nisara — bukan testimoni
            </span>
          </div>

          {/* Role pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1 sm:pt-2">
            {VOLUNTEER_ROLES.map((role) => (
              <span
                key={role}
                className="text-[11px] font-semibold text-[#E8DDE5] px-2.5 sm:px-3 py-1.5 rounded-[14px] border border-white/20 bg-white/5 backdrop-blur-sm"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Join Form Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[480px] xl:w-[540px] shrink-0 bg-paper rounded-[18px] p-5 sm:p-7 md:p-8 text-ink shadow-2xl border border-line"
        >
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center py-8 sm:py-10 gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-sage flex items-center justify-center text-plum animate-bounce">
                <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9 text-plum" />
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-plum-dark">
                Terima kasih, Sahabat!
              </h3>
              <p className="text-xs sm:text-sm text-muted max-w-sm">
                Data kamu telah tercatat dengan aman. Tim komunitas Nisara akan menghubungimu
                secara berkala sesuai preferensi peran yang kamu pilih.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({
                    name: "",
                    role: "",
                    cityOrCampus: "",
                    contact: "",
                    consent: false,
                  });
                }}
                className="mt-2 text-xs font-semibold text-terra underline hover:text-plum transition-colors p-2"
              >
                Kirim formulir lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <h3 className="font-heading font-semibold text-[22px] sm:text-[26px] md:text-[30px] text-plum-dark">
                  Kenalan dulu, yuk
                </h3>
                <p className="text-[12px] sm:text-[13px] leading-[1.5] text-muted mt-1">
                  Nama boleh panggilan. Kami hanya meminta data yang diperlukan untuk
                  menghubungimu.
                </p>
              </div>

              {/* Field 1: Nama panggilan */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="join-name"
                  className="text-[12px] font-medium text-ink"
                >
                  Nama / nama panggilan (opsional)
                </label>
                <input
                  id="join-name"
                  type="text"
                  placeholder="Tulis nama panggilanmu"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-[48px] px-3.5 text-[14px] bg-cream border border-line rounded-[8px] text-ink placeholder:text-[#948891] focus:outline-none focus:border-plum transition-colors"
                />
              </div>

              {/* Field 2: Peran yang diminati */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="join-role"
                  className="text-[12px] font-medium text-ink"
                >
                  Peran yang diminati
                </label>
                <CustomSelect
                  id="join-role"
                  name="role"
                  value={formData.role}
                  onChange={(val) => setFormData({ ...formData, role: val })}
                  placeholder="Pilih: konten, kampus, atau mitra"
                  options={ROLE_OPTIONS}
                />
              </div>

              {/* Field 3: Kota / kampus */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="join-location"
                  className="text-[12px] font-medium text-ink"
                >
                  Kota / kampus
                </label>
                <input
                  id="join-location"
                  type="text"
                  placeholder="Contoh: Bandung / UNPAD"
                  value={formData.cityOrCampus}
                  onChange={(e) =>
                    setFormData({ ...formData, cityOrCampus: e.target.value })
                  }
                  className="w-full h-[48px] px-3.5 text-[14px] bg-cream border border-line rounded-[8px] text-ink placeholder:text-[#948891] focus:outline-none focus:border-plum transition-colors"
                />
              </div>

              {/* Field 4: Kontak yang aman */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="join-contact"
                  className="text-[12px] font-medium text-ink"
                >
                  Kontak yang aman <span className="text-terra">*</span>
                </label>
                <input
                  id="join-contact"
                  type="text"
                  required
                  placeholder="Email atau WhatsApp"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full h-[48px] px-3.5 text-[14px] bg-cream border border-line rounded-[8px] text-ink placeholder:text-[#948891] focus:outline-none focus:border-plum transition-colors"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  id="join-consent"
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 w-[18px] h-[18px] rounded border border-line accent-plum cursor-pointer focus:ring-1 focus:ring-terra shrink-0"
                />
                <label
                  htmlFor="join-consent"
                  className="text-[12px] leading-[1.5] text-muted cursor-pointer"
                >
                  Saya setuju data ini digunakan untuk dihubungi terkait komunitas. Baca{" "}
                  <Link
                    href="/kebijakan-privasi"
                    className="text-plum underline hover:text-terra transition-colors"
                  >
                    kebijakan privasi
                  </Link>
                  .
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[50px] mt-2 bg-plum text-white text-[14px] sm:text-[15px] font-bold rounded-[25px] flex items-center justify-center gap-2 hover:bg-plum-dark transition-all hover:shadow-md active:scale-95 disabled:opacity-75 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Mengirim...</span>
                  </>
                ) : (
                  <>
                    <span>Saya ingin merangkul yang lain</span>
                    <ArrowRight className="w-[17px] h-[17px]" aria-hidden="true" />
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
