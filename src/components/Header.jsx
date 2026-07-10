import React from 'react'

import { TbLogin2 } from "react-icons/tb";


import MainLogo from './HeaderComponnet/MainLogo'
import SearchBox from './HeaderComponnet/SearchBox'
import LikeBox from './HeaderComponnet/LikeBox'
import NotficationBox from './HeaderComponnet/NotficationBox'
import SHoppingCartBox from './HeaderComponnet/SHoppingCartBox'
import BaseButton from './common/BaseButton'
;

const Header = () => {
  return (
    <div className='w-full border-b-1 border-[#E7EAF0] mt-[15px] pb-[25px]'>
      <div className="wrapper">
        <div className='flex-row items-center justify-center'>
          <div className='flex items-center justify-between'>
            <MainLogo />
            <SearchBox />
            <div className='flex items-center justify-between gap-4'>
              <LikeBox />
              <NotficationBox />
              <SHoppingCartBox />
              {/* this is Login Btn . ↓↓↓↓↓↓*/}
              <BaseButton title="ورود | ثبت نام" icon={<TbLogin2  className="text-3xl" />} className="w-[250px] h-[63px] font-plus-sans text-2xl bg-[#6294ff] hover:bg-[#4681ff] text-white px-4 py-2 rounded-2xl transition-all duration-300 cursor-pointer p-2" />
            </div>
          </div>
          <div>down</div>
        </div>
      </div>
    </div>
  )
}

export default Header