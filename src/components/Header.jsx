import React from 'react'

import MainLogo from './HeaderComponnet/MainLogo'
import SearchBox from './HeaderComponnet/SearchBox'
import LikeBox from './HeaderComponnet/LikeBox'
import NotficationBox from './HeaderComponnet/NotficationBox'
import SHoppingCartBox from './HeaderComponnet/SHoppingCartBox'
import LoginBox from './HeaderComponnet/LoginBox'

const Header = () => {
  return (
    <div className='w-full border-b-1 border-[#E7EAF0] mt-[15px] pb-[25px]'>
       <div className="wrapper">
        <div className='flex-row items-center justify-center'>
          <div className='flex items-center justify-between'>
            <MainLogo/>
            <SearchBox/>
            <div className='flex items-center justify-between'>
              <LikeBox/>
              <NotficationBox/>
              <SHoppingCartBox/>
              <LoginBox/>
            </div>
          </div>
          <div>down</div>
        </div>
       </div>
    </div>
  )
}

export default Header