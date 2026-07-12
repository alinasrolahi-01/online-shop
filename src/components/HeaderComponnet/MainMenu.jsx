import React from 'react'
import { NavLink } from 'react-router'

import { mainMenuListData } from '../../data/mainMenuListData'

const MainMenu = () => {
  return (
    <ul className='flex items-center justify-center gap-12 font-dana text-[14px] text-gray-500 text-xl border-r border-gray-200 pr-10'>
      {mainMenuListData.map((item) => {
        return (
          <li key={item.id}>
            <NavLink  to={item.link} className={({ isActive }) => isActive ? "text-blue-500 underline  underline-offset-10 decoration-2 font-bold " : "text-gray-600"}> {item.title} </NavLink>
          </li>
        )
      })}
    </ul>
  )
}

export default MainMenu