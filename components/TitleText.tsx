import Link from 'next/link'
import React from 'react'

const TitleText = ({href, titleDefault, titleColor}: {href: string, titleDefault: string, titleColor: string}) => {
  return (
    <Link href={href} className="my-12">
        <p className='medium-48'>{titleDefault} <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-700 to-blue-500'> {titleColor} </span></p>
    </Link>
  )
}

export default TitleText