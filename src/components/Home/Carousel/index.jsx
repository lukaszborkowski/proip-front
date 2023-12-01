"use client";

import React from "react";
import CarouselItem from "./CarouselItem";
import Localization from "../../Icons/Localization";
import Slider from "react-slick";

export default function Carousel({ content = {} }) {
  const { lang, messages } = content;
  console.log(content)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className="absolute left-0 bottom-0">
        <div className="translate-y-[-200%] md:translate-y-[-100%] dots">
          {dots}
        </div>
      </div>
    ),
    customPaging: (i) => <div className="bg-white h-4 w-4 rounded-full"></div>,
  };

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {(content.heroItems ?? []).map((item, index) => (
          <div key={index}>
            <CarouselItem content={content} item={item} />
          </div>
        ))}
      </Slider>
      <a href="#availability">
        <div className="pointer absolute right-0 rounded-[7px_0px_0px_7px] bottom-0 translate-y-[50%] w-full md:w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px] bg-[#ED0E19] text-white p-[23px] text-[16px] lg:text-[19px] font-bold flex items-end justify-start gap-5">
          <Localization />{" "}
          {messages["home.carousel.checkAvailabilityButton"][lang]}
        </div>
      </a>
    </div>
  );
}
