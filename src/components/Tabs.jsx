import React from 'react'
import Title from './Title'

export default function Tabs({num, text}) {
  return (
        <div className='flex gap-3 mb-5 cursor-pointer tab'>
            <h3 className='w-8 h-8 border rounded-full flex items-center justify-center text-white'>{num}</h3>
            <div>
                <h4 className={`text-xs text-white`}>STEP {num}</h4>
                <Title classes={'sub-title'} text={text}/>
            </div>
        </div>
  )
}
