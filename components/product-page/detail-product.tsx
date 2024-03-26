import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductDetail = () => {
  return (
    <div className="pt-8">
      {/* <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="account">Informasi Umum</TabsTrigger>
          <TabsTrigger value="password">Jadwal Perjalanan</TabsTrigger>
        </TabsList>
        <TabsContent value="account"></TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs> */}

      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h1 className="font-bold text-lg pt-4">Informasi Umum</h1>
            </AccordionTrigger>
            <AccordionContent>
              <p className="leading-7">
                Jelajahi keindahan Bangkok dari perspektif yang berbeda dengan
                paket tur &quot;Bangkok Dinner Cruise&quot;. Nikmati perjalanan
                yang mewah di atas Sungai Chao Phraya sambil menikmati
                pemandangan malam kota yang gemerlap. Dalam paket ini, Anda akan
                menikmati makan malam lezat yang disajikan dalam suasana yang
                romantis dan elegan. Sambil menikmati hidangan lezat, Anda akan
                melintasi beberapa landmark terkenal Bangkok, seperti Kuil Wat
                Arun dan Istana Kerajaan. Pengalaman ini memberikan kombinasi
                yang sempurna antara kuliner kelas atas dan pemandangan yang
                menakjubkan, menciptakan momen tak terlupakan di hati Anda.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h1 className="font-bold text-lg pt-4">Jadwal Perjalanan</h1>
            </AccordionTrigger>
            <AccordionContent>
              <p className="leading-7 pt-4">
                Jelajahi keindahan Bangkok dari perspektif yang berbeda dengan
                paket tur &quot;Bangkok Dinner Cruise&quot;. Nikmati perjalanan
                yang mewah di atas Sungai Chao Phraya sambil menikmati
                pemandangan malam kota yang gemerlap. Dalam paket ini, Anda akan
                menikmati makan malam lezat yang disajikan dalam suasana yang
                romantis dan elegan. Sambil menikmati hidangan lezat, Anda akan
                melintasi beberapa landmark terkenal Bangkok, seperti Kuil Wat
                Arun dan Istana Kerajaan. Pengalaman ini memberikan kombinasi
                yang sempurna antara kuliner kelas atas dan pemandangan yang
                menakjubkan, menciptakan momen tak terlupakan di hati Anda.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h1 className="font-bold text-lg pt-4">Info Tambahan</h1>
            </AccordionTrigger>
            <AccordionContent>
              <p className="leading-7 pt-4">
                Jelajahi keindahan Bangkok dari perspektif yang berbeda dengan
                paket tur &quot;Bangkok Dinner Cruise&quot;. Nikmati perjalanan
                yang mewah di atas Sungai Chao Phraya sambil menikmati
                pemandangan malam kota yang gemerlap. Dalam paket ini, Anda akan
                menikmati makan malam lezat yang disajikan dalam suasana yang
                romantis dan elegan. Sambil menikmati hidangan lezat, Anda akan
                melintasi beberapa landmark terkenal Bangkok, seperti Kuil Wat
                Arun dan Istana Kerajaan. Pengalaman ini memberikan kombinasi
                yang sempurna antara kuliner kelas atas dan pemandangan yang
                menakjubkan, menciptakan momen tak terlupakan di hati Anda.
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
