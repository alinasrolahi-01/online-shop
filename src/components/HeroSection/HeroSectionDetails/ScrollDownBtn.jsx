import React from 'react'

import { IoIosArrowDown } from "react-icons/io";


const ScrollDownBtn = () => {
  return (
    <div className='absolute bottom-20 left-1/2 -translate-x-1/2 text-slate-400 bounce-y text-center flex flex-col items-center'>
        <IoIosArrowDown className='text-2xl'/>
         <p className='text-xs mt-1 font-semibold'>اسکرول نیست</p>
    </div>
  )
}

export default ScrollDownBtn