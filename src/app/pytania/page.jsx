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

  // const responses = await Promise.all([
  //   fetch(`${process.env.NEXT_PUBLIC_API_URL}/questions?acf_format=standard`, {
  //     cache: "no-store",
  //   }).then((res) => res.json()),
  // ]);

  // const questions = (responses[0] || []).map((r) => r.acf).reverse();

  return { messages, lang, questions };
}

export default async function Pytania() {
  const content = await getData();

  const { messages, lang, questions } = content;

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
        {questions?.map((question, index) => {
          return (
            <Collapsible
              key={index}
              title={question[`question-${lang}`]}
              answer={question[`answer-${lang}`]}
              isDark={index % 2 === 0}
            ></Collapsible>
          );
        })}
      </Container>
    </div>
  );
}

const questions = [
  {
    "question-pl": "Pytanie nr 1",
    "question-en": "Question 1",
    "answer-pl": "Odpowiedź",
    "answer-en": "Answer",
  },
  {
    "question-pl": "Pytanie 2",
    "question-en": "Question 2",
    "answer-pl": "Odpowiedź 2",
    "answer-en": "Answer 2",
  },
];
