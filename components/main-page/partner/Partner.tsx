import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Partner() {
  const t = useTranslations("Hertz");
  return (
    <>
      <section>
        <div className="container py-16 relative">
          <div className="hidden md:block">
            <div className="absolute max-w-[21rem] xl:max-w-lg inset-x-16 inset-y-32">
              <h1 className="text-3xl xl:text-5xl font-bold text-whitecaritravel max-w-lg">
                {t("title")}
                <span className="text-yellowcaritravel">{t("hertz")}</span>
              </h1>
              <p className="py-6 text-whitecaritravel opacity-95 max-w-[95%] leading-relaxed">
                {t("desc")}
              </p>
              <Image
                src="/images/Frame 182.png"
                width={1080}
                height={1080}
                alt="hertz"
                className="w-64"
              />
            </div>
            <Image
              alt="partner"
              height={1440}
              width={1440}
              src="/images/young-couple-car-trip_11zon.webp"
              className="w-full rounded-xl h-[28rem] object-cover"
            />
          </div>
          <div className="md:hidden">
            <div className="absolute max-w-sm px-6 py-16">
              <h1 className="text-3xl font-bold pb-4 max-w-[85%] text-whitecaritravel">
                {t("title")}
                <span className="text-yellowcaritravel">{t("hertz")}</span>
              </h1>
              <p className="pb-4 max-w-[80%] text-whitecaritravel">
                {t("desc")}
              </p>
              <Image
                src="/images/Frame 182.png"
                width={1080}
                height={1080}
                alt="hertz"
                className="w-56"
              />
            </div>
            <Image
              alt="Partner m"
              height={800}
              width={500}
              src="/images/Frame-183.webp"
              className="w-full rounded-xl shadow-xl h-[28rem]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
