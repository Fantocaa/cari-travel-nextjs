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

const ProductPage = ({ params }: { params: { id: string } }) => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="pt-8"></div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/tour">Tour Package</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Product : {params.id}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <HeaderProduct />
        <ProductTitle />
        <ProductDetail />
      </div>
      <Cta />
      <div className="bg-white w-full py-4 bottom-0 fixed shadow-2xl">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1>Starting From :</h1>
            <p className="text-2xl font-bold">RP.5.399.000</p>
          </div>
          <div>
            <Button className="text-lg p-8 bg-pinkcaritravel-900 hover:bg-pinkcaritravel-700">
              Pesan Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
