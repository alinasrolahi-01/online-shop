import React from 'react'

import { featuresData } from '../../data/featuresData'

const FeaturesBox = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 wrapper py-14' >
        {
            featuresData.map((item) => (
                <div key={item.id} className='group flex flex-col items-center text-center p-6 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50/80 transition-all cursor-default'>
                <div  className='w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform duration-300 bg-indigo-100'>{item.icon}</div>
                <p className="font-black text-slate-800 text-sm" x-text="f.title">{item.title}</p>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed" x-text="f.desc">{item.description}</p>
                </div>
            ))
        }
    </div>
  )
}

export default FeaturesBox