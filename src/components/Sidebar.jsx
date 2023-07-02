import React from 'react'
import Tabs from './Tabs'

const Sidebar = () => {
  return (
    <div className='w-[30%] bg-green-300 bg-img rounded-xl p-8'>
        <Tabs classes={'sub-title'} num={1} text={"YOUR INFO"}/>
        <Tabs classes={'sub-title'} num={2} text={"SELECT PLAN"}/>
        <Tabs classes={'sub-title'} num={3} text={"ADD-ONS"}/>
        <Tabs classes={'sub-title'} num={4} text={"SUMMARY"}/>
    </div>
  )
}

export default Sidebar