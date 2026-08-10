import React from 'react'
import BannerShop from '../../components/Shop/BannerShop'
import NavInfo from '../../components/Shop/NavInfo'
import CategoryFilter from '../../components/Shop/CategoryFilter'

const Shop = () => {
  return (
    <div>
      <BannerShop/>
      <NavInfo/>
      <CategoryFilter/>
    </div>
  )
}

export default Shop