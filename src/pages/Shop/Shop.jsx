import React from 'react'
import BannerShop from '../../components/Shop/BannerShop'
import NavInfo from '../../components/Shop/NavInfo'
import CategoryFilter from '../../components/Shop/CategoryFilter'
import FilterSidebar from '../../components/Shop/FilterSidebar'
import ProductsToolbar from '../../components/Shop/ProductsToolbar'
import ProductGridView from '../../components/Shop/ProductGridView'

const Shop = () => {
  return (
    <div className=' wrapper'>
      <BannerShop/>
      <NavInfo/>
      <CategoryFilter/>
      <div className='flex gap-8'>
         <FilterSidebar/>
         <div className='w-full'>
          <ProductsToolbar/>
          <ProductGridView/>
         </div>
      </div>
    </div>
  )
}

export default Shop