> NISARA · Product Requirements Document

# PRD Landing Page Nisara

*Versi 1.0 · 17 September 2026 · Status: Draft untuk validasi stakeholder*

Dokumen ini merinci kebutuhan landing page resmi komunitas Nisara (akun publik Instagram nisaraid) agar identitas, misi, dan jalur aksi komunitas tidak hanya hidup di media sosial.

## 1. Ringkasan eksekutif

Nisara adalah inisiatif komunitas perempuan Indonesia yang aktif di Instagram (@nisaraid). Konten publik yang teridentifikasi berfokus pada edukasi keselamatan perempuan, pencegahan pelecehan seksual di ruang publik (termasuk fenomena “begal payudara” di sekitar kampus), dan penguatan solidaritas lewat tagline Berdaya · Menggema · Merangkul serta sapaan komunitas Sahabat Nisara.

Saat ini, titik masuk digital utama tampak masih di Instagram. Landing page dibutuhkan sebagai “rumah resmi” yang: (1) menjelaskan siapa Nisara, (2) mengarahkan pengunjung ke aksi konkret (edukasi, lapor, gabung, donasi/kolaborasi), (3) membangun kepercayaan, dan (4) menjadi aset merek yang bisa dipakai untuk partnership, media, dan kampanye.

Catatan riset: data publik tentang Nisaraid terbatas. PRD ini disusun dari sinyal terbuka (postingan IG 2023, hashtag, tone of voice) plus pola landing page komunitas perempuan sejenis di Indonesia. Asumsi yang belum terverifikasi ditandai [ASUMSI] dan harus dikonfirmasi sebelum development.

## 2. Temuan riset

### 2.1 Identitas yang terverifikasi dari sumber terbuka

| **Sinyal**         | **Temuan**                                                                                                                                            | **Implikasi produk**                                                  |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| Handle             | @nisaraid di Instagram                                                                                                                                | Domain kandidat: nisara.id / nisaraid.org / sahabatnisara.id          |
| Nama merek         | Nisara / Nisaraid (dipakai berdampingan)                                                                                                              | Gunakan “Nisara” sebagai brand, “Nisaraid” sebagai handle/domain      |
| Sapaan komunitas   | Sahabat Nisara / sempat tertulis Sahabat Nusara di satu caption                                                                                       | Standarkan ejaan “Sahabat Nisara” di seluruh UI                       |
| Tagline            | Berdaya Menggema Merangkul                                                                                                                            | Jadikan tagline hero + prinsip 3 pilar                                |
| Isu inti           | Pelecehan seksual, begal payudara, stop kekerasan, dampak pelecehan                                                                                   | Landing page wajib punya jalur “Belajar” dan “Butuh bantuan”          |
| Konteks lokasi isu | Lingkungan kampus / ruang publik                                                                                                                      | Persona mahasiswi & pekerja muda jadi prioritas                       |
| Hashtag kampanye   | #Nisara #Nisaraid #SahabatNisara #BerdayaMenggemaMerangkul #PelecehanSeksual #StopKekerasan #BersamaPerempuanMembangunNegeri #DampakPelecehan | Pakai di SEO, footer, dan share cards                                 |
| Tone of voice      | Hangat, edukatif, tidak menghakimi, bahasa Indonesia sehari-hari + emoji hati-hati                                                                    | Copy landing page: sisterly, jelas, tidak akademis kaku               |
| Bukti post publik  | Post 27 Sep 2023 soal begal payudara di sekitar kampus                                                                                                | Gunakan sebagai contoh konten edukasi, bukan sebagai satu-satunya isu |

### 2.2 Entitas serupa yang TIDAK sama (agar positioning tidak tercampur)

| **Nama**                     | **Apa itu**                                                               | **Bedanya dengan Nisaraid**                                          |
|------------------------------|---------------------------------------------------------------------------|----------------------------------------------------------------------|
| NISA.id                      | Platform bisnis online muslimah (reseller/mentoring), Bogor, berdiri 2021 | Komersial; bukan advokasi kekerasan seksual                          |
| Nisa.co.id                   | Media literasi Islam ramah perempuan, jejaring inklusif/KUPI              | Media keislaman; overlap isu gender tapi bukan brand yang sama       |
| Nisara Beauty                | Brand parfum India (nisarabeauty.com)                                     | Produk wangi-wangian; risiko SEO nama “Nisara”                       |
| Nusara (linktr.ee/nusaraid)  | Travel/tour guide (itinerary KL)                                          | Bukan isu perempuan; handle mirip, wajib dibedakan visual            |
| NISA Somalia / Nisa Local UK | Intelijen Somalia / minimarket UK                                         | Tidak relevan, tapi “NISA raid” sering muncul di search internasiona |

