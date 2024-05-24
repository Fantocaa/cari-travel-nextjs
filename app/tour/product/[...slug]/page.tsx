"use client";

import React from "react";
import HeaderProduct from "@/components/product-page/header-product";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProductTitle from "@/components/product-page/product-title";
import ProductDetail from "@/components/product-page/detail-product";
import Cta from "@/components/main-page/cta/cta";
import { Button } from "@/components/ui/button";
import HeaderProductMobile from "@/components/product-page/header-product-mobile";
import { useWindowSize } from "usehooks-ts";

// async function getData() {
//   // const res = await fetch("http://cms-caritravel.test/api/post");
//   const res = await fetch("https://fakestoreapi.com/products");

//   if (!res.ok) {
//     throw console.log("Error uwu");
//   }

//   return res.json();
// }

// export default function ProductPage({ params }: { params: { slug: string } }) {
export default function ProductPage(props: { params: { slug: string[] } }) {
  const { params } = props;
  // console.log("🚀 ~ ProductPage ~ params:", params);

  const { width } = useWindowSize();
  const isMobile = width <= 768;

  return (
    <section className="relative">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="pt-12 md:pt-8"></div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/tour">Tour Package</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Product : {params.slug}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* <HeaderProduct />
        <HeaderProductMobile /> */}
        {isMobile ? <HeaderProductMobile /> : <HeaderProduct />}
        <ProductTitle />
        <ProductDetail />
      </div>
      <Cta />
      <div className="bg-white w-full py-4 bottom-0 fixed shadow-2xl">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-sm">Starting From :</h1>
            <p className="text-xl md:text-2xl font-bold">RP.5.399.000</p>
          </div>
          <div>
            <Button className="text-base md:text-lg p-5 md:p-8 bg-pinkcaritravel-900 hover:bg-pinkcaritravel-700">
              Pesan Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
