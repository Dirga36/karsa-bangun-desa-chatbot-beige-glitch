import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karsa Bangun Desa | Mitra Strategis Menuju Desa Mandiri",
  description:
    "Lembaga pendampingan masyarakat dan pembangunan ekosistem pedesaan menuju Desa Mandiri berbasis bukti & kearifan lokal. Master Plan Desa Wisata/Agro, tata kelola BUMDes, & Koperasi Desa.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Karsa Bangun Desa | Mitra Strategis Menuju Desa Mandiri",
    description:
      "Lembaga pendampingan masyarakat dan pembangunan ekosistem pedesaan menuju Desa Mandiri berbasis bukti & kearifan lokal.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karsa Bangun Desa | Mitra Strategis Menuju Desa Mandiri",
    description:
      "Lembaga pendampingan masyarakat dan pembangunan ekosistem pedesaan menuju Desa Mandiri berbasis bukti & kearifan lokal.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@n8n/chat@latest/dist/style.css"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

