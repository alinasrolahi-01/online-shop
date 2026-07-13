import React from 'react'

const Stats = ({title , desc}) => {
  return (
    <div className=' font-dana'>
        <p className=' text-3xl  text-slate-800 font-extrabold'>{desc}</p>
        <span className='text-xs text-slate-400 font-semibold mt-0.5'>{title}</span>
    </div>
  )
}

export default Stats