Implikasi: landing page harus punya title tag dan deskripsi yang tegas (“komunitas perempuan Indonesia · edukasi & solidaritas anti kekerasan”) supaya tidak kalah atau tertukar dengan brand parfum dan platform bisnis.

### 2.3 Konteks masalah yang dilayani

Di Indonesia, kekerasan berbasis gender (termasuk pelecehan di ruang publik dan KBGO di media sosial) tetap tinggi, sementara banyak korban ragu lapor karena takut tidak dipercaya, proses berbelit, atau dinormalisasi. Komunitas digital seperti @\_perEMPUan\_, @perempuanberkisah, dan media seperti Nisa.co.id sudah mengisi ruang edukasi. Celah untuk Nisara: fokus praktis “apa yang harus dilakukan sekarang” di konteks kampus dan ruang publik, dengan bahasa sebaya.

Peluang diferensiasi [ASUMSI]: Nisara sebagai “teman sebaya yang merangkul”, bukan lembaga hukum/LSM besar. Landing page harus terasa aman, cepat dipahami di HP, dan langsung menyodorkan langkah (edukasi singkat, hotline, komunitas).

### 2.4 Kompetitor / analog landing page

| **Tipe**           | **Contoh pola**                           | **Yang bisa dipinjam**                   | **Yang tidak ditiru**               |
|--------------------|-------------------------------------------|------------------------------------------|-------------------------------------|
| Advokasi korban    | Laman Komnas Perempuan / LBH APIK / Pulih | Hotline jelas, disclaimer legal, privasi | Terlalu institusional, teks panjang |
| Komunitas IG-first | perEMPUan, Perempuan Berkisah             | Narasi survivor-centred, highlight isu   | Feed dump tanpa arsitektur aksi     |
| Kampanye kampus    | Satgas PPKS kampus                        | Alur lapor institusi                     | Hanya berlaku 1 kampus              |
| Media perempuan    | Nisa.co.id, Magdalene                     | Artikel & webinar                        | Bukan home komunitas aksi           |

## 3. Problem statement

Pengunjung yang menemukan Nisara dari Instagram, hashtag, atau pencarian tidak punya destinasi resmi. Akibatnya: misi sulit dijelaskan ke partner, jalur bantuan tersebar di caption, kredibilitas lemah, dan konversi (gabung relawan, unduh panduan, lapor, donasi) tidak terukur.

## 4. Tujuan produk

Landing page v1 adalah one-page site (plus 2–3 subhalaman ringan) yang dalam 30 detik menjawab: siapa Nisara, buat siapa, apa yang bisa dilakukan hari ini.

### Tujuan bisnis / komunitas

1. Menjadikan nisara.id (atau domain final) sebagai sumber kebenaran identitas merek.

2. Mengonversi traffic IG menjadi aksi: baca panduan, hubungi bantuan, gabung Sahabat Nisara, ajukan kolaborasi.

3. Menyediakan aset yang bisa dilampirkan ke media, kampus, dan CSR.

### Tujuan pengguna

Pengunjung merasa dimengerti, tidak dihakimi, dan pergi dengan 1 langkah konkret — bukan hanya “sudah like postingan”.

## 5. Metrik keberhasilan (90 hari setelah launch)

| **Metrik**                      | **Target awal [ASUMSI]**               | **Cara ukur**           |
|---------------------------------|------------------------------------------|-------------------------|
| Waktu di halaman                | > 45 detik median                       | GA4                     |
| Klik CTA primer                 | ≥ 12% sesi                               | Event click_cta         |
| Klik “Butuh bantuan sekarang”   | Dilacak terpisah; tidak ditarget agresif | Event help_click        |
| Klik follow IG / join komunitas | ≥ 8% sesi dari traffic non-IG            | Outbound                |
| Lead kolaborasi                 | ≥ 10 formulir / bulan                    | Form submit             |
| Bounce mobile                   | < 55%                                   | GA4                     |
| Skor pemahaman (opsional)       | ≥ 80% “saya paham Nisara itu apa”        | 1-question micro survey |

## 6. Audiens

| **Persona**                 | **Kebutuhan**                                                         | **CTA yang relevan**                           |
|-----------------------------|-----------------------------------------------------------------------|------------------------------------------------|
| Maya, 19–24, mahasiswi      | Paham risiko ruang publik/kampus, tahu langkah jika jadi korban/saksi | Panduan singkat, PPKS kampus, komunitas sebaya |
| Rani, 25–34, pekerja urban  | Edukasi ringkas + cara bantu teman                                    | Bagikan panduan, volunteer                     |
| Ibu/wali                    | Bahasa aman untuk mendukung anak                                      | FAQ + tautan lembaga resmi                     |
| Pengurus kampus / komunitas | Partner edukasi                                                       | Kolaborasi                                     |
| Donatur / CSR               | Kredibilitas & dampak                                                 | Tentang + laporan \[jika ada\]                 |

