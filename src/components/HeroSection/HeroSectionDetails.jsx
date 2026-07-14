import React from 'react'
import DiscountBoxInfo from './HeroSectionDetails/DiscountBoxInfo'
import HeaderTitle from './HeroSectionDetails/HeaderTitle'
import HeroButtons from './HeroSectionDetails/HeroButtons'
import StatsSection from './HeroSectionDetails/StatsSection'
import ServiceFeatures from './HeroSectionDetails/ServiceFeatures '
import BestSelling from './HeroSectionDetails/BestSelling'
import Customer from './HeroSectionDetails/Customer'
import DiscountProinfo from './HeroSectionDetails/DiscountProinfo'
import SendFreeInfo from './HeroSectionDetails/SendFreeInfo'
import ScrollDownBtn from './HeroSectionDetails/ScrollDownBtn'

const HeroSectionDetails = () => {
  return (
  <>
      <div className='grid lg:grid-cols-2 gap-16 items-center py-50'>

        <div className=' space-y-7'>
            <DiscountBoxInfo/>
            <HeaderTitle/>
            <HeroButtons/>
            <StatsSection/>
            <ServiceFeatures />
        </div>

        <div className='hidden lg:inline-block  relative h-[560px]'>
          <div>
            <BestSelling/>
          </div>

          <div >
            <Customer/>
            <DiscountProinfo/>
            <SendFreeInfo/>
          </div>
        </div>
    </div>

    <div>
      <ScrollDownBtn/>
    </div>
  </>

  )
}

export default HeroSectionDetails