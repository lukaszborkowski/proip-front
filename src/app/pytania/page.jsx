import Breadcrumbs from "../../components/Breadcrumbs";
import Collapsible from "../../components/Collapsible";
import Container from "../../components/Container";
import PageTitle from "../../components/Typography/PageTitle";
import React from "react";
import { cookies } from "next/headers";
import { messages, restructureLocalizationObject } from "../../lib/messages";

async function getData() {
  const nextCookies = cookies();
  const lang = nextCookies.get("lang")?.value || "pl";

  let responses;
  try {
    responses = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/index.php/wp-json/wp/v2/questions?acf_format=standard`,
        {
          cache: "no-store",
        }
      ).then((res) => res.json()),
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/index.php/wp-json/wp/v2/messages?acf_format=standard`,
        {
          cache: "no-store",
        }
      ).then((res) => res.json()),
    ]);
  } catch (err) {}

  const resMessages = responses?.[1]?.map((r) => r.acf)?.[0] || {};

  const resQuestions = responses?.[0]?.map((r) => r.acf).reverse() || questions;

  return {
    messages: { ...messages, ...restructureLocalizationObject(resMessages) },
    lang,
    questions: resQuestions,
  };
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
