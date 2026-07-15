import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import HeroSectionDetails from '../../components/HeroSection/HeroSectionDetails'
import FeaturesBox from '../../components/common/FeaturesBox'
import CategorySelect from '../../components/MainComponents/CategorySelect'

const Home = () => {
  return (
   <>
    <HeroSection>
      <HeroSectionDetails/>
    </HeroSection>

    
    <FeaturesBox/>

    <CategorySelect/>
    
   </>
  )
}

export default Home