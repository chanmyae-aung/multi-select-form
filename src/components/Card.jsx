import React from 'react'

export default function Card({icon, text, price}) {
  return (
    <div className='p-3 rounded-lg border basis-1/3'>
        <img src={icon} alt="" className='mb-10'/>
        <div className='text-slate-500'>
            <h4>{text}</h4>
            <p>{price}</p>
        </div>
    </div>
  )
}
