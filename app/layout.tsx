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

const favicon =
  "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20100%20100%27%3E%3Ccircle%20cx%3D%2750%27%20cy%3D%2750%27%20r%3D%2750%27%20fill%3D%27%231E261A%27/%3E%3Cg%20fill%3D%27none%27%20stroke%3D%27%23C2A24E%27%20stroke-width%3D%272.8%27%3E%3Ccircle%20cx%3D%2737%27%20cy%3D%2750%27%20r%3D%2721%27/%3E%3Ccircle%20cx%3D%2737%27%20cy%3D%2750%27%20r%3D%2714%27/%3E%3Ccircle%20cx%3D%2737%27%20cy%3D%2750%27%20r%3D%277.5%27/%3E%3Ccircle%20cx%3D%2763%27%20cy%3D%2750%27%20r%3D%2721%27/%3E%3Ccircle%20cx%3D%2763%27%20cy%3D%2750%27%20r%3D%2714%27/%3E%3Ccircle%20cx%3D%2763%27%20cy%3D%2750%27%20r%3D%277.5%27/%3E%3C/g%3E%3C/svg%3E";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.satinwood.co"),
  title: "Satinwood · Senior finance teams from Sri Lanka",
  description:
    "Satinwood embeds senior finance operators from Sri Lanka full-time as your outsourced controller, FP&A, or accounting team, for a fraction of a local hire.",
  alternates: { canonical: "/" },
  icons: { icon: favicon },
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
