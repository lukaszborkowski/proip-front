import { cn } from "../../lib/utils";
import React from "react";

export default function PrimaryButton({
  children,
  className,
  isActive,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-lg xl:text-xl 2xl:text-2xl border border-[#ED0E19] px-5 py-4 rounded-[7px] transition duration-300 hover:scale-110",
        className,
        {
          "bg-[#ED0E19] hover:bg-[#ac0b13] text-white": isActive,
          "bg-white hover:bg-[#dddada] text-[#446D73]": !isActive,
        }
      )}
    >
      {children}
    </button>
  );
}
