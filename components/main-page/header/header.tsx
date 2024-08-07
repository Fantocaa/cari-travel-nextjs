import React from "react";
import Image from "next/image";
import { Send } from "lucide-react";
import LocaleLink from "@/components/locale-link";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("Header-Home");

  return (
    <section className="bg-gradient-to-b from-whitecaritravel via-white to-whitecaritravel text-slate-900 pb-16 md:pb-0">
      <div className="container lg:flex lg:h-screen 2xl:h-full 2xl:pt-16 lg:items-end">
        <div className="w-full pt-20 md:pt-0 md:flex md:flex-row-reverse md:items-center h-full">
          <Image
            src="/images/Frame-167.webp"
            alt="Hero"
            width={1280}
            height={960}
          />
          <div className="w-full">
            <>
              <p className="max-w-xl sm:text-xl/relaxed hidden md:block">
                Cari Travel,
              </p>
              <h1 className="w-full text-3xl font-extrabold sm:text-5xl mt-4">
                Make your Journey&apos;s
                <span className="sm:block pt-2 bg-gradient-to-r from-pinkcaritravel-900 to-yellowcaritravel bg-clip-text text-transparent">
                  {" "}
                  To The <span className="">Next Level</span>{" "}
                </span>
              </h1>

              <p className=" mt-4 max-w-md sm:text-base/relaxed">
                {t("subtitle")}
              </p>

              <div className="mt-4 flex flex-wrap justify-start gap-4">
                <LocaleLink
                  className="block text-center md w-full border border-yellowcaritravel bg-yellowcaritravel transition-colors duration-500 px-12 py-3 text-sm font-medium text-blackcaritravel hover:bg-transparent hover:text-yellowcaritravel focus:outline-none focus:ring active:text-opacity-75 sm:w-auto rounded-full"
                  href="/tour"
                >
                  <div className="flex gap-2 justify-center items-center">
                    Let&apos;s Travel
                    <Send />
                  </div>
                </LocaleLink>
              </div>
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
