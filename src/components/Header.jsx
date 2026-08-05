import React, { useState } from 'react'

import { TbLogin2 } from "react-icons/tb";
import { IoMenuOutline } from "react-icons/io5";



import MainLogo from './HeaderComponnet/MainLogo'
import SearchBox from './HeaderComponnet/SearchBox'
import LikeBox from './HeaderComponnet/LikeBox'
import NotficationBox from './HeaderComponnet/NotficationBox'
import SHoppingCartBox from './HeaderComponnet/SHoppingCartBox'
import BaseButton from './common/BaseButton'
import CategoryMenu from './HeaderComponnet/CategoryMenu'
import MainMenu from './HeaderComponnet/MainMenu'
import SupporInfoCall from './HeaderComponnet/SupporInfoCall'
import SearchBoxMobile from "./HeaderComponnet/SearchBoxMobile"
import MainMobileMenu from './HeaderComponnet/MainMobileMenu';
import OverLay from './common/OverLay';
import CartDropDown from './HeaderComponnet/CartDropDown';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCartShopOpen, setisCartShopOpen] = useState(false)


  return (
    <>
      <div className='w-full border-b-1 border-[#E7EAF0] mt-[15px] pb-[25px]'>
        <div className="wrapper">
          <div className='flex-row items-center justify-center'>

            <div className='flex items-center justify-between md:gap-3'>
              <MainLogo />
              <SearchBox />
              <div className='flex items-center justify-between gap-4'>
                <SearchBoxMobile />
                <LikeBox />
                <NotficationBox />

                <div className="relative group">
                  <SHoppingCartBox />

                  <div className="absolute top-full left-0 hidden group-hover:block">
                    <CartDropDown/>
                  </div>
                </div>

                {/* this is Login Btn DeskTop. ↓↓↓↓↓↓*/}
                <BaseButton title="ورود | ثبت نام" icon={<TbLogin2 className="text-3xl" />} className="bg-gradient-to-l from-[#6294ff] to-[#4681ff] hover:from-[#6294ff] hover:to-[#4681ff] duration-400 px-[20px] lg:px-[30px] py-[12px] lg:py-[15px] rounded-[12px] lg:rounded-[16px] md:flex justify-center items-center w-fit gap-3 lg:gap-4 transition-all duration-300 hover:shadow-lg hover:shadow-[#6294ff]/30 group text-white cursor-pointer min-w-[190px] hidden " />


                {/* this is Login Btn Mobile. ↓↓↓↓↓↓*/}
                <BaseButton icon={<IoMenuOutline />} className="md:hidden w-[44px] h-[44px] bg-gradient-to-br from-[#6294ff] to-[#4681ff] rounded-[12px] flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-[#6294ff]/30 text-white text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} />

              </div>
            </div>

            <div className='md:flex hidden items-center justify-between mt-12'>
              <div className='flex items-center justify-between gap-6'>
                <CategoryMenu />
                <MainMenu />
              </div>
              <div>
                <SupporInfoCall />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu  */}
      <div className={`w-[360px] fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 ease-in-out md:hidden z-50 border-l-4 border-blue-500 ${isOpen ? "translate-x-0 opacity-100" : "translate-x-[460px] opacity-0"}`}>
        <MainMobileMenu />
      </div>

      {isOpen && <OverLay onClick={() => setIsOpen(false)} />}

    </>
  )
}

export default Header