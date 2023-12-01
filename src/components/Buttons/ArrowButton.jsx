import React from 'react'
import ChevronLeft from '../Icons/ChevronLeft'
import { cn } from '../../lib/utils'

export default function ArrowButton({ classname, ...props }) {
    return (
        <button className={cn("text-white bg-[#009CFF] rounded-[7px] py-[10px] px-[13px]", classname)} {...props}><ChevronLeft /></button>
    )
}
