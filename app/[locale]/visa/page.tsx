import React from "react";
import type { Metadata } from "next";
import HeaderVisa from "@/components/visa-page/header-visa";
import { getTranslations } from "next-intl/server";

// export const metadata: Metadata = {
//   title: "Document & Visa",
//   description: "Make your Journey to the next level",
// };

interface Params {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: Params) {
  const t = await getTranslations({ locale, namespace: "MetadataServices" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

async function getData() {
  const res = await fetch("http://cms-caritravel-filament.test/visadata", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const products = await res.json();
  // console.log("Products received:", products);

  return { products };
}

// Tentukan tipe untuk properti 'products'
type ProductProps = {
  products: any[];
};

export default async function Visa() {
  const { products } = await getData();
  return (
    <>
      <HeaderVisa products={products} />
    </>
  );
}
