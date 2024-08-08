import React from "react";
import VisiMisi from "./content/visimisi";
import Discover from "./content/discover";
import { useTranslations } from "next-intl";

const AboutContent = () => {
  const t = useTranslations("About");
  return (
    <>
      <div className="mx-auto container py-16 md:pt-32 2xl:pb-32">
        <div className="w-full md:flex items-center justify-between md:gap-32">
          <div className="md:w-1/2">
            <p className="text-lg">{t("header-1")}</p>
            <h1 className="font-bold text-5xl pt-4 leading-tight">
              <span className="bg-gradient-to-r from-pinkcaritravel-900 to-yellowcaritravel bg-clip-text text-transparent">
                Global Travel Solutions{" "}
              </span>
              for Every Journey
            </h1>
          </div>
          <p className="text-gray-500 md:w-1/2 text-lg leading-loose pt-8 md:pt-0">
            {t("desc-1")}
          </p>
        </div>
      </div>
      <VisiMisi />
      <Discover />
    </>
  );
};

export default AboutContent;
