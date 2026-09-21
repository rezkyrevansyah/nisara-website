"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/data/content";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="w-full bg-cream px-4 sm:px-8 md:px-12 lg:px-[72px] py-14 sm:py-18 md:py-[96px]"
      aria-label="Pertanyaan Umum (FAQ)"
    >
      <div className="max-w-[1296px] mx-auto flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-[80px] items-start">
        {/* Left Intro Column */}
        <div className="w-full lg:w-[420px] shrink-0 flex flex-col gap-2.5 sm:gap-3.5">
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[1.4px] text-terra uppercase">
            FAQ
          </span>
          <h2 className="font-heading text-[26px] sm:text-[36px] md:text-[43px] leading-[1.15] tracking-[-0.8px] sm:tracking-[-1px] text-plum-dark font-normal break-words">
            Pertanyaan yang wajar untuk ditanyakan.
          </h2>
          <p className="text-[14px] sm:text-[15px] leading-[1.6] text-muted">
            Transparansi membantu kita memilih bantuan dengan lebih aman dan realistis.
          </p>
        </div>

        {/* Right Accordion Column */}
        <div className="flex-1 w-full flex flex-col divide-y divide-line">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-4 sm:py-5 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full min-h-[44px] flex items-center justify-between text-left gap-3 sm:gap-4 py-2 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-[16px] sm:text-[19px] md:text-[21px] text-ink group-hover:text-plum transition-colors">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-paper flex items-center justify-center text-plum shrink-0 group-hover:bg-rose/40 transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-plum" />
                    ) : (
                      <Plus className="w-4 h-4 text-plum" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[14px] leading-[1.65] text-muted pt-2 pb-1 max-w-[760px]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
