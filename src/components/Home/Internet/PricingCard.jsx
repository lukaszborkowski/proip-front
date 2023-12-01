import ChooseButton from "../../../components/Buttons/ChooseButton";
import Marker from "../../../components/Icons/Marker";
import { cn } from "../../../lib/utils";
import React from "react";

export default function PricingCard({
  isActive,
  pakiet = {},
  content = {},
  onSelect,
  isBlock
}) {
  const lang = content.lang;
  const descItems = pakiet[`opis-${lang}`].split("\n");

  return (
    <div
      className={cn(
        "w-full border-[2px] rounded-xl flex flex-col items-center justify-start text-[#3B3A40] bg-white pt-[27px]",
        {
          "border-[#009CFF]": isActive,
          "border-transparent": !isActive,
        }
      )}
    >
      <p className="text-lg lg:text-[22px]">
        <BoldNumbers text={pakiet[`speed-${lang}`]} />
      </p>
      <p className="text-lg lg:text-[22px] mb-2">
        <BoldNumbers text={pakiet[`send-${lang}`]} />
      </p>
      <h4 className="py-6 bg-[#F8F8FA] text-[28px] lg:text-[34px] w-full text-center">
        {isBlock ? pakiet.price_block : pakiet.price} PLN / msc*
      </h4>

      <div className="flex flex-col items-start justify-start w-full p-4 gap-5">
        {descItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-start gap-3 text-[15px] text-[#64626A]"
          >
            <span className="text-[#ffb353] rotate-45">
              <Marker />
            </span>
            {item}
          </div>
        ))}
      </div>

      <p className="py-[18px] px-6 bg-[#F8F8FA] text-[14px] w-full text-center">
        {pakiet[`alert-${lang}`]}
      </p>

      <div className="px-5 py-[26px]">
        <ChooseButton isActive={isActive} onClick={onSelect}>
          {pakiet[`button-text-${lang}`]}
        </ChooseButton>
      </div>
    </div>
  );
}

function BoldNumbers(props) {
  // Rozbij łańcuch znaków na tablicę znaków
  const characters = props.text.split("");

  return (
    <span>
      {characters.map((char, index) => {
        // Jeśli znak to cyfra, zwróć go w elemencie <strong>
        if (/[0-9]/.test(char)) {
          return <strong key={index}>{char}</strong>;
        }
        // W przeciwnym razie, po prostu zwróć znak
        return char;
      })}
    </span>
  );
}
