import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contest from "@/components/Contest";
import Landing from "@/components/Landing";
import Comp from "@/components/Comp";
import Close from "@/components/Close";




export const metadata: Metadata = {
  title: "Rare Bali Festival",
  description: "Rare Festival of Bali Culture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Hero />
        <About />
        <Contest />
        <Landing />
        <Comp />
        <Close />
        <main className="relative overflow-hidden">
        {children}
        </main>
      </body>
    </html>
  );
}
