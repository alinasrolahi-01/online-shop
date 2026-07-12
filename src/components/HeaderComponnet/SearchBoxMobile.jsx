import React from 'react'

import { CiSearch } from "react-icons/ci";

const SearchBoxMobile = () => {
  return (
    <CiSearch className="md:hidden w-[44px] h-[44px] bg-[#F9FAFB] hover:bg-[#6294ff]/10 rounded-[12px] flex items-center justify-center transition-colors text-gray-400" />
  )
}

export default SearchBoxMobile