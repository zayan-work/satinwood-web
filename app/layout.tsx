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
  metadataBase: new URL("https://www.satinwoodtalent.com"),
  title: "Satinwood Talent · Senior finance teams from Sri Lanka",
  description:
    "Satinwood Talent embeds senior finance operators from Sri Lanka full-time as your outsourced controller, FP&A, or accounting team, for a fraction of a local hire.",
  alternates: { canonical: "/" },
  appleWebApp: { title: "Satinwood Talent" },
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
    siteName: "Satinwood Talent",
    title: "Satinwood Talent · Senior finance teams from Sri Lanka",
    description:
      "A senior finance leader who owns your numbers, embedded full-time in your business — your month-end close, reporting, and controls, owned with the seniority of a senior in-house hire.",
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satinwood Talent · Senior finance teams from Sri Lanka",
    description:
      "A senior finance leader who owns your numbers, embedded full-time in your business — your month-end close, reporting, and controls, owned with the seniority of a senior in-house hire.",
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
