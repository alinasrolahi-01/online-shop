import React from 'react'
import { GoHeart } from "react-icons/go";



const LikeBox = () => {
  return (
    <div className='w-[54px] h-[54px] bg-[#FEF2F2] hover:bg-[#FEE2E2] flex items-center justify-center rounded-xl cursor-pointer group relative'>
        <GoHeart className="text-[22px] group-hover:text-2xl text-[#ff0000]" />
        <div className="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center absolute right-0 bottom-0 translate-x-[5px] translate-y-[5px] text-white text-[10px]">
            2
        </div>
    </div>
  )
}

export default LikeBox