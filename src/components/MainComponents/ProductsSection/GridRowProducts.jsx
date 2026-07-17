import React from 'react'
import { HiOutlineFilter } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";


const GridRowProducts = () => {
  return (
    <div>
        <div>
           <div className='flex items-center group'>
             <HiOutlineFilter className=' text-gray-400' />
            <span className=' group-hover:text-violet-600 cursor-pointer'>پیش فرض</span>
            <IoIosArrowDown className=' group-hover:text-violet-600 cursor-pointer' />
           </div>

        </div>
    </div>
  )
}

export default GridRowProducts