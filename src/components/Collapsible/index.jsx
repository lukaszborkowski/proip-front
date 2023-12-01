"use client";

import React, { useState } from "react";
import CollapsibleIcon from "./CollapsibleIcon";
import { cn } from "../../lib/utils";

export default function Collapsible({
  children,
  className,
  isDark = true,
  title,
  answer,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "cursor-pointer flex items-center justify-between w-full p-10",
          {
            "shadow-[0px_3px_6px_#00000029] bg-[#F7F7F7]": isDark,
            "bg-white": !isDark,
          }
        )}
      >
        <h2 className="text-lg lg:text-[22px]">{title}</h2>
        <CollapsibleIcon />
      </div>
      {isOpen && <div className="p-10 pt-6">{answer}</div>}
    </>
  );
}
