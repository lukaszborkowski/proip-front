"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Container from "../Container";
import Mobile from "./Mobile";

const navLinks = [
  {
    label: "Internet",
    to: "#",
  },
  {
    label: "Telewizja",
    to: "#",
  },
  {
    label: "Telefon/GSM",
    to: "/telefony",
  },
  {
    label: "Dostepność",
    to: "#",
  },
  {
    label: "Dla biznesu",
    to: "/dla-biznesu",
  },
  {
    label: "O nas",
    to: "#",
  },
  {
    label: "F&Q",
    to: "/pytania",
  },
  {
    label: "Kontakt",
    to: "/kontakt",
  },
];

export default function Navbar({ content = {} }) {
  const { navbarItems = [], lang, messages } = content;
  // console.log(messages["home.navbar.contactNumberPrefix"][lang]);

  return (
    <nav onClick={() => console.log(content)}>
      <Container className={"hidden lg:block "}>
        <div className="flex items-start justify-between border-b h-full pr-10 pb-4">
          <Link href="/">
            <Image
              src="/ProIpLogo.png"
              alt="Logo"
              width={250}
              height={125}
              className="w-full"
              style={{ maxWidth: "150px" }}
            />
          </Link>

          <div className="flex flex-col items-end justify-between gap-[25px] h-full">
            <div className="flex items-center justify-end h-[55px] gap-[30px]">
              <a className="text-[#3A656B]" href="https://facebook.com">
                <Facebook />
              </a>
              <div className="text-[#3A656B]">
                <Instagram />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  if (lang === "pl") {
                    document.cookie = "lang=en; path=/;";
                  } else {
                    document.cookie = "lang=pl; path=/;";
                  }
                  location.reload();
                }}
              >
                {lang === "pl" ? (
                  <img className="w-[20px]" src="/united-kingdom.png" />
                ) : (
                  <img className="w-[20px]" src="/poland.png" />
                )}
              </div>
              <h3 className="text-xl font-bold text-[#454545]">
                <span className="text-[#ED0E19]">
                  {messages["navbar.contactNumberPrefix"][lang]}
                </span>
                {messages["navbar.contactNumber"][lang]}
              </h3>
              <button className="rounded-[0px_0px_7px_7px] px-[22px] text-white text-xl font-bold bg-[#ED0E19] h-full">
                {messages["navbar.clientPanelButton"][lang]}
              </button>
            </div>
            <div className="flex items-center justify-center gap-12 h-full text-[#3A656B] text-lg">
              {navbarItems.map((link) => (
                <Link href={link.url} key={link[`title-${lang}`]}>
                  {link[`title-${lang}`]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Mobile items={navLinks} />
    </nav>
  );
}
