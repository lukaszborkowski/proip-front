"use client";

import React from "react";
import Container from "../Container";
import Image from "next/image";
import SectionTitle from "../Typography/SectionTitle";
import AvailabilityForm from "./AvailabilityForm";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";

export default function Availability({ content = {} }) {
  const { messages, lang } = content;
  const path = usePathname();

  return (
    <Container
      className={cn({
        "bg-white": path == "/",
        "bg-[#F7F7F7]": path != "/",
      })}
    >
      <div id="availability" className="flex items-start justify-center py-[75px] gap-[70px]">
        <div className="flex-1">
          <SectionTitle className={"pb-3"}>
            {messages["footer.availability.title"][lang]}
          </SectionTitle>
          <p className="text-xl md:text-2xl lg:text-[30px] text-center xl:text-start text-[#376369] pb-[50px]">
            {messages["footer.availability.subtitle"][lang]}
          </p>

          <AvailabilityForm content={content} />
        </div>

        <Image
          src="/map-screen.png"
          width={775}
          height={529}
          alt="map"
          className="flex-1 hidden xl:block"
        />
      </div>
      <SectionTitle className={"pb-[20px]"}>
        {messages["footer.availability.keepInTouch"][lang]}
      </SectionTitle>
    </Container>
  );
}
