import React, { useEffect, useState } from 'react'
import SectionHeader from '../../common/SectionHeader'
import { productsData } from '../../../data/productsData'
import GridRowProducts from './GridRowProducts'


const ProductsSection = () => {

  const [activeCategory, setActiveCategory] = useState("همه")
  const [products , setProducts] = useState(productsData)
 
  
  
  return (
    <div className='wrapper py-[80px]'>

      <SectionHeader 
        badge={"محصولات"} 
        title={"پر فروش ترین ها"} 
        description={"12 محصول موجود"} 
        align='right'
      />

      <div className='flex items-center gap-3 flex-wrap mt-[32px]'>

        <button
          onClick={() => setActiveCategory("همه")}
          className={`
            px-4 py-2 rounded-xl text-sm font-bold transition-all border
            ${
              activeCategory === "همه"
              ? "bg-indigo-500 text-white border-indigo-500"
              : "bg-white text-slate-500 border-slate-200"
            }
          `}
        >
          همه
        </button>


        {
          productsData.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveCategory(item.category)}
              className={`
                px-4 py-2 rounded-xl text-sm font-bold transition-all border
                ${
                  activeCategory === item.category
                  ? "bg-indigo-500 text-white border-indigo-500"
                  : "bg-white text-slate-500 border-slate-200"
                }
              `}
            >
              {item.category}
            </button>
          ))
        }

      </div>

      <div>
         <GridRowProducts/>
      </div>

    </div>
  )
}

export default ProductsSection