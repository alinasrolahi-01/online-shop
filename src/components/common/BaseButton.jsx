import React from 'react'

const BaseButton = ({ title, icon , className , onClick = null }) => {
  return (
      
        <button className={`flex items-center justify-center gap-2 ${className}`} onClick={onClick}>
            {icon}
            {title && <span className='xl:text-lg text-[14px] font-dana font-bold'>{title}</span>}
        </button>
  )
}

export default BaseButton