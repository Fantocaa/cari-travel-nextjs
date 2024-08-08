import { getDetailProductsPage } from "@/components/main-page/product/helpers";
import ProductDetailPageContent from "@/components/main-page/product/itemproduct/detailproductpage";
import { getTranslations } from "next-intl/server";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
  params: {
    locale: string;
  };
};

export const generateMetadata = async ({
  searchParams,
  params: { locale },
}: Props) => {
  const idString = searchParams?.id;
  const id = Number(idString);

  const product = await getDetailProductsPage(id);

  const t = await getTranslations({ locale, namespace: "MetadataProduct" });

  return {
    title: `${product?.title} ${t("title")}`, // Combine product title with translated title
    description: t("description"), // Use translated description
  };
};

const DetailProductPage = async ({ searchParams }: Props) => {
  const idString = searchParams?.id;
  const id = Number(idString);

  // Fetch product details
  const product = await getDetailProductsPage(id);

  return <ProductDetailPageContent product={product} />;
};

export default DetailProductPage;
