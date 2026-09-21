export interface NavItem {
  label: string;
  href: string;
}

export interface FactItem {
  number: string;
  title: string;
  description: string;
  iconName: "map-pin" | "school" | "smartphone";
}

export interface PillarItem {
  title: string;
  description: string;
  bgIcon: string;
  iconName: "sparkles" | "megaphone" | "heart-handshake";
}

export interface SafetyStepItem {
  step: string;
  title: string;
  description: string;
  iconName: "shield-check" | "file-key" | "messages-square" | "phone-call";
  isPrimary?: boolean;
}

export interface HelpChannelItem {
  title: string;
  description: string;
  value: string;
  actionLabel: string;
  actionHref: string;
  isTel?: boolean;
  iconName: "phone" | "heart-pulse" | "badge" | "landmark" | "scale" | "graduation-cap";
  badgeBg?: string;
}

export interface ProgramItem {
  title: string;
  description: string;
  tag: string;
  linkText: string;
  linkHref: string;
  bgCard: string;
  iconName: "book-heart" | "messages-square" | "users";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: "Tentang", href: "#tentang" },
  { label: "Panduan", href: "#panduan" },
  { label: "Bantuan", href: "#bantuan" },
  { label: "Program", href: "#program" },
  { label: "FAQ", href: "#faq" },
];

export const FACTS: FactItem[] = [
  {
    number: "01",
    title: "Ruang publik",
    description: "Catcalling, sentuhan tanpa consent, dan intimidasi bukan pujian—semuanya layak dianggap serius.",
    iconName: "map-pin",
  },
  {
    number: "02",
    title: "Lingkungan kampus",
    description: "Relasi kuasa membuat banyak penyintas ragu bicara. Satgas PPKS ada untuk menjadi salah satu pintu bantuan.",
    iconName: "school",
  },
  {
    number: "03",
    title: "Ruang digital",
    description: "Ancaman, penyebaran konten intim, dan pelecehan daring juga nyata. Simpan bukti tanpa membahayakan diri.",
    iconName: "smartphone",
  },
];

export const PILLARS: PillarItem[] = [
  {
    title: "Berdaya",
    description: "Pengetahuan praktis agar perempuan mengenali batas, memahami consent, dan punya kendali atas langkah berikutnya.",
    bgIcon: "#E8C9D9",
    iconName: "sparkles",
  },
  {
    title: "Menggema",
    description: "Membuat isu yang sering dibungkam menjadi percakapan yang aman, tegas, dan berpihak pada penyintas.",
    bgIcon: "#D5A08F",
    iconName: "megaphone",
  },
  {
    title: "Merangkul",
    description: "Menjadi teman sebaya yang mendengar tanpa menghakimi—bukan pengadilan publik, bukan pengganti profesional.",
    bgIcon: "#D9E5DA",
    iconName: "heart-handshake",
  },
];

export const SAFETY_STEPS: SafetyStepItem[] = [
  {
    step: "01",
    title: "Amankan diri dulu",
    description: "Berpindah ke tempat ramai atau temui orang yang kamu percaya. Jika dalam bahaya, hubungi 112.",
    iconName: "shield-check",
    isPrimary: true,
  },
  {
    step: "02",
    title: "Dokumentasikan bila aman",
    description: "Catat waktu, lokasi, ciri, saksi, atau simpan tangkapan layar. Jangan memaksakan diri demi bukti.",
    iconName: "file-key",
  },
  {
    step: "03",
    title: "Cerita ke orang tepercaya",
    description: "Kamu boleh minta ditemani. Pilih orang yang mendengar, percaya, dan menghormati keputusanmu.",
    iconName: "messages-square",
  },
  {
    step: "04",
    title: "Hubungi kanal resmi",
    description: "Kamu dapat menghubungi SAPA 129, UPTD PPA, Satgas PPKS kampus, atau bantuan hukum setempat.",
    iconName: "phone-call",
  },
];

