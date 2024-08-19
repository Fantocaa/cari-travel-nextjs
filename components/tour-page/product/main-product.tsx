import React from "react";
import { useTranslations } from "next-intl";
import ProductTest from "@/components/tour-page/product/producttest";

interface DetailProductProps {
  id: number;
  countries: string[];
  cities: string[];
  traveler: string;
  duration: string;
  duration_night: string;
  start_date: string;
  end_date: string;
  title: string;
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
  price: string;
  yt_links: string;
  thumb_img: string;
  image_name: string[];
  author_phone: string;
}

interface Props {
  products: DetailProductProps[];
  categories: any[];
}

export default function MainProduct({ products, categories }: Props) {
  const t = useTranslations("Tour");

  const translations = {
    viewDetails: t("button-1"),
    Day: t("day"),
    Night: t("night"),
    price: t("price"),
    not: t("not-found"),
    where: t("where"),
    pc: t("pc"),
    sn: t("sort-new"),
    so: t("sort-old"),
    sl: t("sort-low"),
    sh: t("sort-high"),
    sc: t("sc"),
  };

  return (
    <>
      <ProductTest
        products={products}
        categories={categories}
        translations={translations}
      />
    </>
  );
}
