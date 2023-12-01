import { cn } from '../../lib/utils'
import React from 'react'

export default function Breadcrumbs({ children, className, content }) {
    return (
        <div className={cn('text-bold text-lg text-[#8799A3]')}>{content.messages["breadcrumb.home"][content.lang]} - <span className='text-[#ED0E19]'>{children}</span></div>
    )
}
