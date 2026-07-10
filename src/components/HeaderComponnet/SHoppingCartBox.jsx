import React from 'react'

import { BsBasket3 } from "react-icons/bs";


const SHoppingCartBox = () => {
  return (
    <div className='w-[60px] h-[60px] bg-[#6294ff4f] hover:bg-[#6294ff4f] flex items-center justify-center rounded-xl cursor-pointer group relative transition-all duration-300'>
      <BsBasket3 className="text-[27px] group-hover:text-[30px] text-[#4681ff]  transition-all duration-200" />
      <div className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center absolute right-0 bottom-0 translate-x-[4px] translate-y-[4px] text-white text-[14px]">
            6
        </div>
    </div>
  )
}

export default SHoppingCartBox