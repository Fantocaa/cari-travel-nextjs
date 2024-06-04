"use client";

import React from "react";
// import { useWindowSize } from "usehooks-ts";
// import HeaderProductMobile from "./api/header-product-mobile";
import HeaderProduct from "./api/header-product";

interface DetailProductProps {
  attachment: {
    url: string;
  }[];
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
      <HeaderProduct images={product.attachment} />
      {/* )} */}
    </div>
  );
}
