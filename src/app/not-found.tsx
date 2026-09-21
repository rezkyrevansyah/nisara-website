import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import logoImg from "../../public/images/nisara-logo.png";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper flex flex-col items-center justify-center p-6 text-center">
      <div className="relative w-20 h-20 mb-6">
        <Image
          src={logoImg}
          alt="Logo Nisara"
          fill
          className="object-contain"
        />
      </div>
      <span className="text-xs font-bold text-terra uppercase tracking-wider mb-2">
        Halaman Tidak Ditemukan
      </span>
      <h1 className="font-heading text-4xl sm:text-5xl font-bold text-plum-dark mb-4">
        404
      </h1>
      <p className="text-muted max-w-md mb-8 text-sm sm:text-base leading-relaxed">
        Halaman yang kamu cari tidak tersedia atau telah dipindahkan. Kamu bisa kembali ke
        beranda untuk mencari informasi yang kamu butuhkan.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-plum text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-plum-dark transition-all active:scale-95"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Kembali ke Beranda</span>
      </Link>
    </div>
  );
}
