import React, { useState } from 'react'
import { HiOutlineFilter } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { BsFillGridFill } from "react-icons/bs";
import { RxRows } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { sortProductData } from '../../../data/sortProductData';


import GridProducts from './GridProducts';
import RowsProducts from './RowsProducts';

const GridRowProducts = ({ activeCategory, products }) => {


  const [isGrid, setIsGrid] = useState(true)
  const [sortProducts, setSortProducts] = useState("default")
  const [isOpen , setIsOpen] = useState(false)





  return (
    <>
      <div className='flex items-center justify-between bg-white rounded-2xl p-3 border border-slate-100 shadow-sm mb-6'>
        <div className=' relative'>
          <div onClick={() => setIsOpen((prev) => !prev)} className='flex items-center group gap-2'>
            <HiOutlineFilter className=' text-gray-400' />
            <span className=' group-hover:text-violet-600 cursor-pointer'>پیش فرض</span>
            <IoIosArrowDown className=' group-hover:text-violet-600 cursor-pointer' />
          </div>

          <div className={`absolute top-full mt-2 right-0 w-40 bg-white rounded-xl shadow-xl border border-slate-100 z-50 py-1 overflow-hidden ${!isOpen ? "opacity-0" : "opacity-100" } transition-all duration-100`}>

            {
              sortProductData.map((item) => (
                <button key={item.id} onClick={() => setSortProducts(item.value)} className={`w-full cursor-pointer text-right px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${sortProducts === item.value ? "text-violet-600 bg-violet-50/50 font-bold" : "text-slate-600 font-medium hover:bg-slate-50"} `}>
                  <span>{item.title}</span>
                  {
                    sortProducts === item.value ? <FaCheck /> : null
                  }
                </button>
              ))
            }
          </div>

        </div>


        <div className='flex items-center gap-2'>
          <span className='text-xs text-slate-400 hidden sm:inline'>نمایش 8 از 12</span>
          <div className='flex gap-1 bg-slate-100 rounded-xl p-1 '>
            <div className={`w-8 h-8 cursor-pointer rounded-lg flex items-center justify-center transition-all ${isGrid ? "bg-white shadow text-indigo-600" : "text-slate-400 hover:text-slate-600"} `} onClick={() => setIsGrid(true)}><BsFillGridFill /></div>
            <div className={`w-8 h-8 cursor-pointer rounded-lg flex items-center justify-center transition-all ${!isGrid ? "bg-white shadow text-indigo-600" : "text-slate-400 hover:text-slate-600"} `} onClick={() => setIsGrid(false)}><RxRows /></div>
          </div>
        </div>
      </div>

      {/* show products Grid/Row */}

      <div>
        {isGrid ? <GridProducts products={products} activeCategory={activeCategory}  sortValue={sortProducts} /> : <RowsProducts products={products} activeCategory={activeCategory}  sortValue={sortProducts} />}
      </div>
    </>


  )
}

export default GridRowProducts