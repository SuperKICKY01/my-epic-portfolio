import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/effects/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Chutipon — Director · Developer · Creator",
  description:
    "A cinematic portfolio. Music videos, hardware experiments, and code by a Thammasat-bound CS student.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Chutipon — Cyber-Cinematic Portfolio",
    description: "Director. Developer. Creator.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${mono.variable} dark`}>
      <body className="min-h-screen font-sans">
        <SmoothScroll>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
