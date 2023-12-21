'use client'

import ButtonText from '@/components/ButtonText'
import CategoryButton from '@/components/portofolio/CategoryButton';
import { OUR_PORTOFOLIO, OUR_PORTOFOLIO_CATEGORY, TECH_STACK } from '@/constants';
import styles from '../portofolioPage.module.css'
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation'
import React, { useState } from 'react'
import Button from '@/components/Button';
import ClientsCard from '@/components/clients/ClientsCard';
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
        <div className={`grid grid-flow-dense grayscale flex-wrap grid-cols-3 gap-10 my-12 p-2 w-auto border border-gray-700/10 rounded-xl bg-gradient-to-b from-white/25 to-gray-700/10 lg:grid-cols-6`}>
            {TECH_STACK.map((item) => (
                    <div className={`text-center border border-gray-700/10 rounded-xl bg-gradient-to-b from-white/25 to-gray-700/10 cursor-pointer`}>
                    <Link href='' className={`flexCenter mt-4 mr-2`}>
                        <Image src={item.logo} alt={item.label} width={item.width} height={0} className='p-2'/>
                    </Link>
                    {item.label && <p className=''>{item.label}</p>}
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