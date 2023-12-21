'use client'

import ButtonText from '@/components/ButtonText'
import CategoryButton from '@/app/portofolio/CategoryButton';
import { OUR_PORTOFOLIO, OUR_PORTOFOLIO_CATEGORY, TECH_STACK } from '@/constants';
import styles from '../portofolioPage.module.css'
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation'
import React, { useState } from 'react'
import Button from '@/components/Button';
import Link from 'next/link';

const PortofolioDetail: React.FC = () => {
    const router = useRouter();
    const params = useParams();
    const id = params.id;

    const selectedPortofolio = OUR_PORTOFOLIO.find((item) => String(item.id) === id);
  return (
    <div>
        <ButtonText label='Go Back' icon='/ph_arrow-left.svg' onClick={router.back}/>
        <Image src={selectedPortofolio!.thumbnail} alt="Portfolio Thumbnail" width={0} height={0} sizes="100vw" className="rounded-xl w-full h-auto" />
        <div className='flexStart mt-10'>
            <p className='regular-20 mr-24'>Our role</p>
            {selectedPortofolio?.category
            .map((cat) => (
                <CategoryButton category={cat.name} href={cat.href} variant={styles.btn_category_inside_card} />
            ))}  
        </div>
        
        {heading_2('Tech Stack')}
        <div className="flex flex-wrap items-center justify-between gap-[24px_24px] p-[8px] relative bg-white rounded-[16px] border-[0.5px] border-solid border-[#ffffff33] [background:linear-gradient(180deg,rgba(57,116,220,0)_0%,rgba(2,107,236,0.1)_37.58%,rgba(9,110,177,0.1)_74.56%,rgba(31,164,217,0.1)_100%)] mb-12">
            {TECH_STACK.map((item) => (
                <div className="flex flex-col grayscale w-[151.5px] h-[120px] items-center justify-center gap-[16px] px-[24px] py-[16px] relative rounded-[16px] border border-solid border-[#ffffff33] [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(255,255,255,0.05)_100%)]">
                    <img className="relative w-[49.14px] h-[48px]" alt={item.label} src={item.logo} />
                    <div className="relative w-fit [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-neutral-30 text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                    {item.label}
                    </div>
                </div>
            ))}
        </div>
        <Button type='button' title='Visit Site' variant='bg-blue-500' /> 
        
        {heading_2(selectedPortofolio!.title)}
        {paragraph(selectedPortofolio!.description)}

        {heading_2('A Sneak Peek')}
        {paragraph(`Here's a sneak peek what we do with ${selectedPortofolio!.title}`)}
        <div className='fill w-full' 
        style={{
            backgroundImage: `url('/bg-thumbnail.png')`,
            height: "640px",
        }}>
            <Image src={selectedPortofolio!.thumbnail} alt="Portfolio Thumbnail" width={0} height={0} sizes="100vw" className="rounded-xl w-full h-auto p-20"/>
        </div>

        {heading_2('Problem Statement')}
        {paragraph(selectedPortofolio!.problemStatement)}

        {heading_2('What We Did')}
        {paragraph(selectedPortofolio!.jobDesc)}

    </div>
  )

  
    function heading_2(content: string) {
        return <h1 className='medium-32 my-12'>{content}</h1>;
    }

    function paragraph(content: string) {
        return <p className='regular-14 my-12 text-gray-400'>{content}</p>;
    }
}

export default PortofolioDetail