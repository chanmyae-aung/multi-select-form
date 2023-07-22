import React from 'react'

export default function Card({icon, text, priceString, promotion}) {
  return (
    <div className='p-3 flex items-start gap-5 w-full h-fit card rounded-lg border lg:w-[33.333%]'>
        <img src={icon} alt="" className='mb-10'/>
        <div className='text-slate-500'>
            <h4>{text}</h4>
            <p>{priceString}</p>
            <p>{promotion}</p>
        </div>
    </div>
  )
}
