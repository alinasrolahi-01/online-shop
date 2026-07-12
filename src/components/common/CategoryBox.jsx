import React from "react";
import { Link } from "react-router";

const CategoryBox = ({ title, slug, icon: Icon, items }) => {
  return (
    <div className="bg-[#6294ff15] rounded-[16px] p-4 hover:shadow-lg transition-all duration-300 font-dana">
      <div className="flex  items-center gap-4">
        <Icon  className="w-[34px] h-[34px] bg-white rounded-[12px] flex items-center justify-center shadow-sm"/>
        <span className="text-[15px] text-[#181E25] font-semibold">{title}</span>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to="#" className="text-[13px] text-[#67788E] hover:text-[#6294ff] transition-colors ">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryBox;