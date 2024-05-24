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
import ItemProduct from "@/components/main-page/product/itemproduct/itemproduct";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

type ProductProps = {
  products: any[]; // Sesuaikan dengan tipe data produk yang Anda gunakan
};

export default function Product({ products }: ProductProps) {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 sm:pb-12 lg:px-8">
        {/* <div className="flex justify-between"></div> */}
        <>
          <Carousel>
            <div className="hidden md:grid grid-cols-3 gap-4 mt-8">
              {products.length > 0 &&
                products.map((product: any) => (
                  // <ItemProduct key={product.id} />
                  <div key={product.id}>
                    <div className="group relative block overflow-hidden rounded-xl">
                      {/* <Link href="/tour/product/1"> */}
                      <Link href={`/tour/product/${product.id}`}>
                        <div>
                          <div className="absolute px-4 end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75 flex items-center gap-2">
                            <p>3 Hari</p>
                          </div>

                          <Image
                            // src="/images/product-images/image 27.png"
                            src={product.image}
                            alt="photo-location"
                            className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72"
                            width={500}
                            height={500}
                          />
                          <div className="relative border border-gray-100 bg-white p-6">
                            <h3 className=" text-2xl font-semibold text-gray-900 truncate">
                              {/* Bangkok Dinner Cruise */}
                              {product.title}
                            </h3>
                            <div className="flex justify-between items-end">
                              <div>
                                <h3 className="mt-4 text-sm font-medium text-gray-900">
                                  Starting From:
                                </h3>
                                <h3 className="text-xl font-bold text-gray-900">
                                  {/* Rp.5.399.000 */}${product.price}
                                  {/* <span className="text-sm font-medium text-gray-400">
                                    /Person
                                  </span> */}
                                </h3>
                              </div>
                              <Button className="bg-pink-200 text-pinkcaritravel-900">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
            <CarouselContent>
              <CarouselItem>
                <div className="md:hidden gap-4 mt-8">
                  <ItemProduct />
                  <ItemProduct />
                  <ItemProduct />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <Pagination className="pt-8 pb-8">
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
        </>
      </div>
    </section>
  );
}
