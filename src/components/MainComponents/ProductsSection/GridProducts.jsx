import React from 'react'




const GridProducts = ({activeCategory , products , sortValue}) => {

    const filteredProducts = activeCategory !== "همه" ? products.filter(item => item.category === activeCategory) : products.map((item) => item.products)
    const sortProducts = [...filteredProducts].sort((a , b) => {
      switch(sortValue) {
        case "cheap" :
          return a.price - b.price ;

        case "expensive" :
          return b.price - a.price ;

        default:
          return 0
      }
    })

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {
           console.log(sortProducts)
           
        }
    </div>
  )
}

export default GridProducts