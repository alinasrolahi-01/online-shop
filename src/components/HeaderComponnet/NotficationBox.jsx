import React from 'react'

import { IoIosNotificationsOutline } from "react-icons/io";


const NotficationBox = () => {
  return (
        <div className='md:w-[60px] md:h-[60px] w-[44px] h-[44px] bg-[#6294ff4f] hover:bg-[#6294ff4f] hidden md:flex items-center justify-center rounded-xl cursor-pointer group relative transition-all duration-300'>
            <IoIosNotificationsOutline className="text-[30px] group-hover:text-[33px] text-[#4681ff]  transition-all duration-200"/>
            <div className="bg-blue-600 rounded-full lg:w-3 lg:h-3 md:w-2 md:h-2 flex items-center justify-center absolute right-2 top-2  text-white ">
                
            </div>
        </div>
  )
}

export default NotficationBox