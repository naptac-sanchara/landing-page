import type { Metadata } from "next";
import { Geist, Geist_Mono, Jura } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Sanchara • Travel and Tourism",
  description: "Discover, plan, and book unforgettable journeys with Sanchara.",
  metadataBase: new URL("https://sanchara.app"),
  keywords: [
    "Sanchara",
    "Travel",
    "Tourism",
    "Trip Logging",
    "NATPAC",
    "Mobility Data",
    "Transport Planning",
  ],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Sanchara • Travel and Tourism",
    description:
      "Discover, plan, and book unforgettable journeys with Sanchara.",
    url: "https://sanchara.app",
    siteName: "Sanchara",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sanchara Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanchara • Travel and Tourism",
    description:
      "Discover, plan, and book unforgettable journeys with Sanchara.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/logo.svg" />
        <meta name="theme-color" content="#000000" />
        <link rel="preload" as="image" href="/og-image.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sanchara",
              url: "https://sanchara.app",
              logo: "https://sanchara.app/logo.svg",
              description:
                "Consent-first trip logging for mobility planning and tourism insights.",
              sameAs: [
                "https://github.com/naptac-sanchara",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jura.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
