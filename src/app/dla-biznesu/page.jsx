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
                <SectionTitle><span className='text-[#ED0E19]'>{messages["business.fastConnectionPrimary"][lang]}</span> {messages["business.fastConnectionSecondary"][lang]}</SectionTitle>
                <p className='max-w-[1120px] text-lg lg:text-[21px] text-[#446D73] pb-[33px]'>
                    {messages["business.ourOffer"][lang]}
                </p>
            </Container>

            <div className="flex xl:flex-row flex-col w-full px-3 xl:pl-0 2xl:pr-[260px] gap-[70px]">
                <Image src='/swiatlowod.png' alt='swiatlowod' width={960} height={545} className='max-h-[550px]' />
                <div className="">
                    <SectionTitle><span className='text-[#ED0E19]'>{messages["business.inYourFirmTitlePrimary"][lang]}</span> {messages["business.inYourFirmTitleSecondary"][lang]}</SectionTitle>
                    <p className='pt-[15px] text-lg lg:text-[21px] text-[#446D73]'>
                        <b>
                            {messages["business.inYourFirmContentBold"][lang]}
                        </b>
                        <br /><br />
                        {messages["business.inYourFirmContent"][lang]}
                    </p>
                </div>
            </div>

            <Container className={"pt-11 pb-16"}>
                <SectionTitle className={"pb-5"}><span className='text-[#ED0E19] '>{messages["business.voiceServices.title"][lang]}</span></SectionTitle>

                <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-[36px]">
                    <ToggleButton>{messages["business.voiceServices.telephony"][lang]}</ToggleButton>
                    <ToggleButton>{messages["business.voiceServices.internet"][lang]}</ToggleButton>
                    <ToggleButton>{messages["business.voiceServices.telephonyISDN"][lang]}</ToggleButton>
                    <ToggleButton>{messages["business.voiceServices.asymmehricalConnection"][lang]}</ToggleButton>
                    <ToggleButton>{messages["business.voiceServices.toolsAndSystems"][lang]}</ToggleButton>
                    <ToggleButton>{messages["business.voiceServices.symmetricalConnection"][lang]}</ToggleButton>
                    <ToggleButton>{messages["business.voiceServices.PABX"][lang]}</ToggleButton>
                    <ToggleButton>{messages["business.voiceServices.publicIPs"][lang]}</ToggleButton>
                    <ToggleButton>{messages["business.voiceServices.routingBGP"][lang]}</ToggleButton>
                </div>
            </Container>
            <Container className={"pt-11 pb-16 bg-[#F7F7F7]"}>
                <SectionTitle className={"pb-5"}><span className='text-[#ED0E19]'>{messages["business.network.title"][lang]}</span></SectionTitle>

                <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-[36px]">
                    <ToggleButton>{messages["business.network.backboneNetwork"][lang]}</ToggleButton>
                    <ToggleButton>{messages["business.network.fibers"][lang]}</ToggleButton>
                    <ToggleButton>{messages["business.network.dark"][lang]}</ToggleButton>
                    <ToggleButton>{messages["business.network.copperPairs"][lang]}</ToggleButton>
                    <ToggleButton>{messages["business.network.richOffer"][lang]}</ToggleButton>
                    <ToggleButton>{messages["business.network.tv"][lang]}</ToggleButton>
                    <ToggleButton className={"xl:col-span-2"}>{messages["business.network.transmission"][lang]}</ToggleButton>
                </div>
            </Container>
            <Container className={"pt-11 pb-16"}>
                <SectionTitle className={"pb-5"}><span className='text-[#ED0E19]'>{messages["business.inBusiness.titlePrimary"][lang]}</span> {messages["business.inBusiness.titleSecondary"][lang]}</SectionTitle>

                <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-[36px]">
                    <ToggleButton>{messages["business.inBusiness.constantAccess"][lang]}</ToggleButton>
                    <ToggleButton>{messages["business.inBusiness.warranty"][lang]}</ToggleButton>
                    <ToggleButton>{messages["business.inBusiness.noLimits"][lang]}</ToggleButton>
                    <ToggleButton>{messages["business.inBusiness.noFailures"][lang]}</ToggleButton>
                    <ToggleButton>{messages["business.inBusiness.ipAddresses"][lang]}</ToggleButton>
                    <ToggleButton>{messages["business.inBusiness.proffessional"][lang]}</ToggleButton>
                    <ToggleButton>{messages["business.inBusiness.redundant"][lang]}</ToggleButton>
                    <ToggleButton>{messages["business.inBusiness.possibility"][lang]}</ToggleButton>
                </div>
            </Container>


            <div className="flex flex-col xl:flex-row-reverse w-full px-3 xl:pr-0 2xl:pl-[260px] gap-[70px]">
                <Image src='/internet-mobilny.png' alt='internet-mobilny' width={960} height={545} className='max-h-[550px]' />
                <div className="">
                    <SectionTitle><span className='text-[#ED0E19]'>{messages["business.mobileInternet.titlePrimary"][lang]}</span> {messages["business.mobileInternet.titleSecondary"][lang]}</SectionTitle>
                    <p className='pt-[15px] text-lg lg:text-[21px] text-[#446D73]'>
                        <b>
                            {messages["business.mobileInternet.boldContent"][lang]}                        </b>
                        <br /><br />
                        {messages["business.mobileInternet.content"][lang]}                    </p>
                </div>
            </div>


            <div className="flex flex-col xl:flex-row w-full px-3 xl:pl-0 2xl:pr-[260px] pt-11 gap-[70px]">
                <Image src='/swiatlowod.png' alt='swiatlowod' width={960} height={545} className='max-h-[550px]' />
                <div className="">
                    <SectionTitle><span className='text-[#ED0E19]'>{messages["business.radiolines.titlePrimary"][lang]}</span>{messages["business.radiolines.titleSecondary"][lang]}</SectionTitle>
                    <p className='pt-[15px] text-lg lg:text-[21px] text-[#446D73]'>
                        <b>
                            {messages["business.radiolines.boldContent"][lang]}
                        </b>
                        <br /><br />
                        {messages["business.radiolines.content"][lang]}
                    </p>
                </div>
            </div>


            <div className="flex flex-col xl:flex-row-reverse pt-11 w-full px-3 xl:pr-0 2xl:pl-[260px] gap-[70px]">
                <Image src='/VPLN.png' alt='VPLN' width={960} height={545} className='max-h-[550px]' />
                <div className="">
                    <SectionTitle><span className='text-[#ED0E19]'>{messages["business.vpln.titlePrimary"][lang]}</span></SectionTitle>
                    <p className='pt-[15px] text-lg lg:text-[21px] text-[#446D73]'>
                        <b>
                            {messages["business.vpln.boldContent"][lang]}
                        </b>
                        <br /><br />
                        {messages["business.vpln.content"][lang]}
                        <br /><br />
                        {messages["business.vpln.content2"][lang]}
                    </p>
                </div>
            </div>


            <div className="flex flex-col xl:flex-row w-full px-3 xl:pl-0 2xl:pr-[260px] pt-11 gap-[70px]">
                <Image src='/kolokacja.png' alt='kolokacja' width={960} height={545} className='max-h-[550px]' />
                <div className="">
                    <SectionTitle><span className='text-[#ED0E19]'>{messages["business.colocation.titlePrimary"][lang]}</span></SectionTitle>
                    <p className='pt-[15px] text-lg lg:text-[21px] text-[#446D73]'>
                        <b>
                            {messages["business.colocation.boldContent"][lang]}
                        </b>
                        <br /><br />
                        {messages["business.colocation.content"][lang]}
                    </p>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row-reverse pt-11 w-full px-3 xl:pr-0 2xl:pl-[260px] gap-[70px]">
                <Image src='/Cloud.png' alt='Cloud' width={960} height={545} className='max-h-[550px]' />
                <div className="">
                    <SectionTitle><span className='text-[#ED0E19]'>{messages["business.cloud.titlePrimary"][lang]}</span></SectionTitle>
                    <p className='pt-[15px] text-lg lg:text-[21px] text-[#446D73]'>
                        <b>
                            {messages["business.cloud.boldContent"][lang]}
                        </b>
                        <br /><br />
                        {messages["business.cloud.content"][lang]}
                    </p>
                </div>
            </div>


            <div className="flex flex-col xl:flex-row w-full px-3 xl:pl-0 2xl:pr-[260px] pt-11 gap-[70px]">
                <Image src='/telefonia.png' alt='telefonia' width={960} height={545} className='max-h-[550px]' />
                <div className="">
                    <SectionTitle><span className='text-[#ED0E19]'>{messages["business.telephony.titlePrimary"][lang]}</span> {messages["business.telephony.titleSecondary"][lang]}</SectionTitle>
                    <p className='pt-[15px] text-lg lg:text-[21px] text-[#446D73]'>
                        <b>
                            {messages["business.telephony.boldContent"][lang]}
                        </b>
                        <br /><br />
                        {messages["business.telephony.content"][lang]}
                    </p>
                </div>
            </div>


            <div className="flex flex-col xl:flex-row-reverse pt-11 w-full px-3 xl:pr-0 2xl:pl-[260px] gap-[70px]">
                <Image src='/Cloud.png' alt='Cloud' width={960} height={545} className='max-h-[550px]' />
                <div className="">
                    <SectionTitle><span className='text-[#ED0E19]'>{messages["business.backup.titlePrimary"][lang]}</span></SectionTitle>
                    <p className='pt-[15px] text-lg lg:text-[21px] text-[#446D73]'>
                        <b>
                            {messages["business.backup.boldContent"][lang]}
                        </b>
                        <br /><br />
                        {messages["business.backup.content"][lang]}
                    </p>
                </div>
            </div>


            <AboutUs showBadge={false} content={content} />
        </div>
    )
}
