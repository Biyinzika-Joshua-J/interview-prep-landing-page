"use client";

import React, { useState } from "react";
import Logo from "../../public/assets/images/Logo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { MenuButton, CloseMenuButton, MobileMenu } from "..";

const Navbar = () => {
  const [menuBarOpen, setMenuBarOpen] = useState(false);

  const openMenuBar = () => {
    setMenuBarOpen(true);
  };
  const closeMenuBar = () => {
    setMenuBarOpen(false);
  };

  return (
    <>
      <nav className="flex flex-row justify-between w-[90%] mx-auto py-4 items-center">
        <div className="">
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        <div className="lg:flex  hidden flex-row items-center">
          <div className="mx-4">
            <Link href={"/"}>Internships</Link>
          </div>

          <div className="mx-4">
            <Link href={"/"}>Creative Resume Builder</Link>
          </div>
          <div className="mx-4">
            <Link href={"/"}>Jobs</Link>
          </div>
          <div className="mx-4">
            <Link href={"/"}>Resources</Link>
          </div>
          <div className="mx-4">
            <Link href={"/"}>Employers</Link>
          </div>
        </div>
        <div className="lg:flex hidden">
          <button className="bg-[#5245df] text-white py-2 px-4 rounded-lg">
            Login
            <FontAwesomeIcon
              size="xl"
              icon={faArrowRight}
              className="mx-4 font-light"
            />
          </button>
        </div>
        <div className="lg:hidden flex">
          <MenuButton onClick={openMenuBar} />
        </div>
      </nav>
      <MobileMenu openStatus={menuBarOpen} closeFunction={closeMenuBar}/>
    </>
  );
};

export default Navbar;
