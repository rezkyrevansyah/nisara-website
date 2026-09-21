import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0D3035",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const logoPath = `${basePath}/images/nisara-logo.png`;

export const metadata: Metadata = {
  metadataBase: new URL("https://rezkyrevansyah.github.io/nisara-website"),
  title: "Nisara — Komunitas Perempuan Berdaya Menggema Merangkul",
  description:
    "Ruang sebaya untuk perempuan yang ingin paham, bersuara, dan tidak sendirian menghadapi kekerasan—dari kampus hingga ruang digital.",
  keywords: [
    "Nisara",
    "nisaraid",
    "Sahabat Nisara",
    "Berdaya Menggema Merangkul",
    "Pelecehan Seksual",
    "Stop Kekerasan",
    "Satgas PPKS",
    "Komunitas Perempuan Indonesia",
  ],
  authors: [{ name: "Komunitas Nisara" }],
  openGraph: {
    title: "Nisara — Komunitas Perempuan Berdaya Menggema Merangkul",
    description:
      "Ruang sebaya untuk perempuan yang ingin paham, bersuara, dan tidak sendirian menghadapi kekerasan.",
    url: "https://rezkyrevansyah.github.io/nisara-website",
    siteName: "Nisara",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: logoPath,
        width: 800,
        height: 800,
        alt: "Logo Nisara",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Nisara — Komunitas Perempuan Berdaya Menggema Merangkul",
    description:
      "Ruang sebaya untuk perempuan yang ingin paham, bersuara, dan tidak sendirian menghadapi kekerasan.",
    images: [logoPath],
  },
  icons: {
    icon: [
      { url: logoPath, type: "image/png" },
    ],
    apple: [
      { url: logoPath, type: "image/png" },
    ],
    shortcut: logoPath,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nisara",
              alternateName: "Nisaraid",
              url: "https://nisara.id",
              logo: "https://nisara.id/images/nisara-logo.png",
              sameAs: ["https://instagram.com/nisaraid"],
              description:
                "Inisiatif komunitas perempuan Indonesia yang berfokus pada edukasi keselamatan perempuan dan solidaritas anti kekerasan.",
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-paper text-ink font-sans antialiased selection:bg-rose selection:text-plum-dark">
        {children}
      </body>
    </html>
  );
}
