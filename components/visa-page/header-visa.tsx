"use client";

import React, { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Product = {
  id: number;
  info: {
    en: string;
    id: string;
  };
  iso2: string;
  name: string;
  // flag: string;
};

interface Props {
  products: Product[];
}

export default function HeaderVisa({ products }: Props) {
  const [selected, setSelected] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [initialized, setInitialized] = useState(false);
  const router = useRouter(); // Initialize the router

  // Create an object for custom labels
  const customLabels = products.reduce(
    (acc: { [key: string]: string }, product) => {
      acc[product.iso2.toUpperCase()] = product.name;
      return acc;
    },
    {}
  );

  // Set default selection on component mount
  useEffect(() => {
    if (products.length > 0 && !initialized) {
      const defaultProduct = products[0];
      setSelected(defaultProduct.iso2.toUpperCase());
      setSelectedProduct(defaultProduct);
      setInitialized(true); // Mark as initialized
      router.push(`/visa?country=${defaultProduct.iso2.toUpperCase()}`);
    }
  }, [products, router, initialized]);

  // Handle flag selection
  const handleSelect = (code: string) => {
    setSelected(code);
    const product = products.find((p) => p.iso2.toUpperCase() === code);
    setSelectedProduct(product || null);
    router.push(`/visa?country=${code}`);
  };

  return (
    <div>
      <div className="py-16 container mt-16">
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-3">
            <Image
              src="/images/man-woman-dressed-travel-wear-glasses-take-paictures (1).png"
              alt="document-img"
              width={800}
              height={800}
            />
          </div>
          <div className="col-span-3">
            <ReactFlagsSelect
              selected={selected}
              onSelect={handleSelect}
              countries={Object.keys(customLabels)}
              customLabels={customLabels}
              className="w-64"
            />
            <div className="mt-8">
              <h1 className="text-2xl font-semibold mb-4">
                Documents & Visa{" "}
                {selectedProduct && <span>{selectedProduct.name}</span>}
              </h1>

              {products.map((product) => (
                <div key={product.id}>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg">
                        Requirements Visa Kunjungan
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  {/* <h1>{product.iso2}</h1> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
