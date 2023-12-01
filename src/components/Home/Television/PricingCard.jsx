import ChooseButton from "../../../components/Buttons/ChooseButton";
import Marker from "../../../components/Icons/Marker";
import { cn } from "../../../lib/utils";
import React from "react";

export default function PricingCard({
  isActive,
  pakiet = {},
  content = {},
  onSelect,
}) {
  const lang = content.lang;
  const descItems = pakiet[`opis-${lang}`].split("\n");

  return (
    <div
      className={cn(
        "w-full border-[2px] rounded-xl flex flex-col items-center justify-start text-[#3B3A40] bg-white pt-[27px]",
        {
          "border-[#009CFF]": isActive,
          "border xl:border-transparent": !isActive,
        }
      )}
    >
      <p className="text-lg lg:text-[22px]">{pakiet[`name-${lang}`]}</p>
      <p className="text-lg lg:text-[22px] mb-2">
        <b>{pakiet[`quantity-${lang}`]}</b>
      </p>
      <h4 className="py-6 bg-[#F8F8FA] text-[28px] lg:text-[34px] w-full text-center">
        {pakiet.price} PLN / msc
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

      <div className="flex justify-center px-6 py-[24px] w-full">
        <button className="bg-[#FFB353] rounded-[7px] px-[30px] py-[18px]  text-white font-bold text-base lg:text-lg">
          {pakiet[`canals-button-text-${lang}`]}
        </button>
      </div>

      <div className="px-6 py-[26px] w-full" >
        <ChooseButton isActive={isActive} onClick={onSelect}>
          {pakiet[`button-text-${lang}`]}
        </ChooseButton>
      </div>
    </div>
  );
}
