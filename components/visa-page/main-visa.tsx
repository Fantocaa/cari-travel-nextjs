import React from "react";
import HeaderVisa from "./header-visa";
import { useTranslations } from "next-intl";

type Product = {
  id: number;
  info: {
    en: string;
    id: string;
  };
  category: {
    en: string;
    id: string;
  };
  iso2: string[];
  country_names: string[];
  author_phone: string;
};

interface Props {
  products: Product[];
}

export default function MainVisa({ products }: Props) {
  const t = useTranslations("Visa");

  const translations = {
    title1: t("title-1"),
    title2: t("title-2"),
    title3: t("title-3"),
    req: t("req"),
    contact: t("contact"),
  };
  return (
    <>
      <HeaderVisa products={products} translations={translations} />
    </>
  );
}
