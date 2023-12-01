/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "../../Container";

export default function CarouselItem({ content, item = {} }) {
  return (
    <Container
      className={`2xl:h-[645px] max-w-none px-0 w-full h-full bg-cover relative`}
    >
      <img
        src={item.image}
        alt={`Hero image ${item["title-pl"]}`}
        className="absolute top-0 left-0 w-full h-full"
        style={{ objectFit: "cover" }}
      />
      <Container
        className={"flex flex-col items-start w-full h-full justify-end pb-20"}
      >
        <h1 className="text-[22px] md:text-[30px] pt-10 xl:text-[45px] 2xl:text-[59px] text-white font-normal z-10 2xl:leading-[76px]">
          {item[`title-${content.lang}`]}
        </h1>
        <h1 className="text-[30px] md:text-[45px] xl:[60px] 2xl:text-[75px] text-[#FF2147] z-10 font-bold 2xl:leading-[76px]">
          {item[`subtitle-${content.lang}`]}
        </h1>

        <div className="flex flex-col-reverse xl:flex-row items-start justify-start mt-5 gap-[23px] z-10">
          <a href="#internet">
            <button className="uppercase bg-[#009CFF] text-white rounded-[7px] px-[25px] py-[18px] text-lg font-bold">
              {item[`button-text-${content.lang}`]}
            </button>
          </a>
          <h3 className="text-lg md:text-[25px] xl:text-[30px] 2xl:text-[37px] text-white font-normal leading-[76px]">
            {item[`description-${content.lang}`].split("{price}")[0]}
            <span className="text-[22px] md:text-[30px] pt-10 xl:text-[45px] 2xl:text-[59px]">
              {item.price}
            </span>
            {item[`description-${content.lang}`].split("{price}")[1]}
          </h3>
        </div>
      </Container>
    </Container>
  );
}
