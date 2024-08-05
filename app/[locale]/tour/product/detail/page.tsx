import { getDetailProductsPage } from "@/components/main-page/product/helpers";
import ProductDetailPageContent from "@/components/main-page/product/itemproduct/detailproductpage";

export const generateMetadata = async ({ searchParams }: Props) => {
  const idString = searchParams?.id;
  const id = Number(idString);

  const product = await getDetailProductsPage(id);

  return {
    title: `${product?.title}`,
  };
};

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const DetailProductPage = async ({ searchParams }: Props) => {
  const idString = searchParams?.id;
  const id = Number(idString);

  // Fetch product details
  const product = await getDetailProductsPage(id);

  return <ProductDetailPageContent product={product} />;
};

export default DetailProductPage;
