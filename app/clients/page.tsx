'use client'

import ButtonText from '@/components/ButtonText'
import TitleText from '@/components/TitleText'
import ClientsCard from '@/components/clients/ClientsCard'
import { OUR_CLIENTS } from '@/constants'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Clients: React.FC = () => {
    const router = useRouter()
    const pathname = usePathname()
  return (
    <div>
        <div className='mt-32'>
            {pathname !== '/' && <ButtonText label='Go Back' icon='/ph_arrow-left.svg' onClick={router.back} />}
            <TitleText href='/clients' titleDefault='Our' titleColor='Clients' description='Here are just few of the clients we’ve had the privilege to serve:' />
        </div>
        <div className="grid grid-flow-row-dense grid-cols-4 lg:grid-cols-7">
            {OUR_CLIENTS.map((clients) => (
                <ClientsCard key={clients.logo} href={clients.href} alt={clients.label} logo={clients.logo} colspan={clients.colSpan}/>
            ))}
        </div>
    </div>
  )
}

export default Clients