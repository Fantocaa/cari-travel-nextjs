import { useTranslations } from "next-intl";
import ProductLocation from "./product-location";

export default function ItemProductLocation() {
  const t = useTranslations("Product-Location");
  return (
    <>
      <ProductLocation t={t} />
    </>
  );
}
