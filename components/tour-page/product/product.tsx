import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// import ItemProduct from "@/components/main-page/product-location/itemproduct-location/itemproduct-location";
import ItemProduct from "@/components/main-page/product/itemproduct/itemproduct";

const Product = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 sm:pb-12 lg:px-8">
        <div className="flex justify-between"></div>
        <div>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <ItemProduct />
                  <ItemProduct />
                  <ItemProduct />
                  <ItemProduct />
                  <ItemProduct />
                  <ItemProduct />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <Pagination className="pt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default Product;
