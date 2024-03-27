import Image from "next/image";
import Header from "@/components/main-page/header/header";
import Product from "@/components/main-page/product/product";
import Video from "@/components/main-page/video/video";
import Features from "@/components/main-page/features/features";
import ProductLocation from "@/components/main-page/product-location/product-location";
import Cta from "@/components/main-page/cta/cta";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Cari Travel: Cari tempat Travel Murah Meriah",
  description: "Make your Journey to the next level",
};

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      <Header />
      <Product />
      <Video />
      <Features />
      <ProductLocation />
      <Cta />
    </main>
  );
}
