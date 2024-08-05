import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocale } from "next-intl";

interface ProductTitleProps {
  general_info: {
    en: string;
    id: string;
  };
  travel_schedule: {
    en: string;
    id: string;
  };
  additional_info: {
    en: string;
    id: string;
  };
}

interface Props {
  product: ProductTitleProps;
}

const ProductDetail = ({ product }: Props) => {
  const locale = useLocale();

  return (
    <div className="mt-16">
      <div className="bg-white p-8 rounded-xl">
        <Accordion type="single" collapsible defaultValue={"item-1"}>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h1 className="font-bold text-lg pt-4">Informasi Umum</h1>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="leading-7 text-gray-600 text-lg"
                dangerouslySetInnerHTML={{
                  __html:
                    product.general_info[
                      locale as keyof typeof product.general_info
                    ],
                }}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h1 className="font-bold text-lg pt-4">Informasi Paket</h1>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="leading-7 text-gray-600 text-lg"
                dangerouslySetInnerHTML={{
                  __html:
                    product.travel_schedule[
                      locale as keyof typeof product.travel_schedule
                    ],
                }}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h1 className="font-bold text-lg pt-4">Info Tambahan</h1>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="leading-7 text-gray-600 text-lg"
                dangerouslySetInnerHTML={{
                  __html:
                    product.additional_info[
                      locale as keyof typeof product.additional_info
                    ],
                }}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <h1></h1>
      </div>
    </div>
  );
};

export default ProductDetail;
