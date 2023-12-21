import Link from 'next/link'
import React from 'react'

const TitleText = ({href, titleDefault, titleColor, description}: {href: string, titleDefault: string, titleColor: string, description: string}) => {
  return (
    <Link href={href} className="mt-12">
        <p className='medium-48'>{titleDefault} <span className='text-blue-500'> {titleColor} </span></p>
        <p className='py-8 w-2/3'> {description} </p>
    </Link>
  )
}

export default TitleText