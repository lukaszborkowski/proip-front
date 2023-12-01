import { cn } from "../../lib/utils";
import React from "react";
import Marker from "../Icons/Marker";
import ChooseButton from "../Buttons/ChooseButton";

export default function PriceCard({
  isActive = false,
  content = {},
  onSelect,
}) {
  const { messages, lang } = content;
  return (
    <div
      className={cn(
        "w-full border-[2px] rounded-xl  shadow-[0px_3px_6px_#00000029] flex flex-col items-center justify-start text-[#3B3A40] bg-white pt-[27px]",
        {
          "border-[#009CFF]": isActive,
          "border-transparent": !isActive,
        }
      )}
    >
      <p className="text-lg lg:text-[22px]">
        <b>ProFon</b>
      </p>
      <p className="text-lg lg:text-[22px] mb-2">
        {messages["phone.price.subtitle"][lang]}
      </p>
      <h4 className="py-6 bg-[#F8F8FA] text-2xl lg:text-[34px] w-full text-center">
        15 zł / {messages["phone.price.month"][lang]}*
      </h4>

      <div className="flex flex-col items-start justify-start w-full p-4 gap-5">
        <div className="flex items-center justify-start gap-3 text-[15px] text-[#64626A]">
          <span className="text-[#ffb353] rotate-45">
            <Marker />
          </span>
          {messages["phone.price.pros1"][lang]}
        </div>
        <div className="flex items-center justify-start gap-3 text-[15px] text-[#64626A]">
          <span className="text-[#ffb353] rotate-45">
            <Marker />
          </span>
          {messages["phone.price.pros2"][lang]}
        </div>
        <div className="flex items-center justify-start gap-3 text-[15px] text-[#64626A]">
          <span className="text-[#ffb353] rotate-45">
            <Marker />
          </span>
          {messages["phone.price.pros3"][lang]}
        </div>
      </div>

      <div className="px-5 py-[26px]">
        <ChooseButton onClick={onSelect} isActive={isActive}>
          {messages["phone.price.buttonContent"][lang]}
        </ChooseButton>
      </div>
    </div>
  );
}
