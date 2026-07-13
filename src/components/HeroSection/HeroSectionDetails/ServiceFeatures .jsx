import React from 'react'

import { serviceFeaturesData } from '../../../data/ServicesData'

const ServiceFeatures  = () => {
  return (
    <div className='flex flex-wrap gap-2'>
      {
        serviceFeaturesData.map((item) => (
          <div key={item.id} className='flex items-center gap-2 bg-white/70 border border-slate-100 px-3.5 py-2 rounded-xl font-dana '>
           <span className='text-lg'>{item.icon}</span> 
            <span className='text-xs font-bold text-slate-600'>{item.title}</span>
          </div>
        ))
      }
    </div>
  )
}

export default ServiceFeatures 