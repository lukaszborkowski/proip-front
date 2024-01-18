import { cn } from '../../lib/utils'
import React from 'react'

export default function ChooseButton({ type = "button", children, isActive, className, onClick, disabled }) {
    return (
        <button 
        disabled={disabled}
        type={type} className={cn("text-base xl:text-lg uppercase border w-full font-bold px-[66px] py-4 rounded-[24px] transition duration-300 hover:scale-110 ", className, {
            "border-[#009CFF] text-white bg-[#009CFF] hover:bg-[#0283d3]": isActive,
            "border-[#ED0E19] bg-white hover:bg-[#dbdada] text-[#ED0E19]": !isActive
        })}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
