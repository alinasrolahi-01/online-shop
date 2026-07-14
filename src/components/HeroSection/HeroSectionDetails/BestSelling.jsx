import React from 'react'
import asusLaptop from '../../../assets/images/asus laptop.webp'


const BestSelling = () => {
    return (
        <div className='absolute top-1/2 right-10 -translate-y-1/2 w-[280px] bg-white rounded-3xl shadow-2xl overflow-hidden float border border-slate-100 p-4'>
            <img src={asusLaptop} className='w-full h-48 object-cover' />
            <p className="text-[10px] text-indigo-500 font-black uppercase tracking-wider">لپ‌تاپ — ASUS</p>
            <p className="font-black text-slate-800 text-sm mt-0.5 leading-snug">ASUS ZenBook 14X OLED</p>
            <div class="flex items-end justify-between mt-3">
                <div>
                    <p class="text-xs text-slate-400 line-through">۵۲,۰۰۰,۰۰۰</p>
                    <p class="font-black text-indigo-600 text-base">۴۱,۶۰۰,۰۰۰ T</p>
                </div>
                <button class="bg-indigo-600 text-white text-xs font-black px-3.5 py-2 rounded-xl hover:bg-indigo-700 active:scale-95 cursor-pointer transition-all shine">افزودن</button>
        </div>
    </div >
  )
}

export default BestSelling