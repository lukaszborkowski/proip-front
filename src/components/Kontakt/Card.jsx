import React from 'react'

export default function Card({ children, secondaryText }) {
    return (
        <div className='text-xl lg:text-2xl font-bold p-5 bg-white rounded-[7px] shadow-[0px_3px_6px_#00000029]'>
            <h2 className='text-[#009CFF]'>{children}</h2>
            <p className='text-base lg:text-[17px] text-[#315E64]'>{secondaryText}</p>
        </div>
    )
}