export const HELP_CHANNELS: HelpChannelItem[] = [
  {
    title: "Darurat nasional",
    description: "Untuk situasi darurat dan ancaman langsung.",
    value: "112",
    actionLabel: "Telepon 112",
    actionHref: "tel:112",
    isTel: true,
    iconName: "phone",
  },
  {
    title: "SAPA KemenPPPA",
    description: "Layanan pengaduan kekerasan perempuan & anak.",
    value: "129",
    actionLabel: "Telepon 129",
    actionHref: "tel:129",
    isTel: true,
    iconName: "heart-pulse",
  },
  {
    title: "Kepolisian",
    description: "Layanan kepolisian untuk laporan dan bantuan.",
    value: "110",
    actionLabel: "Telepon 110",
    actionHref: "tel:110",
    isTel: true,
    iconName: "badge",
  },
  {
    title: "Komnas Perempuan",
    description: "Informasi, rujukan, dan pengaduan berbasis gender.",
    value: "komnasperempuan.go.id",
    actionLabel: "Buka situs",
    actionHref: "https://komnasperempuan.go.id",
    iconName: "landmark",
  },
  {
    title: "UPTD PPA / LBH setempat",
    description: "Pendampingan psikologis, hukum, dan rujukan lokal.",
    value: "Cari layanan di kotamu",
    actionLabel: "Cari layanan",
    actionHref: "https://kemenpppa.go.id",
    iconName: "scale",
  },
  {
    title: "Satgas PPKS kampus",
    description: "Khusus kekerasan seksual di lingkungan perguruan tinggi.",
    value: "Hubungi kanal kampusmu",
    actionLabel: "Lihat panduan",
    actionHref: "#panduan",
    iconName: "graduation-cap",
  },
];

export const PROGRAMS: ProgramItem[] = [
  {
    title: "Edukasi ringkas",
    description: "Konten praktis di Instagram untuk mengenali pelecehan, consent, dan cara mendukung teman.",
    tag: "Instagram",
    linkText: "Lihat @nisaraid",
    linkHref: "https://instagram.com/nisaraid",
    bgCard: "#FFD9DD",
    iconName: "book-heart",
  },
  {
    title: "Ruang diskusi",
    description: "Percakapan aman bersama komunitas atau narasumber untuk membongkar mitos tanpa menghakimi.",
    tag: "Perlu validasi",
    linkText: "Pelajari rencana",
    linkHref: "#kolaborasi",
    bgCard: "#DDF1EA",
    iconName: "messages-square",
  },
  {
    title: "Relawan kampus",
    description: "Jejaring Sahabat Nisara yang membawa materi edukasi ke lingkungan kampus masing-masing.",
    tag: "Perlu validasi",
    linkText: "Pelajari rencana",
    linkHref: "#gabung",
    bgCard: "#E8D8C4",
    iconName: "users",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apakah Nisara lembaga negara?",
    answer: "Bukan. Nisara adalah inisiatif komunitas dan bukan aparat, layanan kesehatan, atau pengganti lembaga bantuan profesional.",
  },
  {
    id: "faq-2",
    question: "Apakah Nisara bisa mendampingi kasus?",
    answer: "Nisara fokus pada peer support (dukungan sebaya) dan edukasi. Untuk pendampingan hukum dan psikologis resmi, kami merujuk ke lembaga berwenang seperti UPTD PPA, LBH APIK, Komnas Perempuan, dan Satgas PPKS kampus.",
  },
  {
    id: "faq-3",
    question: "Apakah identitas saya aman?",
    answer: "Sangat aman. Formulir kontak kami tidak mewajibkan nama asli (cukup nama panggilan). Kami memegang prinsip kerahasiaan dan tidak pernah mempublikasikan cerita atau identitas tanpa persetujuan eksplisit.",
  },
  {
    id: "faq-4",
    question: "Apakah saya harus melapor?",
    answer: "Tidak. Keputusan melapor sepenuhnya berada di tanganmu jika dan ketika kamu merasa siap dan aman. Keselamatan dan kenyamananmu selalu menjadi prioritas utama.",
  },
];

export const VOLUNTEER_ROLES = [
  "Relawan konten",
  "Mitra kampus",
  "Peer support terlatih",
];

export const COLLABORATION_TYPES = [
  {
    title: "Kampus & komunitas",
    detail: "Kelas, diskusi, dan kit edukasi",
  },
  {
    title: "Media",
    detail: "Wawancara dan kampanye publik",
  },
  {
    title: "CSR & mitra",
    detail: "Dukungan program dan distribusi",
  },
];
