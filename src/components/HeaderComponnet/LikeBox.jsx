import React from 'react'
import { GoHeart } from "react-icons/go";



const LikeBox = () => {
  return (
    <div className='w-[57px] h-[57px] bg-[#FEF2F2] hover:bg-[#FEE2E2] flex items-center justify-center rounded-xl cursor-pointer group relative'>
        <GoHeart className="text-[25px] group-hover:text-[28px] text-[#ff0000] transition-all duration-100" />
        <div className="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center absolute right-0 bottom-0 translate-x-[4px] translate-y-[4px] text-white text-[10px]">
            2
        </div>
    </div>
  )
}

export default LikeBox