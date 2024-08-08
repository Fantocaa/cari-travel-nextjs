import Image from "next/image";
import React from "react";
import OnHoverVisiMisi from "./onhover-visimisi";
import { useTranslations } from "next-intl";

export default function VisiMisi() {
  const t = useTranslations("About");

  const translations = {
    title1: t("visi-misi"),
    title2: t("tit-visi"),
    title3: t("tit-misi"),
    visi: t("visi"),
    misi: t("misi"),
  };
  return (
    <>
      <div className="md:py-16">
        <div className="h-screen 2xl:h-full">
          <Image
            src="/images/Rectangle 2342.png"
            alt="about"
            width={1080}
            height={1080}
            className="absolute rounded-r-2xl -z-30 2xl:h-full object-cover 2xl:object-contain 2xl:-translate-y-36 hidden lg:block"
          />
          <div className="container w-full h-full md:flex justify-end items-center lg:pt-12 2xl:pt-0">
            <div className=" text-white">
              <div className="bg-pinkcaritravel-900 z-50 p-6 md:p-8 rounded-xl md:w-[800px]">
                <h1 className="text-lg">{t("header-2")}</h1>
                <h1 className="text-4xl pt-4 pb-8">{t("visi-misi")}</h1>
                <div className="md:flex gap-4">
                  <OnHoverVisiMisi translations={translations} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
