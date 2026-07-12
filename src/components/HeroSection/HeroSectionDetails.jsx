import React from 'react'
import DiscountBoxInfo from './HeroSectionDetails/DiscountBoxInfo'
import HeaderTitle from './HeroSectionDetails/HeaderTitle'
import HeroButtons from './HeroSectionDetails/HeroButtons'

const HeroSectionDetails = () => {
  return (
    <div className='flex justify-between items-center gap-6'>

        <div>
            <DiscountBoxInfo/>
            <HeaderTitle/>
            <HeroButtons/>
        </div>

        <div>


        </div>
    </div>
  )
}

export default HeroSectionDetails