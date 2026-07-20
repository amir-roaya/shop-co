import type { Metadata } from "next";

import "./globals.css";
import SvgSprite from "@/components/ui/SvgSprite";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";
import Overlay from "@/components/ui/Overlay";

export const metadata: Metadata = {
  title: "Shop Co",
  description: "Shoping Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SvgSprite />
        <Header />
        {children}
        <Footer />
        <Overlay />
      </body>
    </html>
  );
}
