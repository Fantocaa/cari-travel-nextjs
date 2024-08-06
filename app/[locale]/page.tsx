import Header from "@/components/main-page/header/header";
import Product from "@/components/main-page/product/product";
// import Video from "@/components/main-page/video/video";
import Features from "@/components/main-page/features/features";
import ProductLocation from "@/components/main-page/product-location/product-location";
import Cta from "@/components/main-page/cta/cta";
import Partner from "@/components/main-page/partner/Partner";
import { getTranslations } from "next-intl/server";

interface Params {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: Params) {
  const t = await getTranslations({ locale, namespace: "MetadataHome" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

async function getData() {
  const res = await fetch("http://cms-caritravel-filament.test/traveldata", {
    // const res = await fetch("https://backend.caritravel.com/api/postdata", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw console.log("Error failed to fetch");
  }

  const products = await res.json();

  return { products };
}

type ProductProps = {
  products: any[]; // Sesuaikan dengan tipe data produk yang Anda gunakan
};

export default async function Home() {
  const { products } = await getData();

  // console.log(products);

  return (
    <main>
      <Header />
      <Product products={products} />
      {/* <Video /> */}
      <Partner />
      <Features />
      <ProductLocation />
      <Cta />
    </main>
  );
}
