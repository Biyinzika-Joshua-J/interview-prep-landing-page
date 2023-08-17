import React from "react";
import { GradientButton } from "..";

const Guide = () => {
  return (
    <div className="py-20">
      <div className="mx-auto w-[90%]">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
          <div className="">
            <img
              rel="preload"
              src="https://hicounselor.com/assets/frontend/images/images-new-home/home-pricing-img.png"
              width="344"
              height="343"
              class="img-fluid"
              data-src="https://hicounselor.com/assets/frontend/images/images-new-home/home-pricing-img.png"
              alt="Our Financing Guide"
            />
          </div>
          <div className="">
            <h1 className="text-[#003570] text-[32px] font-semibold">Our Financing Guide</h1>
            <p className="text-[#222] text-[16px] py-4">
              HiCounselor understands that financing should never be a roadblock
              when starting a new career. With this in mind, we have created a
              financing guide to help meet your specific needs.
            </p>
            <div className="mt-10">
            <GradientButton text={'View Now'} link={''}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
