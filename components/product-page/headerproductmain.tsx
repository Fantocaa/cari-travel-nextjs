import React from "react";
import HeaderProduct2 from "./api/header-product copy 2";
import { useTranslations } from "next-intl";

interface DetailProductProps {
  image_name: string[];
  yt_links: string;
  thumb_img: string;
}

interface Props {
  product: DetailProductProps;
}

export default function HeaderProductMain({ product }: Props) {
  const t = useTranslations("DetailPage");

  const translations = {
    see: t("see"),
  };
  return (
    <div>
      <HeaderProduct2
        images={product.image_name}
        videoUrl={product.yt_links}
        thumbnailUrl={product.thumb_img}
        translations={translations}
      />
    </div>
  );
}
