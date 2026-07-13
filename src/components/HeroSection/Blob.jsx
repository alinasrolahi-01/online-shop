import React from 'react'

const Blob = () => {
  return (
    <>
      <div className="absolute top-24 right-8 w-80 h-80 bg-indigo-200/20 blob pointer-events-none"></div>
        <div className="absolute top-100 left-8 w-72 h-72 bg-purple-200/20 blob pointer-events-none"
            ></div>
        <div className="absolute top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-200/15 blob pointer-events-none"
            ></div>
    </>
  )
}

export default Blob