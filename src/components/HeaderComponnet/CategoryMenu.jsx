import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import DropDownBox from "../common/DropDownBox";
import SeeAllBtn from "./SeeAllBtn";

import { RiGalleryView2 } from "react-icons/ri";


const CategoryMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Button */}
      <div className="flex items-center justify-center gap-2 cursor-pointer text-gray-600 group">
        <IoMenuOutline className="text-2xl group-hover:text-blue-500 transition-all duration-300" />

        <span className="text-[14px] font-dana group-hover:text-blue-500 transition-all duration-300 letter-spacing-[2px]">
          دسته بندی کالاها
        </span>

        <IoIosArrowDown
          className={`transition-all duration-300 ${
            isOpen ? "rotate-180 text-blue-500" : ""
          }`}
        />
      </div>

      {/* Dropdown */}
      <div
        className={`
          absolute top-full right-0 
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-2 invisible pointer-events-none"
          }
        `}
      >
        <DropDownBox title="دسته بندی محصولات" icon={<RiGalleryView2 className="text-2xl"/>} trigger={<SeeAllBtn/>} >
         testt
        </DropDownBox>
      </div>
    </div>
  );
};

export default CategoryMenu;