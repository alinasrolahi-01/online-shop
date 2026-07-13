import React from 'react'

import { FaBasketShopping } from "react-icons/fa6";


import BaseButton from "../../common/BaseButton"




const HeroButtons = () => {
  return (
  <div className="flex items-center flex-wrap gap-4">
        <BaseButton title="همین الان خرید کن" icon={<FaBasketShopping />} className="flex items-center cursor-pointer gap-2 bg-gradient-to-l from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-black hover:shadow-2xl hover:shadow-indigo-300 transition-all active:scale-95 shine text-base" />
    <BaseButton title={"⚡ پیشنهادات لحظه‌ای"} className={"flex items-center cursor-pointer gap-2 bg-white text-slate-700 px-8 py-4 rounded-2xl font-black border-2 border-slate-200 hover:border-indigo-400 hover:text-indigo-600 hover:shadow-xl transition-all active:scale-95 g-border text-base"} />
  </div>

  )
}

export default HeroButtons