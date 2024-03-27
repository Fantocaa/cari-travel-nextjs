import React from "react";
import Header from "@/components/tour-page/header/header";
import Product from "@/components/tour-page/product/product";
import Cta from "@/components/main-page/cta/cta";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Package | Cari Travel: Cari tempat Travel Murah Meriah",
  description: "Make your Journey to the next level",
};

const About = () => {
  return (
    <main>
      <Header />
      <Product />
      <Cta />
    </main>
  );
};

export default About;
