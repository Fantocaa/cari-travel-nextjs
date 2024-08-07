import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Features = () => {
  const t = useTranslations("Services");
  const features = [
    {
      id: 1,
      h1: t("sub-title-1"),
      p: t("desc-1"),
      src: "/images/features.png",
    },
    {
      id: 2,
      h1: t("sub-title-2"),
      p: t("desc-2"),
      src: "/images/features.png",
    },
    {
      id: 3,
      h1: t("sub-title-3"),
      p: t("desc-3"),
      src: "/images/features.png",
    },
  ];

  return (
    <div>
      <section className="bg-slate-50">
        <div className="container py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
            <div className="relative lg:order-last lg:h-full hidden md:block -translate-x-24 2xl:-translate-x-12">
              <Image
                alt=""
                src="/images/bag.png"
                className="absolute inset-x-16 inset-y-8 md:inset-y-24 2xl:inset-y-16 w-full object-contain"
                width={500}
                height={500}
              />
            </div>
            <div className="lg:py-24 col-span-2 max-w-xl">
              <h2 className="text-2xl font-bold sm:text-4xl">{t("header")}</h2>
              {features.map((feature) => (
                <div key={feature.id} className="flex mt-8 gap-4">
                  <div className="mt-1 md:mt-0">
                    <Image alt="1" src={feature.src} width={64} height={64} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{feature.h1}</h3>
                    <p className="mt-2">{feature.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
