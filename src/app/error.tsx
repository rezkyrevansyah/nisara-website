"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-paper flex flex-col items-center justify-center p-6 text-center">
      <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center text-terra mb-6 border border-line">
        <span className="font-heading font-bold text-2xl">!</span>
      </div>
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-plum-dark mb-3">
        Terjadi Sedikit Kendala
      </h1>
      <p className="text-muted max-w-md mb-8 text-sm sm:text-base leading-relaxed">
        Halaman mengalami gangguan saat memuat informasi. Silakan coba muat ulang halaman atau
        kembali ke beranda.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-2 bg-plum text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-plum-dark transition-all active:scale-95"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Muat Ulang</span>
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 border border-plum text-plum text-sm font-medium px-5 py-3 rounded-full hover:bg-cream transition-all active:scale-95"
        >
          <Home className="w-4 h-4" />
          <span>Ke Beranda</span>
        </Link>
      </div>
    </div>
  );
}
