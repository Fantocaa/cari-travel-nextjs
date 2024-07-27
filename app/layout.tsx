import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigationbar from "@/components/navbar-footer/navbar";
import Footer from "@/components/navbar-footer/footer";
import Script from "next/script";

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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L2HK7C7PJ4"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L2HK7C7PJ4');
          `}
        </Script>
      </head>
      <body className={poppins.className}>
        <Navigationbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
