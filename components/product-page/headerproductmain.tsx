"use client";

import React from "react";
// import { useWindowSize } from "usehooks-ts";
// import HeaderProductMobile from "./api/header-product-mobile";
// import HeaderProduct from "./api/header-product";
import HeaderProduct2 from "./api/header-product copy 2";

interface DetailProductProps {
  image_name: string[];
  yt_links: string;
  thumb_img: string;
}

interface Props {
  product: DetailProductProps;
}

export default function HeaderProductMain({ product }: Props) {
  // const { width } = useWindowSize();
  // const isMobile = width <= 768;

  return (
    <div>
      {/* {isMobile ? (
        <HeaderProductMobile images={product.attachment} />
      ) : ( */}
      <HeaderProduct2
        // images={product.attachment}
        // images={product.image_name.map((url) => ({ url, type: "png" }))}
        images={product.image_name} // Pass array of URLs directly
        videoUrl={product.yt_links}
        thumbnailUrl={product.thumb_img}
      />
      {/* )} */}
    </div>
  );
}
