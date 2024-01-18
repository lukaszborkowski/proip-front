import { cookies } from "next/headers";
import React from "react";
import { messages, restructureLocalizationObject } from "../../lib/messages";
import { Content } from "./Content";

async function getData() {
  const nextCookies = cookies();
  const lang = nextCookies.get("lang")?.value || "pl";
  let responses;
  try {
    responses = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/index.php/wp-json/wp/v2/messages?acf_format=standard`,
        {
          cache: "no-store",
        }
      ).then((res) => res.json()),
    ]);
  } catch (err) {}

  const resMessages = responses?.[0]?.map((r) => r.acf)?.[0] || {};

  return {
    messages: { ...messages, ...restructureLocalizationObject(resMessages) },
    lang,
  };
}

export default async function Telefony() {
  const content = await getData();

  return (
    <>
      <Content content={content} />
    </>
  );
}
