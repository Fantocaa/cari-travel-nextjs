import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <section className="relative">
      <div className="mx-auto lg:flex lg:h-full relative z-10 h-96">
        <Image
          alt="tour"
          width={1920}
          height={1080}
          src="/images/tour.png"
          className="w-full h-full bg-no-repeat object-cover relative"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center z-50 px-4 sm:px-6 lg:px-8 pt-12 md:pt-0">
          <div className="text-center flex flex-col justify-center items-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-whitecaritravel">
              Let Us Plan Your Perfect Gateway
            </h1>
            <p className="mt-4 sm:text-lg/relaxed text-whitecaritravel max-w-2xl text-center">
              Leave the Details to Us and Embark on your Ideal Escape. Our
              Expert Team Will Curate A Personalized Itinerary For A Seamless
              And Unforgettable Journey
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex bg-white p-8 rounded-xl mt-4 w-full justify-between mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 relative pb-4 md:pb-0">
          <Image
            src="/images/icon/pin.svg"
            alt="pin"
            width={24}
            height={24}
            className="absolute left-3 top-3 h-6 w-6 text-gray-400"
          />
          <Input
            id="search"
            type="text"
            placeholder="Cari Destinasi kamu disini"
            className="h-12 w-full md:w-96 rounded-full px-4 pl-12"
          />
          <Button className="h-12 md:h-full rounded-full bg-pinkcaritravel-900">
            Search
          </Button>
        </div>
        <div className="flex gap-2 md:gap-4">
          <Select>
            <SelectTrigger className="w-[180px] h-12 rounded-full px-4">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort By</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px] h-12 rounded-full px-4">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default Header;
