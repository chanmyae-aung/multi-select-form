import React from 'react'

export default function BaseLayout({children}) {
  return (
    <div className='lg:p-3 lg:flex w-[65%] bg-white h-fit lg:h-[550px] lg:rounded-xl shadow-xl'>
        {children}
    </div>
  )
}
