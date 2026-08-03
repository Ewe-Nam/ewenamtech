import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
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

export const metadata: Metadata = {
  title: "EwenamTech Services — Networking, IT Infrastructure & Software",
  description:
    "EwenamTech Services — network management and IT infrastructure first: LAN/WAN, Windows Server, Active Directory, and hardware repair, plus production web platforms. Run by Charles Tekpor.",
  openGraph: {
    title: "EwenamTech Services — Networking, IT Infrastructure & Software",
    description:
      "Networking & infrastructure, IT support & systems administration, hardware repair, and full-stack development.",
    type: "website",
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
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased dark`}
    >
      <body className="sea min-h-full flex flex-col font-[family-name:var(--font-body)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
