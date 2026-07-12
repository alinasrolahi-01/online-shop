import React from 'react'
import { NavLink } from 'react-router'

import { GoArrowLeft } from "react-icons/go";


const SeeAllBtn = () => {
  return (
    <NavLink to="#">
      <button className="bg-white/20 hover:bg-white/30 text-white text-[13px] px-4 py-1.5 rounded-full transition-colors flex items-center gap-2 cursor-pointer">
       مشاهده همه
       <GoArrowLeft />
      </button>
    </NavLink>
  )
}

export default SeeAllBtn