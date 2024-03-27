import Image from "next/image";
import React from "react";

const HeaderProduct = () => {
  return (
    <div className="pt-8 flex gap-4 w-full">
      <Image
        alt="Image1"
        width={800}
        height={400}
        src="/images/product-images/image 27.png"
        className="rounded-xl max-w-screen-xl"
      />
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <Image
            alt="Image2"
            width={400}
            height={400}
            src="/images/product-images/image 24.png"
            className="rounded-xl object-cover"
          />
          <Image
            alt="Image3"
            width={400}
            height={400}
            src="/images/product-images/image 25.png"
            className="rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Image
            alt="Image4"
            width={400}
            height={400}
            src="/images/product-images/image 28.png"
            className="rounded-xl object-cover"
          />
          <Image
            alt="Image5"
            width={400}
            height={400}
            src="/images/product-images/image 29.png"
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderProduct;
