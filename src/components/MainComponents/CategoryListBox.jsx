import React from 'react'
import { NavLink } from 'react-router'

const CategoryListBox = ({ item }) => {
  return (
    <NavLink
      to={item.link}
      className={({ isActive }) =>
        `
        flex flex-col items-center gap-2 p-4 rounded-2xl transition-all group bg-white
        ${
          isActive
            ? "ring-1 ring-indigo-500 shadow-md shadow-indigo-100"
            : "border border-slate-200"
        }
        `
      }
    >
      <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
        {item.icon}
      </div>

      <p className="text-xs font-black text-slate-700">
        {item.title}
      </p>

      <p className="text-[10px] text-slate-400">
        {item.products} کالا
      </p>
    </NavLink>
  )
}

export default CategoryListBox