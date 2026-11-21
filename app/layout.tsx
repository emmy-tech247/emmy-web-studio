
import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const head = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-head",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Emmy Web Studio – Websites for schools, churches, hotels and real estate in Nigeria",
  description:
    "Abuja web developer building fast websites and management systems for schools, churches, hotels, real estate firms and cooperatives.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={head.variable}>
      <body>{children}</body>
    </html>
  );
}
