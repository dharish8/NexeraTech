import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FinalCTAWrapper from "@/components/layout/FinalCTAWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NexeraTech Solutions — Offshore IT, AI/ML & Cybersecurity Services",
    template: "%s | NexeraTech Solutions",
  },
  description:
    "NexeraTech Solutions Private Limited — next-generation IT services from Hyderabad. Offshore IT, Software Development, AI/ML, IAM & Cybersecurity, Payroll & EOR for US, UK, and India markets.",
  keywords: [
    "offshore IT services",
    "software development India",
    "AI ML services Hyderabad",
    "Okta implementation",
    "IAM cybersecurity",
    "payroll EOR India",
    "staff augmentation",
    "NexeraTech",
  ],
  authors: [{ name: "NexeraTech Solutions Private Limited" }],
  creator: "NexeraTech Solutions",
  metadataBase: new URL("https://nexeratechsolutions.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexeratechsolutions.com",
    siteName: "NexeraTech Solutions",
    title: "NexeraTech Solutions — Offshore IT, AI/ML & Cybersecurity Services",
    description:
      "World-class technology delivery — offshore IT, software development, AI/ML, IAM, and payroll for US, UK, and India markets.",
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white text-[#0F1117]" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <FinalCTAWrapper />
        <Footer />
      </body>
    </html>
  );
}
