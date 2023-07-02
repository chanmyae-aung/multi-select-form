import React from 'react'

export default function Button({text, onclick}) {
  return (
    <button onClick={onclick} className='px-5 py-3 rounded bg-slate-800 text-white'>
       {text} 
    </button>
  )
}
