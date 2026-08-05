import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import HeroSectionDetails from '../../components/HeroSection/HeroSectionDetails'
import FeaturesBox from '../../components/common/FeaturesBox'
import CategorySelect from '../../components/MainComponents/CategorySelect'
import DiscountBoxTime from '../../components/MainComponents/DiscountBoxTime'
import ProductsSection from '../../components/MainComponents/ProductsSection/ProductsSection'
import WhySilkySection from '../../components/MainComponents/WhySilkySection/WhySilkySection'
import BrandTitle from '../../components/MainComponents/BrandTitle/BrandTitle'
import CommentsCustomer from '../../components/MainComponents/CommentsCustomer/CommentsCustomer'
import DiscountEmailBox from '../../components/MainComponents/DiscountEmailBox/DiscountEmailBox'
import WhatAreYouNeed from '../../components/MainComponents/WhatAreYouNeed/WhatAreYouNeed'




const Home = () => {
  return (
   <>
    <HeroSection>
      <HeroSectionDetails/>
    </HeroSection>

    
    <FeaturesBox/>

    <CategorySelect/>

    <DiscountBoxTime/>

    <ProductsSection/>

    <WhySilkySection/>

    <BrandTitle/>

    <CommentsCustomer/>

    <DiscountEmailBox/>

    <WhatAreYouNeed/>
    
   </>
  )
}

export default Home