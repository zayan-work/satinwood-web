import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.satinwood.co"),
  title: "Satinwood · Senior finance teams from Sri Lanka",
  description:
    "Satinwood embeds senior finance operators from Sri Lanka full-time as your outsourced controller, FP&A, or accounting team, for a fraction of a local hire.",
  alternates: { canonical: "/" },
  // Favicon bundle lives in /public (see tmp/facicon-update). This reproduces the
  // generator's recommended <head> markup: svg + 96px png + .ico + apple-touch + manifest.
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
  appleWebApp: { title: "Satinwood" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Satinwood",
    title: "Satinwood · Senior finance teams from Sri Lanka",
    description:
      "A controller-grade finance team, embedded in your business. Senior finance operators from Sri Lanka, full-time, for a fraction of a local hire.",
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satinwood · Senior finance teams from Sri Lanka",
    description:
      "A controller-grade finance team, embedded in your business. Senior finance operators from Sri Lanka, full-time, for a fraction of a local hire.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
