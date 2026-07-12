import React, { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import SearchDropDown from "./SearchDropDown";

const SearchBox = () => {
  const [searchBox, setSearchBox] = useState(false);
  const dropHandle = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropHandle.current &&
        !dropHandle.current.contains(event.target)
      ) {
        setSearchBox(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropHandle}
      className="relative md:w-[500px] md:h-[56px] border border-[#E7EAF0] rounded-2xl py-3 px-4 md:flex items-center gap-1 font-plus-sans transition-all duration-300 focus-within:border-blue-500 group hidden "
    >
      <CiSearch className="text-4xl text-[#818181] transition-colors duration-300 group-focus-within:text-blue-500" />

      <input
        type="search"
        placeholder="جستجو لپتاپ، لباس، اکسسوری..."
        className="w-full outline-none text-[#181E25] font-dana"
        onFocus={() => setSearchBox(true)}
      />

      <div
        className={`
          absolute top-[65px] right-0 w-full
          transition-all duration-300 ease-in-out
          ${
            searchBox
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-2 invisible"
          }
        `}
      >
        <SearchDropDown />
      </div>
    </div>
  );
};

export default SearchBox;