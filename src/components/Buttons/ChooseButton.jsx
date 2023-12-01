import { cn } from '../../lib/utils'
import React from 'react'

export default function ChooseButton({ children, isActive, className, onClick }) {
    return (
        <button className={cn("text-base xl:text-lg uppercase border w-full font-bold px-[66px] py-4 rounded-[24px]", className, {
            "border-[#009CFF] text-white bg-[#009CFF]": isActive,
            "border-[#ED0E19] bg-white text-[#ED0E19]": !isActive
        })}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
