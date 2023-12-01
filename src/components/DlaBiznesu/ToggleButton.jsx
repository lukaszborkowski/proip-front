import { cn } from '../../lib/utils'
import React from 'react'

export default function ToggleButton({ children, className }) {
    return (
        <div className={cn("w-full bg-white px-11 rounded-[7px] py-5 shadow-[0px_3px_6px_#00000029] text-lg md:text-xl lg:text-2xl font-bold text-[#446D73]", className)}>{children}</div>
    )
}
