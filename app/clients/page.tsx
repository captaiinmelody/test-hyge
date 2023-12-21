'use client'

import ButtonText from '@/components/ButtonText'
import TitleText from '@/components/TitleText'
import { OUR_CLIENTS } from '@/constants'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react';
import DescriptionText from '@/components/DescriptionText'
import Image from 'next/image'
import Link from 'next/link'

const Clients: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
  return (
    <div>
        <div className='mt-32 mb-12'>
            {pathname !== '/' && <ButtonText label='Go Back' icon='/ph_arrow-left.svg' onClick={router.back} />}
            <TitleText href='/clients' titleDefault='Our' titleColor='Clients'/>
            <DescriptionText description='Here are just few of the clients we’ve had the privilege to serve' />
        </div>
        
        {OUR_CLIENTS.map((client) => (
            <Link href={client.href} key={client.id} className="inline-flex h-16 mr-2 mb-2 flex-col items-center justify-center p-4 rounded-2xl border border-solid border-gray-600/50 bg-gradient-to-t from-black/5 to-white/10">
                <Image className={`relative ${client.id !== 5 && 'filter grayscale invert'}`} height={0} width={client.width} alt="Frame" src={client.logo} />
            </Link>
        ))}
    </div>
  )
}

export default Clients