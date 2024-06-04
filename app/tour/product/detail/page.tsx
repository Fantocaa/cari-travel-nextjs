import React from "react";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductTitle from "@/components/product-page/api/product-title";
import HeaderProductMain from "@/components/product-page/headerproductmain";
import ProductDetail from "@/components/product-page/api/detail-product";
import { getDetailProductsPage } from "@/components/main-page/product/helpers";
import Cta from "@/components/main-page/cta/cta";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = async ({ searchParams }: Props) => {
  const idString = searchParams?.id;
  const id = Number(idString);

  const product = await getDetailProductsPage(id);

  return {
    title: `${product?.title}`,
  };
};

export default async function DetailProductPage({ searchParams }: Props) {
  const idString = searchParams?.id;
  const id = Number(idString);
  // console.log(typeof id);

  const product = await getDetailProductsPage(id);
  // console.log(product);

  return (
    <section className="pt-24 md:pt-0 md:py-24 2xl:py-32 bg-slate-50">
      <div className="relative mx-auto">
        <div className="container mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/tour">Tour</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-darkcmi">
                  {product?.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <HeaderProductMain product={product} />
          <ProductTitle product={product} />
          <ProductDetail product={product} />
        </div>
        <Cta />
        <div className="bg-white w-full py-4 bottom-0 fixed shadow-2xl inset-x-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div>
              <h1 className="text-sm">Starting From :</h1>
              <p className="text-xl md:text-2xl font-bold">
                Rp. {product?.price}
              </p>
            </div>
            <div>
              <Link href={product?.whatsapp_link}>
                <Button className="text-base md:text-lg p-5 2xl:p-6 bg-pinkcaritravel-900 hover:bg-pinkcaritravel-700">
                  Pesan Sekarang
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
