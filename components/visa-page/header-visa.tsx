"use client";

import React, { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useLocale } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import Image from "next/image";

type LocaleType = "en" | "id";

type Product = {
  id: number;
  info: {
    en: string;
    id: string;
  };
  category: {
    en: string;
    id: string;
  };
  iso2: string[];
  country_names: string[];
};

interface Props {
  products: Product[];
}

export default function HeaderVisa({ products }: Props) {
  const [selected, setSelected] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [initialized, setInitialized] = useState(false);
  const router = useRouter();
  const locale = useLocale() as LocaleType;

  const constructUrl = (path: string) => {
    return path.startsWith(`/${locale}`) ? path : `/${locale}${path}`;
  };

  useEffect(() => {
    if (products.length > 0 && !initialized) {
      const defaultProduct = products[0];
      setSelected(defaultProduct.iso2[0].toUpperCase());
      setSelectedProducts(
        products.filter((p) => p.iso2.includes(defaultProduct.iso2[0]))
      );
      setInitialized(true);
      router.push(
        constructUrl(`/visa?country=${defaultProduct.iso2[0].toUpperCase()}`)
      );
    }
  }, [products, router, initialized, locale]);

  const handleSelect = (code: string) => {
    setSelected(code);
    const filteredProducts = products.filter((p) =>
      p.iso2.includes(code.toLowerCase())
    );
    setSelectedProducts(filteredProducts);
    router.push(constructUrl(`/visa?country=${code}`));
  };

  const getAllCountries = () => {
    const allIso2Codes = products.flatMap((product) => product.iso2);
    return Array.from(new Set(allIso2Codes));
  };

  const getCountryName = (iso2Code: string) => {
    const product = products.find((p) =>
      p.iso2.includes(iso2Code.toLowerCase())
    );
    if (product) {
      const index = product.iso2.indexOf(iso2Code.toLowerCase());
      return product.country_names[index] || iso2Code;
    }
    return iso2Code;
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
              countries={getAllCountries().map((code) => code.toUpperCase())}
              className="w-64"
            />
            <div className="mt-8">
              <h1 className="text-2xl font-semibold mb-4">
                Documents & Visa{" "}
                {selected && <span>{getCountryName(selected)}</span>}
              </h1>

              {selectedProducts.length > 0 && (
                <Accordion type="multiple">
                  {selectedProducts.map((product) => (
                    <AccordionItem
                      key={product.id}
                      value={`item-${product.id}`}
                    >
                      <AccordionTrigger className="text-xl">
                        Requirements {product.category[locale]}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: product.info[locale],
                          }}
                          className="text-gray-600 text-lg"
                        />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
