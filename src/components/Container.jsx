import { cn } from '../lib/utils'
import React from 'react'

export default function Container({ children, className }) {
    return (
        <div className={cn('max-w-[1400px] px-6 sm:px-12 xl:px-4  mx-auto', className)}>{children}</div>
    )
}
