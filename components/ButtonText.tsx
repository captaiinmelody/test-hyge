'use client'

import Image from "next/image"
import React from 'react'

type ButtonTextProps = {
    label: string;
    icon?: string;
    onClick: () => void;
}

const ButtonText: React.FC<ButtonTextProps> = ({label, icon, onClick}) => {
  return (
    <button
    onClick={onClick}
    >
        <div className="flexStart mb-24">
            {icon && <Image src={icon} alt="back" width={24} height={24} className="mr-2"/>}
            {label}
        </div>
    </button>
  )
}

export default ButtonText