import Breadcrumbs from "../../components/Breadcrumbs";
import Collapsible from "../../components/Collapsible";
import Container from "../../components/Container";
import PageTitle from "../../components/Typography/PageTitle";
import React from "react";
import { cookies } from "next/headers";
import { messages } from "../../lib/messages";

async function getData() {
  const nextCookies = cookies();
  const lang = nextCookies.get("lang")?.value || "pl";

  return { messages, lang };
}

export default async function Pytania() {
  const content = await getData();

  const { messages, lang } = content;

  return (
    <div>
      <PageTitle>
        <Container className={"text-start"}>F&Q</Container>
      </PageTitle>
      <Container className={"py-5"}>
        <Breadcrumbs content={content}>F&Q</Breadcrumbs>
      </Container>
      <Container
        className={"flex flex-col items-stretch justify-start gap-[3px] pb-20"}
      >
        <Collapsible title={"Najczęściej zadawane pytanie 1"}></Collapsible>
        <Collapsible
          isDark={false}
          title={"Najczęściej zadawane pytanie 2"}
        ></Collapsible>
        <Collapsible title={"Najczęściej zadawane pytanie 3"}></Collapsible>
        <Collapsible
          isDark={false}
          title={"Najczęściej zadawane pytanie 4"}
        ></Collapsible>
        <Collapsible title={"Najczęściej zadawane pytanie 5"}></Collapsible>
      </Container>
    </div>
  );
}
