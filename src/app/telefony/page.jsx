
import { cookies } from "next/headers";
import React from "react";
import { messages } from "../../lib/messages";
import { Content } from "./Content";

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

export default async function Telefony() {
  const content = await getData();

  return (
    <>
      <Content content={content} />
    </>
  );
}

