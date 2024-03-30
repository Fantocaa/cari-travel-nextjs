"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ItemProduct = () => {
  return (
    <div className="group relative block overflow-hidden rounded-xl">
      <Link href="/tour/product/1">
        <div>
          <div className="absolute px-4 end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75 flex items-center gap-2">
            <p>3 Hari</p>
          </div>

          <Image
            // src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
            src="/images/product-images/image 27.png"
            alt="photo-locatioin"
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            width={500}
            height={500}
          />

          <div className="relative border border-gray-100 bg-white p-6">
            <h3 className="mt-4 text-2xl font-semibold text-gray-900">
              Bangkok Dinner Cruise
            </h3>
            <div className="flex justify-between items-end">
              <div>
                <h3 className="mt-4 text-sm font-medium text-gray-900">
                  Starting From:
                </h3>
                <h3 className="text-xl font-bold text-gray-900">
                  Rp.5.399.000
                  <span className="text-sm font-medium text-gray-400">
                    /Person
                  </span>
                </h3>
              </div>
              <Button className="bg-pink-200 text-pinkcaritravel-900">
                View Details
              </Button>
            </div>
            {/* <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
            {" "}
            New{" "}
          </span> */}

            {/* <p className="mt-1.5 text-sm text-gray-700">$14.99</p> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ItemProduct;
