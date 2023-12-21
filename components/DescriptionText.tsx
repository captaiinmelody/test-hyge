import React from 'react'

const DescriptionText = ({description}: {description: string}) => {
  return (
    <div className="text-stone-300 leading-loose">{description}</div>
  )
}

export default DescriptionText