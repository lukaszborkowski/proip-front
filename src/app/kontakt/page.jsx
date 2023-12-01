import Breadcrumbs from "../../components/Breadcrumbs";
import Container from "../../components/Container";
import Card from "../../components/Kontakt/Card";
import CardBigText from "../../components/Kontakt/CardBigText";
import Clients from "../../components/Kontakt/Clients";
import Form from "../../components/Kontakt/Form";
import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import { cookies } from "next/headers";
import React from "react";
import { messages } from "../../lib/messages";

const clients = [
  {
    imageUrl: "/client1.png",
    name: "Jan Kowalski",
    email: "jan.kowalski@ewa-bis.pl",
    phone: "Tel. 501 123 456",
  },
  {
    imageUrl: "/client2.png",
    name: "Maria Nowak",
    email: "maria.nowak@ewa-bis.pl",
    phone: "Tel. 501 123 456",
  },
  {
    imageUrl: "/client3.png",
    name: "Joanna Przykładowa",
    email: "joanna.przykładowa@ewa-bis.pl",
    phone: "Tel. 501 123 456",
  },
  {
    imageUrl: "/client1.png",
    name: "Jan Kowalski",
    email: "jan.kowalski@ewa-bis.pl",
    phone: "Tel. 501 123 456",
  },
  {
    imageUrl: "/client2.png",
    name: "Maria Nowak",
    email: "maria.nowak@ewa-bis.pl",
    phone: "Tel. 501 123 456",
  },
  {
    imageUrl: "/client3.png",
    name: "Joanna Przykładowa",
    email: "joanna.przykładowa@ewa-bis.pl",
    phone: "Tel. 501 123 456",
  },
];

async function getData() {
  const nextCookies = cookies();
  const lang = nextCookies.get("lang")?.value || "pl";

  // const responses = await Promise.all([
  //     fetch(`${process.env.NEXT_PUBLIC_API_URL}/navbar-elements?acf_format=standard`, {
  //         cache: 'no-store',
  //     }).then(res => res.json()),
  //     fetch(`${process.env.NEXT_PUBLIC_API_URL}/hero-items?acf_format=standard`, {
  //         cache: 'no-store',
  //     }).then(res => res.json())

  // ])

  // const navbarItems = (responses[0] || []).map(r => r.acf).reverse()
  // const heroItems = (responses[1] || []).map(r => r.acf).reverse()

  // return { lang, navbarItems, heroItems }
  return { messages, lang };
}

export default async function Kontakt() {
  const content = await getData();
  const { messages, lang } = content;

  return (
    <div className="">
      <PageTitle>
        <Container className={"text-start uppercase"}>
          {messages["contact.pageTitle"][lang]}
        </Container>
      </PageTitle>

      <Container className={"py-5"}>
        <Breadcrumbs content={content}>
          {messages["contact.pageTitle"][lang]}
        </Breadcrumbs>
      </Container>

      <Container>
        <div className=" flex flex-col  lg:flex-row items-stretch justify-center xl:gap-[60px] pb-[50px]">
          <div className="relative">
            <div className="absolute w-[300%] h-full left-[-300%] bg-[#F7F7F7]"></div>

            <div className="flex flex-col xl:w-[530px] relative gap-10 bg-[#F5F5F5] px-0 xl:pr-[15px]  2xl:pr-[24px] py-[26px]">
              <CardBigText />
              <Card secondaryText={messages["contact.serviceSecondary"][lang]}>
                <span className="text-[#ED0E19] ">
                  {messages["contact.servicePrimary"][lang]}: +48 22 888 99 98
                  <br /> serwis@proip.pl
                </span>
              </Card>
              <Card
                secondaryText={messages["contact.promotionsSecondary"][lang]}
              >
                {messages["contact.promotionsPrimary"][lang]}: +48 22 888 99 96
              </Card>
              <Card
                secondaryText={messages["contact.bookkeepingSecondary"][lang]}
              >
                {messages["contact.bookkeepingPrimary"][lang]}: +48 22 888 99 97
                <br /> rozliczenia@proip.pl
              </Card>
            </div>
          </div>

          <div className="w-full px-3 xl:pl-0 ">
            <Form content={content} />
          </div>
        </div>
      </Container>
      <Container>
        <SectionTitle className={"pb-10"}>
          {messages["contact.becomeOurClient"][lang]}
        </SectionTitle>
        <Clients clients={clients} />
      </Container>
    </div>
  );
}
