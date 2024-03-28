import React from "react";
import Image from "next/image";

const ProductTitle = () => {
  return (
    <div className="pt-8">
      <h1 className="font-semibold text-xl md:text-3xl">
        Bangkok Dinner Cruise
      </h1>
      <div className="flex gap-4 md:gap-8 pt-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Image
            alt="pin"
            width={32}
            height={32}
            src="/images/icon/pin.svg"
            className="h-6 w-6"
          />
          <h1>Bangkok, Thailand</h1>
        </div>
        <div className="flex items-center gap-2">
          <Image
            alt="pin"
            width={32}
            height={32}
            src="/images/icon/user.svg"
            className="h-6 w-6"
          />
          <h1>2 Orang</h1>
        </div>
        <div className="flex items-center gap-2">
          <Image
            alt="pin"
            width={32}
            height={32}
            src="/images/icon/clock.svg"
            className="h-6 w-6"
          />
          <h1>4 Hari</h1>
        </div>
        <div className="flex items-center gap-2">
          <Image
            alt="pin"
            width={32}
            height={32}
            src="/images/icon/calendar.svg"
            className="h-6 w-6"
          />
          <h1>1 Nov 2023 - 25 Oct 2024</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductTitle;
