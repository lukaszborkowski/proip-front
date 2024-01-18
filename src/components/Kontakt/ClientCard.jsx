import Image from 'next/image'
import React from 'react'

export default function ClientCard({ email, name, imageUrl, phone }) {
    return (
        <div className='border-[5px] border-[#376369] p-5'>
            <img src={imageUrl} width={230} height={210} alt='client1' className='w-full object-cover pb-10' />
            <h3 className='text-xl font-bold text-[#376369] mb-3'>{name}</h3>
            <p className='font-bolc text-[#376369]'>{email}</p>
            <p className='font-bolc text-[#376369]'>{phone}</p>
        </div>
    )
}
