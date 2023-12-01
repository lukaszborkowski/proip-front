import React from 'react'
import Container from '../../Container'
import Image from 'next/image'
import SectionTitle from '../../Typography/SectionTitle'
import PageTitle from '../../..//components/Typography/PageTitle'

export default function AboutUs({ showBadge = true, content = {} }) {
    const { messages, lang } = content;

    return (
        <>
            {showBadge && <PageTitle>{messages["home.aboutUs.title"][lang]}</PageTitle>}
            <Container className={"pt-11"}>
                <div className="flex flex-col xl:flex-row items-center justify-center gap-[27px]">
                    <Image src='/footer-proip.png' width={450} height={450} alt='footer propip' />

                    <div className="">
                        <SectionTitle>{messages["home.aboutUs.weAre"][lang]}</SectionTitle>
                        <p className='text-base md:text-lg lg:text-[21px] pt-4'>
                            {messages["home.aboutUs.description"][lang]}
                        </p>

                        <h4 className='pt-[28px] text-[25px] text-[#376369]'>{messages["home.aboutUs.theyTrusted"][lang]}</h4>

                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-center gap-[33px]">
                            <Image src='/pl-logo.png' width={88} height={95} alt='pl logo' />
                            <Image src='/PKP-logo.png' width={170} height={95} alt='pkp logo' />
                            <Image src='/slawbud-logo.png' width={170} height={95} alt='slawbud logo' />
                            <Image src='/us-logo.png' width={95} height={95} alt='us logo' />
                            <Image src='/norwegia-logo.png' width={170} height={170} alt='norwegia logo' />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
