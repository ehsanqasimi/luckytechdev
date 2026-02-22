import Header from "@/app/components/Header";
import Footer from "./components/Footer";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Centralized SEO configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://luckytech.dev"),
  title: {
    default: "Lucky Tech Dev | Custom Business Websites",
    template: "%s | Lucky Tech Dev", // Allows sub-pages to have titles like "About | Lucky Tech Dev"
  },
  description:
    "Expert web development services. Create a high-performing website for your business today with Lucky Tech Dev.",
  keywords: [
    "web development",
    "business websites",
    "website for small business",
    "web design sydney",
    "small business web designs sydney",
    "small business website redesign",
  ],
  authors: [{ name: "Lucky Tech Dev" }],
  creator: "Lucky Tech Dev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luckytech.dev",
    siteName: "Lucky Tech Dev",
    title: "Lucky Tech Dev | Custom Business Websites",
    description:
      "High-performance websites tailored for your business success.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lucky Tech Dev Business Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucky Tech Dev | Custom Business Websites",
    description: "Create a website for your business now!",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        {/* Added 'flex-grow' so footer stays at bottom on short pages */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
