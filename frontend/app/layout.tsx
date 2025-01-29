import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Audispot 254 - Kenya’s ultimate community for Audi enthusiasts.",
  description: "Rev Up Your Audi – Authentic Parts & Exclusive Merch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class">
          <Navbar2 />
          {children}
          <SpeedInsights />
          <Analytics /> //To monitor analytics
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
