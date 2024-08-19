import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import HeaderProductMain from "@/components/product-page/headerproductmain";
import ProductTitle from "@/components/product-page/api/product-title";
import ProductDetail from "@/components/product-page/api/detail-product";
import Cta from "../../cta/cta";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LocaleLink from "@/components/locale-link";
import { useTranslations } from "next-intl";

type Product = {
  countries: string[];
  cities: string[];
  traveler: string;
  duration: string;
  duration_night: string;
  start_date: string;
  end_date: string;
  title: string;
  price?: string;
  author_phone: string;
  image_name: string[];
  general_info: {
    en: string;
    id: string;
  };
  travel_schedule: {
    en: string;
    id: string;
  };
  additional_info: {
    en: string;
    id: string;
  };
  yt_links: string;
  thumb_img: string;
};

type Props = {
  product: Product;
};

const ProductDetailPageContent = ({ product }: Props) => {
  const t = useTranslations("DetailPage");

  return (
    <section className="pt-24 md:py-24 2xl:py-32 bg-slate-50">
      <div className="relative mx-auto">
        <div className="container mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <LocaleLink href="/tour">{t("service")}</LocaleLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-darkcmi">
                  {product.title}
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
              <h1 className="text-sm">{t("price")}</h1>
              <p className="text-xl md:text-2xl font-bold">
                Rp. {product?.price}
              </p>
            </div>
            <div>
              <Link href={product?.author_phone} target="__blank">
                <Button className="text-base md:text-lg p-5 2xl:p-6 bg-pinkcaritravel-900 hover:bg-pinkcaritravel-700">
                  {t("order")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPageContent;
