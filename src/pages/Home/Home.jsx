import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import HeroSectionDetails from '../../components/HeroSection/HeroSectionDetails'
import FeaturesBox from '../../components/common/FeaturesBox'
import CategorySelect from '../../components/MainComponents/CategorySelect'
import DiscountBoxTime from '../../components/MainComponents/DiscountBoxTime'
import ProductsSection from '../../components/MainComponents/ProductsSection/ProductsSection'

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
    
   </>
  )
}

export default Home