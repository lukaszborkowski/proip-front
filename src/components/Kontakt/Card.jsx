import React from 'react'

export default function Card({ children, secondaryText }) {
    return (
        <div className='text-xl lg:text-2xl font-bold text-[#315E64] p-5 bg-white rounded-[7px] shadow-[0px_3px_6px_#00000029]'>
            <h2 className=''>{children}</h2>
            <p className='text-base lg:text-[17px]  mt-4'>{secondaryText}</p>
        </div>
    )
}
