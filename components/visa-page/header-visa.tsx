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
import { Button } from "../ui/button";
import Link from "next/link";

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
  author_phone: string;
};

interface Props {
  products: Product[];
  translations: {
    title1: string;
    title2: string;
    title3: string;
    req: string;
    contact: string;
  };
}

export default function HeaderVisa({ products, translations }: Props) {
  const [selected, setSelected] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [initialized, setInitialized] = useState(false);
  const router = useRouter();
  const locale = useLocale() as LocaleType;

  // console.log(products);

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
      <div className="py-16 container mt-12 2xl:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
          <div className="col-span-3">
            <div className="sticky top-28 2xl:top-60 2xl:mt-28">
              <Image
                src={`https://flagcdn.com/${selected.toLowerCase()}.svg`}
                alt={getCountryName(selected)}
                width={400}
                height={400}
              />
              <div className="mt-8 flex flex-col">
                <div className="flex gap-3 mb-2 2xl:mb-4 items-center"></div>
                <h1 className="text-xl 2xl:text-2xl mb-4 max-w-lg 2xl:max-w-xl">
                  {translations.title1}{" "}
                  {selected && <span>{getCountryName(selected)}</span>}{" "}
                  {translations.title2}
                </h1>
                <h1 className="max-w-md mb-4">
                  Jl. Dharmahusada Indah Blok I Nomor Ruko 16 E, RT.01, RW.09,/
                  Kec. Mulyorejo, Kel. Mulyorejo Surabaya Kode pos : 60115
                </h1>
                <Link href={products[0].author_phone} target="__blank">
                  <Button>{translations.contact}</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <ReactFlagsSelect
                selected={selected}
                onSelect={handleSelect}
                countries={getAllCountries().map((code) => code.toUpperCase())}
                className="w-64"
              />
              <div className="mt-8">
                <h1 className="text-xl md:text-2xl font-semibold mb-4">
                  {translations.title3}{" "}
                  {selected && <span>{getCountryName(selected)}</span>}
                </h1>

                {selectedProducts.length > 0 && (
                  <Accordion type="single" defaultValue={"item-1"} collapsible>
                    {selectedProducts.map((product) => (
                      <AccordionItem
                        key={product.id}
                        value={`item-${product.id}`}
                      >
                        <AccordionTrigger className="text-xl text-left">
                          {translations.req} {product.category[locale]}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: product.info[locale],
                            }}
                            className="text-gray-600 overflow-y-auto break-words w-full text-base"
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
    </div>
  );
}
