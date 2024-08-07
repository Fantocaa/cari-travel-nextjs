import React from "react";
import Header from "@/components/tour-page/header/header";
// import Product from "@/components/tour-page/product/product";
import Cta from "@/components/main-page/cta/cta";
import ProductTest from "@/components/tour-page/product/producttest";
import { getTranslations } from "next-intl/server";
import MainProduct from "@/components/tour-page/product/main-product";

interface Params {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: Params) {
  const t = await getTranslations({ locale, namespace: "MetadataTour" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

async function getData() {
  const res = await fetch("http://cms-caritravel-filament.test/traveldata", {
    // const res = await fetch("https://backend.caritravel.com/api/postdata", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw console.log("Error failed to fetch");
  }

  const products = await res.json();
  const categories = Array.from(
    new Set(products.map((product: { category: any }) => product.category))
  );
  return { products, categories };
}

type ProductProps = {
  products: any[]; // Sesuaikan dengan tipe data produk yang Anda gunakan
};

export default async function Tour() {
  const { products, categories } = await getData();

  return (
    <main>
      <Header />
      <MainProduct products={products} categories={categories} />
      {/* <ProductTest products={products} categories={categories} /> */}
      <Cta />
    </main>
  );
}
