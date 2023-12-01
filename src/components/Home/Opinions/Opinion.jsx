import React from "react";

export default function Opinion({ opinion, lang }) {
  return (
    <div className="pr-2">
      <div className="bg-white flex-1 px-10 py-7">
        <p className="italic text-[19px] text-[#818181]">
          {opinion[`content-${lang}`]}
        </p>
        <p className="pt-5">{opinion.author}</p>
      </div>
    </div>
  );
}
