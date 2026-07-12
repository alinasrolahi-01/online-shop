import React from 'react'

import CategoryBox from '../common/CategoryBox'

import { productCategories } from '../../data/productCategoryData'

const CategoryMenuItems  = () => {
  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
        {productCategories.map((category) => (
           <CategoryBox key={category.id} {...category}/>
        ))}
    </div>
  )
}

export default CategoryMenuItems 