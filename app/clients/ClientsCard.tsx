'use client'

import React from 'react'
import  Link  from 'next/link';
import Image from 'next/image';

type ClientCardProps = {
    label?: string;
    logo: string;
    alt: string;
    width?: number;
    height?: number;
    colspan: string;
    href: string;
}

const ClientsCard: React.FC<ClientCardProps> = ({href, label, logo, alt, width, height, colspan}) => {
  return (
    <Link href={href} className={`flexCenter mt-4 mr-2 border border-gray-700/10 rounded-xl bg-gradient-to-b from-white/25 to-gray-700/10 cursor-pointer ${colspan}`}>
        {label && <p></p>}
        <Image src={logo} alt={alt} width={300} height={0} className='p-2 max-h-32'/>
    </Link>
  )
}

export default ClientsCard

