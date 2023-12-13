"use client";

import React from "react";
import Container from "../Container";
import SectionTitle from "../Typography/SectionTitle";
import AvailabilityForm from "./AvailabilityForm";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import "maplibre-gl/dist/maplibre-gl.css";
import * as maptilersdk from "@maptiler/sdk";
import Image from "next/image";

const API_KEY = "Qs85t6rRkcuwS4HOxmYW";

maptilersdk.config.apiKey = API_KEY;

export default function Availability({ content = {} }) {
  const { messages, lang } = content;
  const path = usePathname();

  return (
    <div
      className={cn({
        "bg-white": path == "/",
        "bg-[#F7F7F7]": path != "/",
      })}
    >
      <Container>
        <div
          id="availability"
          className="flex flex-col lg:flex-row items-stretch lg:items-start  justify-center py-[75px] gap-[70px]"
        >
          <div className="flex-1">
            <SectionTitle className={"pb-3"}>
              {messages["footer.availability.title"][lang]}
            </SectionTitle>
            <p className="text-xl md:text-2xl lg:text-[30px] text-center xl:text-start text-[#376369] pb-[20px]">
              {messages["footer.availability.subtitle"][lang]}
            </p>
            <AvailabilityForm
              content={content}
              onSubmit={(values) => {
                getAvailabilityCoordinates(values);
              }}
            />
          </div>
          <div className="pl-0 md:pl-8">
            <Image
              src="/footer-proip.png"
              width={450}
              height={450}
              alt="footer propip"
            />
          </div>
        </div>
        <SectionTitle className={"pb-[20px]"}>
          {messages["footer.availability.keepInTouch"][lang]}
        </SectionTitle>
      </Container>
    </div>
  );
}
