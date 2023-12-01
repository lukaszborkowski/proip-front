import { cn } from '../../lib/utils'
import React from 'react'

export default function SectionTitle({ children, className }) {
    return (
        <h2 className={cn('text-[24px] xl:text-[35px] text-[#376369] xl:text-start text-center font-bold tracking-[2.33px]', className)}>{children}</h2>
    )
}
