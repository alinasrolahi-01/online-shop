import React from 'react'

const OverLay = ({ onClick }) => {
  return (
     <div 
      onClick={onClick}
      className="fixed inset-0 bg-black/50 z-40 md:hidden"
    />
  )
}

export default OverLay