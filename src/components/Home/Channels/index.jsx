"use client";
import Container from "../../..//components/Container";
import SectionTitle from "../../..//components/Typography/SectionTitle";
import React from "react";
import ChannelsCard from "./ChannelsCard";
import { usePackage } from "../../..//components/usePackage";

export default function Channels({ content = {} }) {
  const { lang, messages, moreTv: moreTvs } = content;
  const { moreTv, setMoreTv } = usePackage();

  return (
    <Container>
      <SectionTitle className={"py-[30px]"}>
        {messages["home.channels.title"][lang]}
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 items-stretch justify-start gap-6 pb-10">
        {(moreTvs || []).map((pakiet, index) => {
          return (
            <ChannelsCard
              key={index}
              lang={lang}
              pakiet={pakiet}
              isActive={pakiet?.id === moreTv?.id}
              onSelect={() => {
                pakiet?.id === moreTv?.id ? setMoreTv(null) : setMoreTv(pakiet);
              }}
            />
          );
        })}
      </div>
    </Container>
  );
}
