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

export const metadata: Metadata = {
  title: "Sanchara • Travel and Tourism",
  description: "Discover, plan, and book unforgettable journeys with Sanchara.",
  metadataBase: new URL("https://sanchara.app"),
  openGraph: {
    title: "Sanchara • Travel and Tourism",
    description:
      "Discover, plan, and book unforgettable journeys with Sanchara.",
    url: "https://sanchara.app",
    siteName: "Sanchara",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanchara • Travel and Tourism",
    description:
      "Discover, plan, and book unforgettable journeys with Sanchara.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
