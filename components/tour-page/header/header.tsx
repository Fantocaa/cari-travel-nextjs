import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Tour");
  return (
    <section className="relative">
      <div className="mx-auto lg:flex lg:h-full relative z-10 h-96">
        <Image
          alt="tour"
          width={1920}
          height={1080}
          src="/images/tour.webp"
          className="w-full h-full object-cover relative"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center z-50 px-4 sm:px-6 lg:px-8 pt-12 md:pt-0">
          <div className="text-center flex flex-col justify-center items-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-whitecaritravel max-w-4xl sm:leading-tight">
              {t("title")}
            </h1>
            <p className="mt-4 sm:text-lg/relaxed text-whitecaritravel max-w-2xl text-center">
              {t("desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
