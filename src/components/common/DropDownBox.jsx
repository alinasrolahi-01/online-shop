import React from "react";

const DropDownBox = ({ title, trigger, icon = null, children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-[800px] font-dana ">
      <div className="flex items-center justify-between  border-b border-gray-200  text-white bg-gradient-to-l from-[#6294ff] to-[#6294ff] px-6 py-4">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-[16px]">{title}</span>
        </div>

        <div>{trigger}</div>
      </div>

      <div>
        {children}
      </div>
    </div>
  );
};

export default DropDownBox;