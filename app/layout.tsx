import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import GalaxyBackground from "@/components/GalaxyBackground";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nikhil Goswami — Deputy Manager, Trade Forex",
  description:
    "Portfolio of Nikhil Goswami, Deputy Manager – Trade Forex. Foreign exchange, trade finance, and regulatory compliance specialist.",
  keywords: [
    "Nikhil Goswami",
    "Trade Forex",
    "Trade Finance",
    "Foreign Exchange",
    "FEMA",
    "RBI Compliance",
    "SWIFT",
  ],
  authors: [{ name: "Nikhil Goswami" }],
  openGraph: {
    title: "Nikhil Goswami — Deputy Manager, Trade Forex",
    description:
      "Foreign Exchange & Trade Finance Specialist | Risk & Compliance Expert",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body bg-space-bg text-text-primary min-h-screen relative">
        <GalaxyBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
