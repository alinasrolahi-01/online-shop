import React from 'react'

import { BsBasket3 } from "react-icons/bs";


const SHoppingCartBox = () => {
  return (
    <div className='md:w-[60px] md:h-[60px] w-[44px] h-[44px] bg-[#6294ff4f] hover:bg-[#6294ff4f] flex items-center justify-center rounded-xl cursor-pointer group relative transition-all duration-300'>
      <BsBasket3 className="text-[27px] group-hover:text-[30px] text-[#4681ff]  transition-all duration-200" />
      <div className="bg-blue-600 rounded-full md:w-6 md:h-6 w-5 h-5 flex items-center justify-center absolute right-0 bottom-0 translate-x-[4px] translate-y-[4px] text-white text-[11px] md:text-[14px]">
            6
        </div>
    </div>
  )
}

export default SHoppingCartBox