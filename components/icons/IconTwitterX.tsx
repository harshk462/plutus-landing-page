import Image from 'next/image'
import React from 'react'

const IconTwitterX = ({size = 28,className = "invert filter"}:{size?:number,className?:string}) => {
  return (
    <Image src={'/icons/twitter-x.svg'} width={size ?? 28} height={size ?? 28} alt="twitter-x" className={className}/>
  )
}

export default IconTwitterX