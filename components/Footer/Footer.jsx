"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="lg:px-8 px-0 mt-10">
      <div className="footer-header rounded-lg py-4 pb-10 px-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:w-[70%] w-[80%] gap-10 mx-auto">
            <div className="">
                <h2 className="mb-[16px] font-[600] text-[20px] text-white mt-[26px]">Useful Links</h2>
                <div className="flex flex-col justify-center">
                    <div className="">
                        <Link className="text-[14px] text-white font-400 hover:underline hover:underline-offset-2" href={'/'}>
                            Home
                        </Link>
                    </div>
                    <div className="">
                        <Link className="text-[14px] text-white font-400 hover:underline hover:underline-offset-2" href={'/'}>
                            About Us
                        </Link>
                    </div>
                    <div className="">
                        <Link className="text-[14px] text-white font-400 hover:underline hover:underline-offset-2" href={'/'}>
                            FAQ
                        </Link>
                    </div>
                    <div className="">
                        <Link className="text-[14px] text-white font-400 hover:underline hover:underline-offset-2" href={'/'}>
                            Blog
                        </Link>
                    </div>
                    <div className="">
                        <Link className="text-[14px] text-white font-400 hover:underline hover:underline-offset-2" href={'/'}>
                            Reviews
                        </Link>
                    </div>
                    <div className="">
                        <Link className="text-[14px] text-white font-400 hover:underline hover:underline-offset-2" href={'/'}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
            <div className="">
            <h2 className="mb-[16px] font-[600] text-[20px] text-white mt-[26px]">Resources</h2>
                <div className="flex flex-col justify-center">
                    <div className="">
                        <Link className="text-[14px] text-white font-400 hover:underline hover:underline-offset-2" href={'/'}>
                        Coding Practice Platform
                        </Link>
                    </div>
                    <div className="">
                        <Link className="text-[14px] text-white font-400 hover:underline hover:underline-offset-2" href={'/'}>
                        Education
                        </Link>
                    </div>
                    <div className="">
                        <Link className="text-[14px] text-white font-400 hover:underline hover:underline-offset-2" href={'/'}>
                        Become an Instructor
                        </Link>
                    </div>
                    <div className="">
                        <Link className="text-[14px] text-white font-400 hover:underline hover:underline-offset-2" href={'/'}>
                        Get Early Access to Auto-application Tool
                        </Link>
                    </div>
                    <div className="">
                        <Link className="text-[14px] text-white font-400 hover:underline hover:underline-offset-2" href={'/'}>
                        Events and Webinars
                        </Link>
                    </div>
                    <div className="">
                        <Link className="text-[14px] text-white font-400 hover:underline hover:underline-offset-2" href={'/'}>
                        Campus Ambassador
                        </Link>
                    </div>
                </div>
            </div>
            <div className="">
            <h2 className="mb-[16px] font-[600] text-[20px] text-white mt-[26px]">Legal Staff</h2>
                <div className="flex flex-col justify-center">
                    <div className="">
                        <Link className="text-[14px] text-white font-400 hover:underline hover:underline-offset-2" href={'/'}>
                        Terms of Use
                        </Link>
                    </div>
                    <div className="">
                        <Link className="text-[14px] text-white font-400 hover:underline hover:underline-offset-2" href={'/'}>
                        Privacy Policy
                        </Link>
                    </div>
                    
                 
                </div>
            </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between py-4 px-4 lg:w-[70%] mx-auto">
        <div className="">
          <span className="text-[12px]">
            Copyright © 2023 HiCounselor. All rights reserved.
          </span>
        </div>
        <div className="flex flex-row items-center">
          <div className="mx-2">
            <Link href={"/"}>
              <FontAwesomeIcon size="xl" icon={faTwitter} style={{color:'#87CEEB'}}/>
            </Link>
          </div>
          <div className="mx-2">
            <Link href={"/"}>
              <FontAwesomeIcon size="xl" icon={faLinkedin}  style={{color:'blue'}}/>
            </Link>
          </div>
          <div className="mx-2">
            <Link href={"/"}>
              <FontAwesomeIcon size="xl" icon={faYoutube}  style={{color:'red'}}/>
            </Link>
          </div>
          <div className="mx-2">
            <Link href={"/"}>
              <FontAwesomeIcon size="xl" icon={faInstagram}  style={{color:'pink'}}/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
