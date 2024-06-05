import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ProductTitleProps {
  general_info: string;
  travel_schedule: string;
  additional_info: string;
}

interface Props {
  product: ProductTitleProps;
}

const ProductDetail = ({ product }: Props) => {
  return (
    <div className="mt-8">
      <div className="bg-white p-8 rounded-xl">
        <Accordion type="single" collapsible defaultValue={"item-1"}>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h1 className="font-bold text-lg pt-4">Informasi Umum</h1>
            </AccordionTrigger>
            <AccordionContent>
              <p className="leading-7 text-gray-500">{product.general_info}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h1 className="font-bold text-lg pt-4">Informasi Paket</h1>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="leading-7 pt-4"
                dangerouslySetInnerHTML={{ __html: product.travel_schedule }}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h1 className="font-bold text-lg pt-4">Info Tambahan</h1>
            </AccordionTrigger>
            <AccordionContent>
              <p className="leading-7 pt-4 text-gray-500">
                {product.additional_info}
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <h1></h1>
      </div>
    </div>
  );
};

export default ProductDetail;
