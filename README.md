# Nisara — Komunitas Perempuan Indonesia

<div align="center">

![Nisara Cover](public/images/cover.png)

### *Berdaya · Menggema · Merangkul*

Ruang sebaya untuk perempuan yang ingin paham, bersuara, dan tidak sendirian menghadapi kekerasan—dari kampus hingga ruang digital.

[![Next.js 15](https://img.shields.io/badge/Next.js-15.5.25-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4.7-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)](https://pages.github.com/)

[🌐 Demo Langsung (GitHub Pages)](#-cara-deployment-ke-github-pages) • [📖 Panduan Keselamatan](#-fitur-utama) • [🚀 Cara Menjalankan](#-cara-menjalankan-secara-lokal) • [⚖️ Legal](#-legalitas--privasi)

---

</div>

## 🌸 Tentang Nisara

**Nisara** adalah inisiatif platform dan ruang komunitas perempuan Indonesia. Lahir dari kesadaran bahwa kekerasan dan pelecehan seksual sering dinormalisasi—baik di jalan raya, kampus, tempat kerja, hingga media sosial—Nisara hadir sebagai ruang aman sebaya (*peer support*) untuk memberikan edukasi praktis, memvalidasi pengalaman korban, serta menghubungkan penyintas ke kanal bantuan resmi yang terpercaya.

---

## ✨ Fitur Utama

### 1. 🛡️ Akses Cepat Bantuan & Keselamatan Survivor
- **Fixed Emergency Top Bar**: Bar bantuan darurat yang terkunci permanen di bagian atas layar, menyediakan link panggil langsung (*tap-to-call*) ke **112** (Panggilan Darurat Umum) dan **SAPA 129** (KemenPPPA).
- **Tombol Keluar Cepat (Quick Exit)**: Tombol melayang darurat dengan shortcut keyboard `ESC`. Fitur ini seketika menutup situs, menghapus cache sesi (`sessionStorage.clear()`), dan mengalihkan layar ke Google jika penyintas diawasi orang lain di ruangan.

### 2. 📱 Responsif Menyeluruh (All-Device Experience)
- Dirancang secara presisi dari versi desktop hingga mobile terkecil (320px).
- Bebas dari bug *horizontal scroll* (`overflow-x: clip`), menggunakan tipografi dinamis (*fluid typography*), dan area sentuh jempol berstandar WCAG minimal 48×48px.
- Menu mobile drawer halus dengan animasi transisi `framer-motion`.

### 3. 📚 12 Section Landing Page Komprehensif
1. **Top Emergency Bar**: Informasi hotline darurat nasional 24/7.
2. **Fixed Navigation Bar**: Akses cepat logo resmi, tautan menu, dan tombol partisipasi.
3. **Hero Section**: Headline *"Berdaya. Menggema. Merangkul."*, CTA ganda, dan visual komunitas.
4. **Mengapa Bersuara (Why Nisara Matters)**: 3 kartu konteks (Ruang Publik, Lingkungan Kampus, Ruang Digital).
5. **Tiga Pilar Gerakan**: Penjelasan nilai *Berdaya*, *Menggema*, dan *Merangkul*.
6. **Panduan Keselamatan Survivor**: 4 langkah penanganan mandiri saat mengalami pelecehan + modal interaktif *"Buka panduan lengkap"*.
7. **6 Kanal Bantuan Resmi**: Nomor telepon & link langsung (112, SAPA 129, 110 Kepolisian, Komnas Perempuan, UPTD PPA/LBH, Satgas PPKS Kampus) + tip penyamaran privasi.
8. **Program & Gerakan**: Rangkaian inisiatif edukasi ringkas, ruang diskusi sebaya, dan relawan kampus.
9. **Formulir Sahabat Nisara**: Pendaftaran relawan dengan perlindungan privasi (nama panggilan opsional, kontak aman, consent agreement).
10. **Kolaborasi Kemitraan**: Formulir proposal kemitraan institusi, kampus, media, dan CSR.
11. **FAQ Accordion**: Pertanyaan umum seputar kerahasiaan, biaya layanan, dan batas peran komunitas.
12. **Footer Lengkap**: Ringkasan misi, tautan navigasi, disclaimer hukum, dan tagar kampanye.

### 4. ⚖️ Halaman Legal Mandiri
- **Kebijakan Privasi (`/kebijakan-privasi`)**: Transparansi penuh bahwa privasi lebih penting daripada metrik growth.
- **Disclaimer Hukum (`/disclaimer`)**: Menjelaskan batasan bahwa Nisara adalah teman edukasi komunitas dan bukan aparat penegak hukum atau pengganti tenaga medis.

---

## 🎨 Desain Sistem & Tokens

Palet warna dan tipografi dirancang hangat, tenang, dan tidak memicu kecemasan (*trauma-informed design*):

| Token | Nilai Hex | Penggunaan Utama |
|---|---|---|
| **Plum** | `#173F44` | Elemen primer, tombol utama, teks judul |
| **Plum Dark** | `#0D3035` | Background 3 Pilar, Top Bar, Footer, teks kontras tinggi |
| **Soft Cream** | `#FFF3F2` | Card latar hero, kartu konten, selingan lembut |
| **Paper** | `#FFFDF9` | Warna latar kanvas utama (warm white, tidak silau) |
| **Terracotta** | `#EF4A57` | Aksen tombol darurat, eyebrow tag, nomor langkah |
| **Rose** | `#FFD9DD` | Seleksi teks, highlight badge, badge pilar |
| **Sage** | `#DDF1EA` | Kotak tip privasi dan badge sukses |
| **Line** | `#DEE8E6` | Garis pembatas tipis (*subtle border*) |
| **Nav Cream** | `#FBF7EC` | Background sticky navigation bar |

- **Font Heading**: `Outfit` (Google Fonts, humanis dan berkarakter tegas)
- **Font Body**: `Inter` (Google Fonts, tingkat keterbacaan tinggi di segala ukuran layar)

---

## 📁 Struktur Direktori

```text
Nisara/
├── .github/
│   └── workflows/
│       └── deploy.yml            # CI/CD otomatis ke GitHub Pages
├── public/
│   └── images/
│       ├── cover.png             # Cover resmi resolusi tinggi
│       └── nisara-logo.png       # Logo resmi Nisara
├── src/
│   ├── app/
│   │   ├── disclaimer/           # Halaman /disclaimer
│   │   ├── kebijakan-privasi/    # Halaman /kebijakan-privasi
│   │   ├── error.tsx             # Error boundary
│   │   ├── globals.css           # Tailwind + fluid scroll rules
│   │   ├── layout.tsx            # Root layout, fonts & metadata
│   │   ├── not-found.tsx         # 404 handler
│   │   └── page.tsx              # Landing page utama (12 section)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── EmergencyTopBar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileStickyBar.tsx
│   │   │   └── Navbar.tsx
│   │   ├── sections/
│   │   │   ├── CollaborationSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── HelpChannelsSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── JoinCommunitySection.tsx
│   │   │   ├── ProgramsSection.tsx
│   │   │   ├── SafetyGuideSection.tsx
│   │   │   ├── ThreePillarsSection.tsx
│   │   │   └── WhyNisaraSection.tsx
│   │   └── ui/
│   │       └── QuickExitButton.tsx
│   └── data/
│       └── content.ts            # Sumber data & microcopy
├── next.config.mjs               # Konfigurasi Next.js & Static Export
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Cara Menjalankan Secara Lokal

### Prasyarat
- [Node.js](https://nodejs.org/) versi 18.18 atau lebih baru.
- npm, pnpm, atau yarn.

### Langkah Instalasi
1. **Clone repository ini**:
   ```bash
   git clone https://github.com/<username>/<repo-name>.git
   cd <repo-name>
   ```

2. **Install dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan development server**:
   ```bash
   npm run dev
   ```

4. **Buka di browser**:
   Akses `http://localhost:3000` di peramban Anda.

5. **Build produksi**:
   ```bash
   npm run build
   ```

---

## 🌐 Cara Deployment ke GitHub Pages

Project ini sudah dilengkapi file workflow otomatis di `.github/workflows/deploy.yml`.

### Langkah-langkah:
1. **Buat repository baru** di akun GitHub Anda (misal bernama `nisara` atau `nisara-landing-page`).
2. **Hubungkan dan push project ke GitHub**:
   ```bash
   git init
   git branch -M main
   git add .
   git commit -m "feat: publish official nisara landing page with full responsiveness"
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```
3. **Aktifkan GitHub Pages**:
   - Masuk ke tab **Settings** di repository GitHub Anda.
   - Pilih menu **Pages** di bilah kiri.
   - Pada bagian **Build and deployment > Source**, pilih opsi: **GitHub Actions**.
4. **Selesai!** GitHub Actions akan otomatis melakukan build static export dan website Anda akan tayang di:
   ```
   https://<username>.github.io/<repo-name>/
   ```

---

## 🛡️ Catatan Keamanan Survivor

Website ini dibuat dengan prinsip kehati-hatian privasi:
- Tidak ada pelacak pihak ketiga (*third-party advertising cookies*).
- Riwayat sesi sensitif dibersihkan saat tombol keluar cepat ditekan.
- Dalam situasi darurat aktif, jangan ragu untuk langsung menghubungi hotline resmi **112** atau kepolisian **110**.

---

## 📄 Lisensi & Kontribusi

- Kode sumber ini dirilis di bawah lisensi **MIT License**.
- Instagram resmi: [@nisaraid](https://instagram.com/nisaraid)
- Tanda pagar kampanye: `#SahabatNisara` · `#BerdayaMenggemaMerangkul` · `#StopKekerasan`

© 2026 Komunitas Nisara. Seluruh hak cipta dilindungi undang-undang.
