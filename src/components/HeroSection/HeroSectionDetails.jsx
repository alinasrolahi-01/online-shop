import React from 'react'
import DiscountBoxInfo from './HeroSectionDetails/DiscountBoxInfo'
import HeaderTitle from './HeroSectionDetails/HeaderTitle'
import HeroButtons from './HeroSectionDetails/HeroButtons'
import StatsSection from './HeroSectionDetails/StatsSection'
import ServiceFeatures from './HeroSectionDetails/ServiceFeatures '

const HeroSectionDetails = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-16 items-center py-50'>

        <div className=' space-y-7'>
            <DiscountBoxInfo/>
            <HeaderTitle/>
            <HeroButtons/>
            <StatsSection/>
            <ServiceFeatures />
        </div>

        <div>


        </div>
    </div>
  )
}

export default HeroSectionDetails