import React from 'react'

const SectionHeader = ({ badge, title , description , align = "center"}) => {
  return (
    <div className={`text-${align}`}>
        <p class="text-indigo-600 text-xs font-black uppercase tracking-widest mb-1 ">{badge}</p>
        <h2 class="text-3xl font-black text-slate-800">{title}</h2>
        <p class="text-slate-400 text-sm mt-1">{description}</p>
    </div>
  )
}

export default SectionHeader