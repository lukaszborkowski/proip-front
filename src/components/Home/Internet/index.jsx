"use client";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import Container from "../../..//components/Container";
import React, { useState } from "react";
import PricingCard from "./PricingCard";
import SectionTitle from "../../../components/Typography/SectionTitle";
import { usePackage } from "../../../components/usePackage";

export default function Internet({ content = {} }) {
  const { internetItems = [], lang, messages } = content;
  const { internet, setInternet, isBlock, setIsBlock } = usePackage();

  return (
    <div id="internet" className={"mt-[70px] bg-[#F7F7F7]"}>
      <Container className={"pt-[50px]"}>
        <SectionTitle>
          <span className="text-[#ED0E19]">
            {messages["home.internet.titlePrimary"][lang]}
          </span>{" "}
          {messages["home.internet.titleSecondary"][lang]}
        </SectionTitle>
        <div className="flex xl:flex-row gap-6 flex-col  w-full items-center mt-5">
          <div className="grid grid-cols-2  items-center justify-center gap-6">
            <PrimaryButton
              isActive={isBlock}
              className={"h-full flex-1 w-full "}
              onClick={() => setIsBlock()}
            >
              <b>{messages["home.internet.residentialBlocks"][lang]}</b>
            </PrimaryButton>
            <PrimaryButton
              isActive={!isBlock}
              className={"h-full flex-1 w-full "}
              onClick={() => setIsBlock()}
            >
              {messages["home.internet.houses"][lang]}{" "}
              <b>{messages["home.internet.housesBold"][lang]}</b>
            </PrimaryButton>
          </div>
          {/* <div className="grid grid-cols-2  items-center justify-center gap-6">
            <PrimaryButton isActive={true} className={"h-full flex-1 w-full "}>
              {messages["home.internet.24months"][lang]}{" "}
              <b>{messages["home.internet.24monthsBold"][lang]}</b>
            </PrimaryButton>
            <PrimaryButton isActive={false} className={"h-full flex-1 w-full "}>
              {messages["home.internet.lifetime"][lang]}{" "}
              <b>{messages["home.internet.lifetimeBold"][lang]}</b>
            </PrimaryButton>
          </div> */}
        </div>

        {/* <div className="flex flex-col xl:flex-row justify-center items-center gap-10 mt-[50px]"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center items-center gap-10 mt-[50px]">
          {internetItems.map((inter, index) => (
            <PricingCard
              key={index}
              isBlock={isBlock}
              isActive={inter?.id === internet?.id}
              pakiet={inter}
              content={content}
              onSelect={() => {
                inter?.id === internet?.id
                  ? setInternet(null)
                  : setInternet(inter);
              }}
            />
          ))}
        </div>

        <p className="text-[17px] text-[#376369] pt-[30px] pb-5 opacity-50">
          {messages["home.internet.subtext"][lang]}
        </p>
      </Container>
    </div>
  );
}
