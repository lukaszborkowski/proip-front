import { cn } from '../../lib/utils'
import React from 'react'

export default function PageTitle({ children, className }) {
    return (
        <div className={cn("w-full text-center bg-[url(/page-title-bg.png)] bg-cover bg-center", className)}>
            <div className=" bg-[#009CFF] opacity-90 w-full h-full px-3 py-[33px] text-center text-white font-bold text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px]">
                {children}
            </div>
        </div>
    )
}
