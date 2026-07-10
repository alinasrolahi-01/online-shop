import React from 'react'

import { IoIosNotificationsOutline } from "react-icons/io";


const NotficationBox = () => {
  return (
        <div className='w-[60px] h-[60px] bg-[#6294ff4f] hover:bg-[#6294ff4f] flex items-center justify-center rounded-xl cursor-pointer group relative transition-all duration-300'>
            <IoIosNotificationsOutline className="text-[30px] group-hover:text-[33px] text-[#4681ff]  transition-all duration-200"/>
            <div className="bg-blue-600 rounded-full w-3 h-3 flex items-center justify-center absolute right-2 top-2  text-white ">
                
            </div>
        </div>
  )
}

export default NotficationBox