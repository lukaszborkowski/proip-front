import React from "react";
import Container from "../Container";
import Link from "next/link";

export default function Footer({ content = {} }) {
  const { messages, lang } = content;
  return (
    <footer className="bg-[#3C3D3B] pt-[46px]">
      <Container>
        <div className="grid grid-cols-2 xl:grid-cols-5 gap-10 xl:gap-5">
          <div className="flex col-span-2 flex-col items-start text-white font-bold text-base md:text-[20px]">
            <h3 className="pb-5">
              {messages["footer.footer.contactTitle"][lang]}
            </h3>
            <p className="mb-1">+48 22 888 99 99 </p>
            <p className="mb-1">BOA@PROIP.PL SERWIS: +48 22 888 99 98</p>
            <p className="mb-1">
              {messages["footer.footer.bookkeeping"][lang]}: +48 22 888 99 97
            </p>
            <p>{messages["footer.footer.services"][lang]}: +48 22 888 99 96</p>
          </div>
          <div className="flex flex-col items-start text-white text-base md:text-[20px]">
            <h3 className="font-bold pb-5">
              {messages["footer.footer.offer"][lang]}
            </h3>
            <Link href="/#internet" className="mb-1">
              INTERNET
            </Link>
            <Link href="/#telewizja" className="mb-1">
              {messages["footer.footer.tv"][lang]}
            </Link>
            <Link href="/telefony" className="mb-1">
              {messages["footer.footer.phone"][lang]}
            </Link>
            <Link href="/#availability" className="mb-1">
              {messages["footer.footer.availability"][lang]}
            </Link>
          </div>
          <div className="flex flex-col items-start text-white text-base md:text-[20px]">
            <h3 className="font-bold pb-5">SOCIAL MEDIA</h3>
            <Link href="#" className="mb-1">
              FACEBOOK
            </Link>
            <Link href="#" className="mb-1">
              INSTAGRAM
            </Link>
          </div>
          <div className="flex col-span-2 xl:col-span-1 flex-col items-start text-white text-base md:text-[20px]">
            <h3 className="font-bold pb-5">
              {messages["footer.footer.data"][lang]}
            </h3>
            <p>
              {messages["footer.footer.headquarters"][lang]}:
              <br />
              <br />
              ul. Staszica 47 05-092 Łomianki +48 22 888 99 00
            </p>
          </div>
        </div>

        <p className="pt-[28px] text-[#FFFFFF] text-[17px]">
          {messages["footer.footer.hotline"][lang]}
          <br />
          {messages["footer.footer.hotline2"][lang]}
        </p>

        <p className="pt-[28px] pb-[10px] text-[#FFFFFF] text-[17px] opacity-60">
          {messages["footer.footer.law"][lang]}
        </p>
      </Container>
    </footer>
  );
}
