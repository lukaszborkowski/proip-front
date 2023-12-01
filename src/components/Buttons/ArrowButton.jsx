import React from 'react'
import ChevronLeft from '../Icons/ChevronLeft'
import { cn } from '../../lib/utils'

export default function ArrowButton({ classname, ...props }) {
    return (
        <button className={cn("transition duration-300 hover:scale-110 text-white bg-[#009CFF] hover:bg-[#0269aa] rounded-[7px] py-[10px] px-[13px]", classname)} {...props}><ChevronLeft /></button>
    )
}
