import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const HeaderAbout = () => {
  const t = useTranslations("About");
  return (
    <div>
      <div className="mx-auto lg:flex lg:h-full relative z-10">
        <Image
          alt="tour"
          height={1080}
          width={1920}
          src="/images/About.webp"
          className="w-full bg-no-repeat object-cover mx-auto lg:flex lg:h-full relative z-10 h-96"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center z-50 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className=" sm:text-lg/relaxed text-whitecaritravel">
            {t("header-1")}
          </h1>
          <h1 className="text-3xl font-extrabold sm:text-5xl text-whitecaritravel max-w-lg mt-4 sm:leading-tight">
            Make Your Journey&apos;s To The Next Level
          </h1>
          <p className="mt-4 sm:text-xl/relaxed text-whitecaritravel max-w-2xl">
            {t("desc")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderAbout;
