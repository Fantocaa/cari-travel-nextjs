"use client";

import React from "react";
// import { useWindowSize } from "usehooks-ts";
// import HeaderProductMobile from "./api/header-product-mobile";
// import HeaderProduct from "./api/header-product";
import HeaderProduct2 from "./api/header-product copy 2";

interface DetailProductProps {
  attachment: {
    url: string;
    type: "png" | "mp4"; // Tambahkan tipe di sini
    // type: "image" | "video";
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
      <HeaderProduct2
        images={product.attachment}
        videoUrl="https://www.youtube-nocookie.com/embed/FsPvxPLi46U?si=IgChYazq6yzOXK6r"
        thumbnailUrl="/images/image 11.png"
      />
      {/* )} */}
    </div>
  );
}
