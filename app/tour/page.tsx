import React from "react";
import Header from "@/components/tour-page/header/header";
import Product from "@/components/tour-page/product/product";
import Cta from "@/components/main-page/cta/cta";
import ProductTest from "@/components/tour-page/product/producttest";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Package",
  description: "Make your Journey to the next level",
};

async function getData() {
  const res = await fetch("http://cms-caritravel.test/api/postdata", {
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

// Tentukan tipe untuk properti 'products'
type ProductProps = {
  products: any[]; // Sesuaikan dengan tipe data produk yang Anda gunakan
};

export default async function Tour() {
  const { products, categories } = await getData();
  return (
    <main className="bg-slate-50">
      <Header />
      {/* <Product products={products} /> */}
      <ProductTest products={products} categories={categories} />
      <Cta />
    </main>
  );
}
