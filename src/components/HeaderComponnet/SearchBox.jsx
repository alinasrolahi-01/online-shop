import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
  return (
    <div className='w-[500px] h-[56px] border-[1px] border-[#E7EAF0] rounded-2xl py-3 flex items-center px-4 gap-1 font-plus-sans focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200'>
        <CiSearch className="text-4xl text-[#818181]"/>
        <input type="search" placeholder="جستجو لپتاپ، لباس، اکسسوری..." className='outline-none w-full text-[#181E25]'></input>
    </div>
  )
}

export default SearchBox