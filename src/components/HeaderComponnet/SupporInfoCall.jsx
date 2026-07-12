import React from 'react'

import { IoCallOutline } from "react-icons/io5";


const SupporInfoCall = () => {
  return (
    <div className="flex items-center justify-between gap-3 font-dana">

      <div className="bg-[#F3F4F6] text-gray-500 rounded-full p-2 text-xl cursor-pointer">
        <IoCallOutline />
      </div>

      <div className="text-[12px] text-gray-500 hidden lg:inline-block ">
        <p>پشتیبانی</p>
        <p className="font-bold">021-12345678</p>
      </div>

    </div>
  )
}

export default SupporInfoCall