Bukan target primer v1: pelaku kekerasan, audiens internasional, penjualan produk.

## 7. Positioning & pesan

Positioning: Nisara adalah ruang sebaya untuk perempuan berdaya — mengedukasi, menggema isu, dan merangkul yang terdampak kekerasan, mulai dari kampus hingga ruang publik digital.

Promise: Kamu tidak sendirian. Ada langkah yang bisa diambil hari ini.

Pilar pesan (dari tagline):

- Berdaya — pengetahuan praktis agar perempuan punya kendali.

- Menggema — isu tidak dibungkam; kampanye dan cerita (dengan consent).

- Merangkul — solidaritas Sahabat Nisara, bukan pengadilan publik.

Tone: hangat, jelas, tenang. Hindari sensationalisme, victim-blaming, dan visual kekerasan grafis. Jangan menjanjikan perlindungan hukum yang tidak bisa dijamin komunitas.

## 8. Scope landing page v1

### 8.1 In scope

One-page responsive + halaman Kebijakan Privasi, Disclaimer, dan Tentangnya (bisa section). Formulir kontak/kolaborasi. Tautan outbound ke Instagram, hotline resmi negara/LSM (bukan hotline fiktif Nisara kecuali memang ada). Tracking dasar. SEO ID. Mode “aku butuh bantuan” yang menonjol tapi tidak menakutkan.

### 8.2 Out of scope v1

Forum publik, unggah cerita survivor tanpa moderasi, chatbot hukum, membership berbayar, toko, aplikasi, CMS artikel penuh, multilingual, login pengguna, peta pelaku, doxing tools.

## 9. Informasi arsitektur & wireframe section

Urutan section (mobile-first):

| **#** | **Section**        | **Isi wajib**                                                                                                 | **CTA**                       |
|--------|--------------------|---------------------------------------------------------------------------------------------------------------|-------------------------------|
| 0      | Top bar darurat    | Teks kecil: “Dalam bahaya sekarang? Hubungi 112 / hotline KemenPPPA 129”                                      | Tel/link                      |
| 1      | Hero               | Nama Nisara, tagline, 1 kalimat misi, visual tenang (bukan korban terpuruk)                                   | Pelajari isu · Gabung Sahabat |
| 2      | Masalah            | 3 fakta singkat ruang publik/kampus/KBGO + sumber atau “berdasarkan percakapan komunitas”                     | —                             |
| 3      | 3 pilar            | Berdaya / Menggema / Merangkul — masing-masing 2 kalimat + ikon                                               | —                             |
| 4      | Kalau ini terjadi  | Alur 4 langkah: amankan diri → dokumentasikan bila aman → cerita ke orang dipercaya → laporkan ke kanal resmi | Buka panduan PDF/halaman      |
| 5      | Kanal bantuan      | Kartu: Polisi 110/112, KemenPPPA 129, Komnas Perempuan, LBH/UPTD PPA setempat, Satgas PPKS kampus             | Salin nomor / buka situs      |
| 6      | Program [ASUMSI] | Edukasi IG, diskusi, kampanye, relawan kampus — hanya yang benar-benar ada                                    | Lihat IG                      |
| 7      | Sahabat Nisara     | Ajakan gabung: relawan konten, peer support terlatih, mitra kampus                                            | Formulir gabung               |
| 8      | Bukti sosial       | Cuplikan nilai komunitas, bukan dummy testimonial palsu. Jika belum ada, skip atau pakai kutipan prinsip      | —                             |
| 9      | Kolaborasi         | Untuk kampus, media, CSR                                                                                      | Formulir                      |
| 10     | FAQ                | Apakah Nisara lembaga negara? Apakah bisa dampingi kasus? Apakah identitas aman?                              | —                             |
| 11     | Footer             | Email, IG, disclaimer, privasi, “Nisara bukan pengganti aparat/layanan kesehatan”                             | —                             |

## 10. Kebutuhan fungsional

| **ID** | **Requirement**                                                                       | **Prioritas** |
|--------|---------------------------------------------------------------------------------------|---------------|
| F01    | Halaman dimuat < 2.5s di 4G mid-tier Android                                         | P0            |
| F02    | Responsive 320–1440px, tap target min 44px                                            | P0            |
| F03    | CTA sticky mobile: “Butuh bantuan” dan “Gabung”                                       | P0            |
| F04    | Klik hotline memicu tel: pada mobile                                                  | P0            |
| F05    | Form gabung: nama (opsional), peran, kota/kampus, kontak, consent data                | P0            |
| F06    | Form kolaborasi: institusi, kebutuhan, kontak                                         | P1            |
| F07    | Halaman privasi & disclaimer hukum                                                    | P0            |
| F08    | OG image + meta untuk share IG/WA                                                     | P0            |
| F09    | Analytics event untuk semua CTA                                                       | P0            |
| F10    | Toggle “sembunyikan riwayat” tips (buka di mode penyamaran) untuk pengunjung berisiko | P1            |
| F11    | Aksesibilitas WCAG 2.1 AA dasar (kontras, alt text, keyboard)                         | P0            |
| F12    | Bahasa Indonesia default; hindari auto-translate menyesatkan                          | P0            |

