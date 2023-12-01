"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import MenuIcon from './MenuIcon'
import CloseIcon from './CloseIcon'
import PrimaryButton from '../Buttons/PrimaryButton'

export default function Mobile({ items }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='relative'>
            <div className='flex lg:hidden px-6 h-[80px] items-center justify-between'>
                <Link href='/'>
                    <Image src='/Logo.png' alt='Logo' width={125} height={63} />
                </Link>

                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>

            {isOpen &&
                <div className='fixed top-[80px] z-50 bg-black bg-opacity-70 left-0 w-full h-[calc(100vh-80px)]'>
                    <div className='w-full bg-white flex flex-col items-start justify-start text-[#3A656B] text-xl px-6 gap-10 pb-5 border-t pt-5'>
                        {items.map((item) => (
                            <Link href={item.to} key={item.label} onClick={(() => setIsOpen(false))}>{item.label}</Link>
                        ))}

                        <PrimaryButton isActive={true} className={"w-full"}>Panel klienta</PrimaryButton>
                    </div>
                </div>
            }
        </div>
    )
}
