import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TsParticles } from "@/components/TsparticlesComponent/tsparticles";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "portfolio leonardo",
  description: "portfolio de desenvolvedor full stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        <Header />
      <TsParticles />
        {children}
        <Footer />
      </body>
    </html>
  );
}