## 11. Kebutuhan non-fungsional & keamanan

Privasi lebih penting daripada growth. Jangan pasang pixel agresif yang mengejar pengguna korban. Jangan wajibkan nama asli di form bantuan. Data form hanya ke email/CRM terbatas, enkripsi transit (HTTPS), retensi data dinyatakan. Tidak menyimpan cerita kekerasan di komentar publik. CDN + hosting di region dekat ID. Backup. Tidak ada user-generated content tanpa moderasi.

## 12. Brand, visual, dan copy

Arah visual \[rekomendasi, belum ada brand kit resmi\]:

- Palet: plum/magenta dalam (#5B2152) + cream (#F7F0F5) + terracotta lembut + tinta gelap. Hindari pink infantil dan merah alarm di seluruh page.

- Tipografi: heading humanist sans (mis. Fraunces/Outfit), body readable (Source Sans / Inter).

- Fotografi: perempuan Indonesia beragam, aktif, tidak objek; hindari pose “korban menangis close-up” sebagai hero.

- Logo: wordmark “Nisara”; submark “id” kecil. Jangan meniru logo parfum Nisara Beauty.

Contoh headline hero: “Berdaya. Menggema. Merangkul.” / Sub: “Ruang sebaya untuk perempuan yang ingin paham, bersuara, dan tidak sendirian menghadapi kekerasan.”

Microcopy tombol: “Saya ingin paham dulu”, “Saya butuh bantuan”, “Saya ingin merangkul yang lain”.

## 13. SEO & discovery

Title: Nisara — Komunitas Perempuan Berdaya Menggema Merangkul

Meta: Edukasi pelecehan seksual, solidaritas Sahabat Nisara, dan jalur bantuan resmi. Bukan lembaga negara.

Keyword fokus: nisaraid, sahabat nisara, begal payudara apa itu, pelecehan seksual kampus, komunitas perempuan Indonesia.

Schema: Organization + FAQPage. Canonical domain. Sitemap sederhana.

## 14. Legal & etika

Wajib: disclaimer bahwa Nisara bukan aparat, bukan pengacara, bukan layanan darurat. Jangan menampilkan identitas korban. Konten edukasi bukan nasihat hukum. Hotline yang ditampilkan harus diverifikasi ulang sebelum rilis (nomor pemerintah bisa berubah). Consent untuk setiap kisah/foto. Hormati UU TPKS dan UU PDP.

## 15. Roadmap

| **Fase**   | **Waktu [ASUMSI]** | **Deliverable**                                                          |
|------------|----------------------|--------------------------------------------------------------------------|
| 0 Discover | 3–5 hari             | Validasi misi, aset, nomor bantuan, domain, pemilik akun IG              |
| 1 Design   | 1 minggu             | Brand mini-kit + wireframe + copy final                                  |
| 2 Build    | 1–2 minggu           | Landing + form + analitik + privasi                                      |
| 3 Launch   | 3 hari               | Hubungkan link in bio IG, UTM, QA aksesibilitas                          |
| v1.1       | bulan 2              | Pusat panduan 5 artikel, kit kampus, laporan transparan bila ada program |

## 16. Asumsi, risiko, pertanyaan terbuka

Asumsi yang harus dijawab stakeholder:

1. Apakah Nisara badan hukum (yayasan/komunitas informal)?

2. Siapa penanggung jawab konten dan data form?

3. Apakah ada program offline, relawan terlatih, atau hanya konten IG?

4. Domain final dan email resmi?

5. Apakah menerima donasi?

6. Ejaan resmi: Nisara vs Nisaraid vs Sahabat Nusara (typo di caption lama)?

Risiko: nama “Nisara” bentrok SEO dengan brand parfum; handle mirip Nusara travel; konten isu sensitif bisa memicu troll; salah menampilkan hotline.

## 17. Rekomendasi next step

1. Konfirmasi fakta internal (legal entity, program nyata, kontak).

2. Kunci domain dan brand kit sederhana.

3. Tulis copy hero + alur 4 langkah bersama orang yang paham pendampingan korban.

4. Baru masuk desain visual dan development.

Landing page ini berhasil jika seorang mahasiswi yang baru saja mengalami insiden di kampus, dalam satu menit, tahu ia tidak salah, tahu nomor yang bisa dihubungi, dan tahu Nisara adalah teman—bukan pengadilan.

*— Akhir dokumen —*
