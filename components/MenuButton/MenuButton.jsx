import React from "react";

const MenuButton = ({onClick}) => {
  return (
    <button onClick={()=>onClick()} className="b border-[2px] border-[#302E481A] py-2 px-2 rounded-full">
      <div className="bg-[#302E481A] h-[36px] w-[36px] px-[7px] py-[9px] rounded-full">
        <span className="bg-[#302e48] h-[3px] w-[20px] rounded-lg block"></span>
        <span className="bg-[#302e48] h-[3px] w-[70%] rounded-lg block mt-[4px]"></span>
        <span className="bg-[#302e48] h-[3px] w-[20px] rounded-lg block mt-[4px]"></span>
      </div>
    </button>
  );
};

export default MenuButton;
