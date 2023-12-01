"use client";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/Typography/SectionTitle";
import React from "react";
import PricingCard from "./PricingCard";
import { usePackage } from "../../../components/usePackage";

export default function Television({ content }) {
  const { tvItems = [], messages, lang } = content;
  const { tv, setTv } = usePackage();

  return (
    <>
      <div
        id="telewizja"
        className="w-full bg-[url(/TelevisionImage.png)] bg-cover "
      >
        <div className="bg-[url(/light-gradient-bg.png)] bg-cover ">
          <Container className={"pt-5 xl:pt-[50px] "}>
            <div className="relative">
              <SectionTitle className={"pt-[50px]"}>
                {messages["home.television.title"][lang]}
              </SectionTitle>
              <div className="flex items-center pt-4 gap-5 pb-[50px] md:justify-start justify-center">
                <PrimaryButton isActive={true}>
                  {messages["home.television.24months"][lang]}{" "}
                  <b>{messages["home.television.24monthsBold"][lang]}</b>
                </PrimaryButton>
                <PrimaryButton>
                  {messages["home.television.tvInternet"][lang]}{" "}
                  <b>{messages["home.television.tvInternetBold"][lang]}</b>
                </PrimaryButton>
              </div>

              <h3 className="text-[22px] md:text-[30px] pt-4 text-center md:text-start xl:pt-10 xl:text-[45px] 2xl:text-[59px] text-[#009CFF] max-w-[630px] 2xl:leading-[71px] pb-5 xl:pb-[150px]">
                {messages["home.television.mainText"][lang]}
              </h3>
              {/* <div className="flex flex-col xl:flex-row justify-center items-center gap-10 xl:pt-[50px] z-20 xl:absolute bottom-0 left-0 xl:translate-y-[85%]"> */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center items-center gap-10 xl:pt-[50px] z-20 xl:absolute bottom-0 left-0 xl:translate-y-[85%]">
                {tvItems.map((inter, index) => (
                  <PricingCard
                    key={index}
                    pakiet={inter}
                    content={content}
                    isActive={inter?.id === tv?.id}
                    onSelect={() => {
                      inter?.id === tv?.id ? setTv(null) : setTv(inter);
                    }}
                  />
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="hidden xl:block w-full h-[630px] bg-[#F7F7F7]"></div>
    </>
  );
}
