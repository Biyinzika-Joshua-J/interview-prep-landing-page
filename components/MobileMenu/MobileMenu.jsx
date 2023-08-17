"use client"
import React, {useEffect} from "react";
import { CloseMenuButton } from "..";

const MobileMenu = ({openStatus, closeFunction}) => {
  const width = 70;
  return (
    <>
      <div
        className={`fixed ${
          openStatus ? "flex z-20" : "hidden"
        } top-0 left-0 w-full h-screen bg-black opacity-50 `}
      ></div>
      <div
        style={{width:`${width}vw`}}
        className={`fixed ${
          openStatus ? "translate-x-0" : " translate-x-[1000px] "
        } transition-all ease-in-out duration-700 bg-white top-0 right-0  h-screen z-50`}
      >
        <div className="flex flex-row justify-between items-center py-4 px-4">
            <div className="">
                <span className="">
                    Mobile menu content....
                </span>
            </div>
            <div className="">
                <CloseMenuButton closeFunction={closeFunction}/>
            </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
