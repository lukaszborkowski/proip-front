"use client";

import React, { useRef } from "react";
import Container from "../../Container";
import Opinion from "./Opinion";
import SectionTitle from "../../Typography/SectionTitle";
import ArrowButton from "../../Buttons/ArrowButton";
import Slider from "react-slick";

export default function Opinions({ content = {} }) {
  const { messages, lang, opinions } = content;

  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#F7F7F7] pt-[70px]">
      <Container>
        <div className="flex-col-reverse xl:flex-row flex  items-stretch gap-[28px] pb-5 md:pb-[50px]">
          <div className="max-w-[950px] bg-transparent">
            <Slider ref={sliderRef} {...settings}>
              {opinions.map((opinion, index) => (
                <div key={index}>
                  <Opinion opinion={opinion} lang={lang} />
                </div>
              ))}

           
            </Slider>
          </div>

          <div className="flex-1 ">
            <h4 className="text-[#ED0E19] text-[21px] font-bold">
              {messages["home.opinions.opinions"][lang]}
            </h4>
            <SectionTitle>{messages["home.opinions.title"][lang]}</SectionTitle>
            <p className="italic pt-4 text-[16px] text-[#818181]">
              {messages["home.opinions.description"][lang]}
            </p>
          </div>
        </div>
        {/* <div className="flex flex-col-reverse xl:hidden gap-[30px] pb-[30px]">
                    <div className='w-full'>
                        <Slider {...settings} slidesToShow={1} slidesToScroll={1} ref={sliderRef}>
                            <div>
                                <Opinion />
                            </div>
                            <div>
                                <Opinion />
                            </div>
                            <div>
                                <Opinion />
                            </div>
                            <div>
                                <Opinion />
                            </div>
                        </Slider>
                    </div>
                    <div className='flex-1 '>
                        <h4 className='text-[#ED0E19] text-[21px] font-bold'>Opinie klientów</h4>
                        <SectionTitle>Co o nas mówią?</SectionTitle>
                        <p className='italic pt-4 text-[16px] text-[#818181]'>
                            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries,
                            but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                        </p>
                    </div>
                </div> */}

        <div className="flex items-center gap-5 pb-[50px]">
          <div>
            <ArrowButton onClick={() => sliderRef.current.slickPrev()} />
          </div>
          <div className="rotate-180">
            <ArrowButton onClick={() => sliderRef.current.slickNext()} />
          </div>
        </div>
      </Container>
    </div>
  );
}
