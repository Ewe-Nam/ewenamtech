import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import Backdrop from "@/components/site/backdrop";
import "./globals.css";

// Archivo: signage/wayfinding heritage — infrastructure, not startup.
const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const body = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Monospace for the things that genuinely are monospace: IPs, ports, labels.
const mono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE = "https://ewenamtech.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default:
      "EwenamTech — Network Infrastructure, IT Support & Cybersecurity in Ghana",
    template: "%s | EwenamTech",
  },
  description:
    "EwenamTech provides network infrastructure, IT support and systems administration, network security and web development for businesses, schools and organisations in Ghana. Based in Mamfe-Akuapem, Eastern Region.",
  keywords: [
    "EwenamTech",
    "network infrastructure Ghana",
    "IT support Ghana",
    "network management Ghana",
    "cybersecurity Ghana",
    "IT systems support",
    "web development Ghana",
    "business technology solutions Ghana",
    "hardware repair Ghana",
  ],
  authors: [{ name: "Charles Tekpor" }],
  creator: "Charles Tekpor",
  alternates: { canonical: "/" },
  openGraph: {
    title: "EwenamTech — Reliable Technology. Secure Infrastructure.",
    description:
      "Network infrastructure, IT support, cybersecurity and software development for businesses, schools and organisations in Ghana.",
    type: "website",
    url: SITE,
    siteName: "EwenamTech",
    locale: "en_GH",
    images: [{ url: "/logo.png", width: 440, height: 431, alt: "EwenamTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EwenamTech — Reliable Technology. Secure Infrastructure.",
    description:
      "Network infrastructure, IT support, cybersecurity and software development in Ghana.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased dark`}
    >
      <body className="sea min-h-full flex flex-col font-[family-name:var(--font-body)]">
        <Backdrop />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
