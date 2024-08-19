import React from "react";

import { useTranslations } from "next-intl";
import Search from "./search";

export default function SearchHeader() {
  const t = useTranslations("Tour");

  const translations = {
    pc: t("pc"),
    sc: t("sc"),
    emptySearchError: t("emptySearchError"),
  };

  return (
    <>
      <div className="mt-6">
        {/* <LocaleLink
    className="block text-center md w-full border border-yellowcaritravel bg-yellowcaritravel transition-colors duration-500 px-12 py-3 text-sm font-medium text-blackcaritravel hover:bg-transparent hover:text-yellowcaritravel focus:outline-none focus:ring active:text-opacity-75 sm:w-auto rounded-full"
    href="/tour"
  >
    <div className="flex gap-2 justify-center items-center">
      Let&apos;s Travel
      <Send />
    </div>
  </LocaleLink> */}
        {/* <Input
          className="w-1/2 bg-white py-6 rounded-full"
          placeholder="Cari Disini"
        />
        <Button className="w-full border border-yellowcaritravel bg-yellowcaritravel transition-colors duration-500 px-8 py-6 text-sm font-medium text-blackcaritravel hover:bg-transparent hover:text-yellowcaritravel focus:outline-none focus:ring active:text-opacity-75 sm:w-auto rounded-full">
          Cari
        </Button> */}

        <Search translations={translations} />
      </div>
    </>
  );
}
