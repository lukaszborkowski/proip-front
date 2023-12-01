import React from 'react'
import ClientCard from './ClientCard'

export default function Clients({ clients }) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full gap-[35px] pb-3 lg:pb-10'>
            {clients.map((client, index) => (
                <ClientCard {...client} key={index} />
            ))}
        </div>
    )
}
