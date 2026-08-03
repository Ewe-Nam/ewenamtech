import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="sea min-h-full flex flex-col text-sky-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
