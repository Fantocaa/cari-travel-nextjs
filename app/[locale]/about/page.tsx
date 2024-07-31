import React from "react";
import HeaderAbout from "@/components/about-page/header-about";
import AboutContent from "@/components/about-page/content-about";
import Cta from "@/components/main-page/cta/cta";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Cari Travel: Cari tempat Travel Murah Meriah",
  description: "Make your Journey to the next level",
};

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
