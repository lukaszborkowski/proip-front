"use client";
import Breadcrumbs from "../../components/Breadcrumbs";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Container from "../../components/Container";
import PriceCard from "../../components/Telefony/PriceCard";
import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import Image from "next/image";
import React from "react";
import { usePackage } from "../../components/usePackage";
import { cn } from "../../lib/utils";
import Marker from "../../components/Icons/Marker";
import ChooseButton from "../../components/Buttons/ChooseButton";

export const Content = ({ content }) => {
  const { messages, lang } = content;
  const { mobilePhone, setMobilePhone, phone, setPhone } = usePackage();

  return (
    <div className="pb-10 overflow-y-hidden">
      <PageTitle>
        <Container className={"text-start"}>
          {messages["phone.pageTitle"][lang]}
        </Container>
      </PageTitle>
      <Container className={"pt-5"}>
        <Breadcrumbs content={content}>
          {messages["phone.breadcrumbs"][lang]}
        </Breadcrumbs>
      </Container>

      <Container>
        <div className={"flex justify-center xl:justify-start py-[36px]"}>
          <PrimaryButton>
            {messages["phone.24monthsOfferSecondary"][lang]}{" "}
            <b>{messages["phone.24monthsOfferPrimary"][lang]}</b>
          </PrimaryButton>
        </div>

        <SectionTitle>
          <span className="text-[#ED0E19]">
            {messages["phone.landline.titlePrimary"][lang]}
          </span>{" "}
          {messages["phone.landline.titleSecondary"][lang]}
        </SectionTitle>

        <p className="max-w-[700px] text-lg lg:text-[18px] pt-[21px] mb-[42px]">
          {messages["phone.landline.description"][lang]}
        </p>

        <div className="flex md:flex-row flex-col-reverse w-full">
          <div className="flex-[2] relative">
            <div className="md:absolute top-0 bg-[#F7F7F7] left-0 w-full  max-w-[900px]">
              <div className="relative ">
                <div className="absolute w-full h-full left-[-100%] bg-[#F7F7F7]"></div>
                <div className="pr-11 py-11">
                  <SectionTitle>
                    {messages["phone.landline.subTitle1"][lang]}{" "}
                    <span className="text-[#ED0E19]">PROIP</span>{" "}
                    {messages["phone.landline.subTitle2"][lang]}
                  </SectionTitle>

                  <p className="pt-[30px]">
                    <b>{messages["phone.landline.content1"][lang]}</b>
                    <br />
                    <br />
                    {messages["phone.landline.content2"][lang]}
                    <br />
                    <br />
                    <b>{messages["phone.landline.content3"][lang]}</b>
                    <br />
                    <br />
                    {messages["phone.landline.content4"][lang]}
                    <br />
                    <br />
                    <b>{messages["phone.landline.content5"][lang]}</b>
                    <br />
                    <br />
                    {messages["phone.landline.content6"][lang]}
                    <br />
                    <br />
                    <b>{messages["phone.landline.content7"][lang]}</b>
                    <br />
                    <br />
                    {messages["phone.landline.content8"][lang]}
                    <br />
                    <br />
                    <b>{messages["phone.landline.content9"][lang]}</b>
                    <br />
                    <br />
                    {messages["phone.landline.content10"][lang]}
                    <br />
                    <br />
                    <b>{messages["phone.landline.content11"][lang]}</b>
                    <br />
                    <br />
                  </p>

                  <div className="block md:hidden">
                    <Image
                      src="/telefony.png"
                      alt="telefony"
                      width={718}
                      height={634}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 pb-[50px]">
            <div className="lg:pl-[70px] lg:pr-[50px] lg:mt-[-100px]">
              <PriceCard
                content={content}
                isActive={phone}
                onSelect={() => {
                  phone ? setPhone(null) : setPhone({ price: 15 });
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex-1"></div>
          <div className="flex-1 hidden md:block">
            <Image
              src="/telefony.png"
              alt="telefony"
              width={718}
              height={634}
              className="w-full object-cover"
            />
          </div>
        </div>

        <SectionTitle>
          <span className="text-[#ED0E19]">
            {messages["phone.mobile.titlePrimary"][lang]}
          </span>{" "}
          {messages["phone.mobile.titleSecondary"][lang]}
        </SectionTitle>

        <p className="max-w-[700px] text-lg lg:text-[18px] pt-[21px] pb-[21px]">
          {messages["phone.mobile.description"][lang]}
        </p>

        <div className="flex md:flex-row flex-col-reverse w-full">
          <div className="flex-[2] relative">
            <div className="md:absolute top-0 bg-[#F7F7F7] z-[-1] left-0 w-full  md:pb-[100px]">
              <div className="relative ">
                <div className="absolute w-full h-[150%] left-[-100%] bg-[#F7F7F7]"></div>
                <div className="pr-11 pb-11 pt-5">
                  <SectionTitle>
                    {messages["phone.mobile.subtitle"][lang]}
                  </SectionTitle>

                  <p className="mt-10">
                    <b>{messages["phone.mobile.content1"][lang]}</b>
                    <br />
                    <br />
                    {messages["phone.mobile.content2"][lang]}
                    <br />
                    <br />
                    <b>{messages["phone.mobile.content3"][lang]} </b>
                    <br />
                    <br />
                    {messages["phone.mobile.content3"][lang]}
                  </p>

                  <div className="block md:hidden">
                    <Image
                      src="/telefony2.png"
                      alt="telefony"
                      width={1400}
                      height={634}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 pb-[50px]">
            <div className="lg:pl-[100px] lg:mt-[-100px]">
              <PriceCardMobile
                content={content}
                isActive={mobilePhone}
                onSelect={() => {
                  mobilePhone
                    ? setMobilePhone(null)
                    : setMobilePhone({ price: 18 });
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex-1 hidden md:block">
            <Image
              src="/telefony2.png"
              alt="telefony"
              width={1400}
              height={634}
              className="w-full z-20 object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

function PriceCardMobile({ isActive = false, content = {}, onSelect }) {
  const { messages, lang } = content;
  return (
    <div
      className={cn(
        "w-full border-[2px] rounded-xl  shadow-[0px_3px_6px_#00000029] flex flex-col items-center justify-start text-[#3B3A40] bg-white pt-[27px]",
        {
          "border-[#009CFF]": isActive,
          "border-transparent": !isActive,
        }
      )}
    >
      <p className="text-lg lg:text-[22px]">
        <b>ProMobile</b>
      </p>
      <p className="text-lg lg:text-[22px] mb-2">
        {messages["phone.phoneMobile.price.subtitle"][lang]}
      </p>
      <h4 className="py-6 bg-[#F8F8FA] text-2xl lg:text-[34px] w-full text-center">
        18 zł / {messages["phone.phoneMobile.price.month"][lang]}*
      </h4>

      <div className="flex flex-col items-start justify-start w-full p-4 gap-5">
        <div className="flex items-center justify-start gap-3 text-[15px] text-[#64626A]">
          <span className="text-[#ffb353] rotate-45">
            <Marker />
          </span>
          {messages["phone.phoneMobile.price.pros1"][lang]}
        </div>
        <div className="flex items-center justify-start gap-3 text-[15px] text-[#64626A]">
          <span className="text-[#ffb353] rotate-45">
            <Marker />
          </span>
          {messages["phone.phoneMobile.price.pros2"][lang]}
        </div>
        {/* <div className="flex items-center justify-start gap-3 text-[15px] text-[#64626A]">
          <span className="text-[#ffb353] rotate-45">
            <Marker />
          </span>
          {messages["phone.phoneMobile.price.pros3"][lang]}
        </div> */}
      </div>

      <div className="px-5 py-[26px]">
        <ChooseButton onClick={onSelect} isActive={isActive}>
          {messages["phone.phoneMobile.price.buttonContent"][lang]}
        </ChooseButton>
      </div>
    </div>
  );
}
