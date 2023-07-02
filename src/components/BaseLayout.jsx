import React from 'react'

export default function BaseLayout({children}) {
  return (
    <div className='p-3 flex w-[65%] bg-white h-[550px] rounded-xl shadow-xl'>
        {children}
    </div>
  )
}
