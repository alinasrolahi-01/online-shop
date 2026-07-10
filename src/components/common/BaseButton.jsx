import React from 'react'

const BaseButton = ({ title, icon , className }) => {
  return (
      
        <button className={`flex items-center justify-center gap-2 ${className}`}>
            {icon}
            <span className='text-xl font-dana font-bold'>{title}</span>
        </button>
  )
}

export default BaseButton