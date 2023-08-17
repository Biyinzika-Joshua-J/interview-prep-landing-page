import React from "react";
import "./apply.css";

const Apply = () => {
  return (
    <div className="apply-container py-20">
      <div className="text-center">
        <h1 className=" text-[26px] font-semibold">
          <span className="text-[#01b5dd]">Apply to</span> HiCounselor
        </h1>
      </div>

      <div className="mx-auto w-[80%] py-10 mt-10">
        <div className="grid lg:grid-cols-3 grid-cols-1">
          <div className="flex justify-center items-center circle-1 relative">
            <img
              rel="preload"
              src="https://hicounselor.com/assets/frontend/images/images-new-home/new-apply-circle-1.png"
              width="236"
              height="236"
              class="img-fluid"
              data-src="https://hicounselor.com/assets/frontend/images/images-new-home/new-apply-circle-1.png"
              alt="Apply Image"
            />
          </div>
          <div className="flex justify-center items-center  circle-2 relative">
            <img
              rel="preload"
              src="https://hicounselor.com/assets/frontend/images/images-new-home/new-apply-circle-2.png"
              width="236"
              height="236"
              class="img-fluid"
              data-src="https://hicounselor.com/assets/frontend/images/images-new-home/new-apply-circle-2.png"
              alt="Apply Image"
            />
          </div>
          <div className="flex justify-center items-center  circle-3 relative">
            <img
              rel="preload"
              src="https://hicounselor.com/assets/frontend/images/images-new-home/new-apply-circle-322.png"
              width="236"
              height="236"
              class="img-fluid"
              data-src="https://hicounselor.com/assets/frontend/images/images-new-home/new-apply-circle-322.png"
              alt="Apply Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
