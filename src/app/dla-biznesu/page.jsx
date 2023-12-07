import Breadcrumbs from '../../components/Breadcrumbs'
import Container from '../../components/Container'
import ToggleButton from '../../components/DlaBiznesu/ToggleButton'
import AboutUs from '../../components/Home/AboutUs'
import PageTitle from '../../components/Typography/PageTitle'
import SectionTitle from '../../components/Typography/SectionTitle'
import { cookies } from 'next/headers'
import Image from 'next/image'
import React from 'react'
import { messages } from '../../lib/messages'

async function getData() {
    const nextCookies = cookies();
    const lang = nextCookies.get('lang')?.value || 'pl'

    return { messages, lang }
}


export default async function DlaBiznesu() {
    const content = await getData()

    const { messages, lang } = content;

    return (
        <div>
            <PageTitle>
                <Container className={"text-start uppercase"}>
                    {messages["business.mainTitle"][lang]}
                </Container>
            </PageTitle>
            <Container className={"py-5"}>
                <Breadcrumbs content={content}>{messages["business.mainTitle"][lang]}</Breadcrumbs>
            </Container>

            <Container>
                <Image src="/joyful-entrepreneur-is-having-a-business-call-2021-09-03-09-49-09-utc.png" alt="asd" width={1400} height={355} className='w-full max-h-[355px]' />
                <SectionTitle className={"mt-9 mb-6"}><span className='text-[#ED0E19]'>{messages["business.symmetricalConnection"][lang]}</span></SectionTitle>
                <p className='text-center lg:text-start max-w-[850px] text-lg lg:text-[21px] pb-[33px]'>
                    {messages["business.symmetricalConnectionDesc"][lang]}
                </p>
            </Container>

            <Container>
                <div className="flex flex-col lg:flex-row w-full items-stretch lg:gap-[70px] bg-[#F7F7F7]">
                    <Image src='/call 1.png' alt="asd" width={700} height={355} className='flex-1 w-full max-h-[355px]' />
                    <div className="text-center lg:text-start flex-1 flex items-stretch lg:items-start justify-center flex-col relative">
                        <div className='hidden lg:block absolute top-0 right-[-100%] w-full h-full bg-[#F7F7F7] z-[-1]'></div>
                        <SectionTitle><span className='text-[#ED0E19]'>{messages["business.asymmetricalConnection"][lang]}</span></SectionTitle>
                        <p className='text-lg lg:text-[21px]'>
                            {messages["business.asymmetricalConnectionDesc"][lang]}
                        </p>
                    </div>
                </div>
            </Container>

            <Container>
                <div className="flex flex-col lg:flex-row-reverse w-full items-stretch">
                    <Image src='/business-woman1 1.png' alt="asd" width={700} height={700} className='flex-1 w-full max-h-[700px]' />
                    <div className="text-center lg:text-start flex-1 flex flex-col items-stretch">
                        <div className='flex-1 py-[33px]'>
                            <SectionTitle><span className='text-[#ED0E19]'>{messages["business.vpln"][lang]}</span></SectionTitle>
                            <p className='text-lg lg:text-[21px]'>
                                {messages["business.vplnDesc"][lang]}
                            </p>
                        </div>
                        <div className='flex-1 bg-[#F7F7F7] py-[33px] relative'>
                            <div className='hidden lg:block absolute top-0 left-[-100%] w-full h-full bg-[#F7F7F7] z-[-1]'></div>
                            <SectionTitle>{messages["business.colocation"][lang]}</SectionTitle>
                            <p className='text-lg lg:text-[21px]'>
                                {messages["business.colocationDesc"][lang]}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>

            <div className="flex xl:flex-row flex-col xl:items-center w-full px-3 xl:pl-0 2xl:pr-[260px] gap-[70px]">
                <Image src='/woman-with-cup.png' alt='swiatlowod' width={960} height={355} className='max-h-[355px] max-w-[960px] flex-1 w-full' />
                <div className="flex-1 text-center lg:text-start">
                    <SectionTitle><span className='text-[#ED0E19]'>{messages["business.inYourFirmTitlePrimary"][lang]}</span></SectionTitle>
                    <p className='pt-[15px] text-lg lg:text-[21px]'>
                        {messages["business.inYourFirmContent"][lang]}
                    </p>
                </div>
            </div>

        </div>
    )
}
