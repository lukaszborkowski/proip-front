import ChooseButton from "../../../components/Buttons/ChooseButton";
import Image from "next/image";
import React from "react";

export default function ChannelsCard({ lang, pakiet, isActive, onSelect }) {
  return (
    <div
      
      className={`${isActive ? "bg-[#009dff2a]" : ""}  w-full border ${
        isActive ? "border-[#009CFF]" : "border-[#ED0E19]"
      } py-[27px] px-[30px] flex xl:flex-row flex-col items-center rounded-[7px] gap-[60px]`}
    >
      <div className="flex flex-col items-center justify-center w-[300px]">
        <h3 className="text-lg lg:text-[22px] font-bold text-[#3B3A40] mb-4">
          {pakiet[`title-${lang}`]}
        </h3>
        <h2 className="text-2xl lg:text-[34px] font-normal text-[#3B3A40]">
          {pakiet.price} zł / msc
        </h2>
      </div>

      <div className="flex items-center xl:flex-row flex-col justify-between w-full">
        <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 justify-center gap-5">
          <Image src="/Canal/Canal.png" width={86} height={86} alt="Canal+" />
          <Image
            src="/Canal/CanalFilm.png"
            width={86}
            height={86}
            alt="Canal+ Film"
          />
          <Image
            src="/Canal/CanalFamily.png"
            width={86}
            height={86}
            alt="Canal+ Family"
          />
          <Image
            src="/Canal/CanalDocument.png"
            width={86}
            height={86}
            alt="Canal+ Document"
          />
          <Image
            src="/Canal/CanalSport.png"
            width={86}
            height={86}
            alt="Canal+ Sport"
          />
          <Image
            src="/Canal/CanalSeriale.png"
            width={86}
            height={86}
            alt="Canal+ Seriale"
          />
          <Image
            src="/Canal/CanalSport2.png"
            width={86}
            height={86}
            alt="Canal+ Sport2"
          />
        </div>

        <ChooseButton className={"w-[200px]"} isActive={true}
        onClick={onSelect}
        >
          {pakiet[`button-text-${lang}`]}
        </ChooseButton>
      </div>
    </div>
  );
}
