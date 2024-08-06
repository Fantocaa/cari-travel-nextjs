import React from "react";
import HeaderAbout from "@/components/about-page/header-about";
import AboutContent from "@/components/about-page/content-about";
import Cta from "@/components/main-page/cta/cta";
import { getTranslations } from "next-intl/server";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "About Us ",
//   description: "Make your Journey to the next level",
// };

interface Params {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: Params) {
  const t = await getTranslations({ locale, namespace: "MetadataAbout" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const About = () => {
  return (
    <main>
      <HeaderAbout />
      <AboutContent />
      <Cta />
    </main>
  );
};

export default About;
