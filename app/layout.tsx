import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigationbar from "@/components/navbar-footer/navbar";
import Footer from "@/components/navbar-footer/footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: {
    default: "Cari Travel: Cari tempat Travel Murah Meriah",
    template: "%s | Cari Travel: Cari tempat Travel Murah Meriah",
  },
  description: "Make your Journey to the next level",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigationbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
