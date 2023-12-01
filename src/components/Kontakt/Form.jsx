import React from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'
import { cn } from '../../lib/utils'
import Image from 'next/image'
import ChooseButton from '../Buttons/ChooseButton'

export default function Form({ content = {} }) {
    const { messages, lang } = content

    return (
        <>
            <div className="flex md:flex-row flex-col w-full items-center justify-center gap-5 pb-5">
                <PrimaryButton className={"w-full py-2 px-[25px]  font-bold flex-1"} isActive={true}><span className='text-base lg:text-lg whitespace-nowrap'>{messages["contact.form.buyNewButton"][lang]}</span></PrimaryButton>
                <PrimaryButton className={"w-full py-2 px-[25px] font-bold flex-1 "} isActive={false}><span className='text-[#ED0E19] text-base lg:text-lg'>{messages["contact.form.settlementsButton"][lang]}</span></PrimaryButton>
                <PrimaryButton className={"w-full py-2 px-[25px] font-bold flex-1 text-[#ED0E19]"} isActive={false}><span className='text-[#ED0E19] text-base lg:text-lg'>{messages["contact.form.failuresButton"][lang]}</span></PrimaryButton>
            </div>
            <form>
                <TextInput placeholder={messages["contact.form.namePlaceholder"][lang]} />
                <TextInput type='email' placeholder={messages["contact.form.emailPlaceholder"][lang]} />
                <TextInput placeholder={messages["contact.form.phonePlaceholder"][lang]} />
                <div className='py-4'>
                    <textarea
                        name="" id=""
                        cols="30" rows="5"
                        placeholder={messages["contact.form.contentPlaceholder"][lang]}
                        className='p-[25px] w-full shadow-[0px_3px_6px_#00000029] rounded-[7px] placeholder:text-[#3C3D3B] text-[#3C3D3B] placeholder:uppercase uppercase placeholder:font-bold font-bold'>
                    </textarea>
                </div>
                <input type="checkbox" id="policy" name="policy" />
                <label for="policy" className='pl-3 text-[17px] text-[#707070]'>{messages["contact.form.acceptPoliciesSecondary"][lang]} <span className='font-bold text-[#ED0E19] underline cursor-pointer'>{messages["contact.form.acceptPoliciesPrimary"][lang]}</span></label>

                <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-[14px]">
                    <Image src='/newCaptchaAnchor.png' width={260} height={70} alt='captcha' className='w-full max-w-[260px]' />

                    <ChooseButton className={"rounded-[7px]"} isActive={true}>{messages["contact.form.sendButton"][lang]}</ChooseButton>
                </div>
            </form>
        </>
    )
}


const TextInput = ({ className, type = "text", ...props }) => {
    return (
        <div className='py-4'>
            <input
                type={type}
                className={cn("p-[25px] w-full shadow-[0px_3px_6px_#00000029] rounded-[7px] placeholder:text-[#3C3D3B] text-[#3C3D3B] placeholder:uppercase uppercase placeholder:font-bold font-bold", className)}
                {...props}
            />
        </div>
    )
}