import React from "react";

const Featured = () => {
  return (
    <div className="py-20">
      <div className="mx-auto w-[90%]">
        <h1 className="text-[#9a9ec3] text-[14px] font-semibold">
          HICOUNSELOR
        </h1>
        <h1 className="text-[#894065] text-[44px] font-semibold">
          Featured In
        </h1>
      </div>
      <div className="mx-auto w-[90%] py-4">
        <div className="flex flex-wrap">
          <div className="mx-2 my-4">
            <img
              rel="preload"
              src="https://hicounselor.com/assets/frontend/images/images-new-home/Business_Insider.webp"
              width="89"
              height="36"
              class="img-fluid"
              data-src="https://hicounselor.com/assets/frontend/images/images-new-home/Business_Insider.webp"
              alt="featured image"
            />
          </div>
          <div className="mx-2 my-4">
            <img
              rel="preload"
              src="https://hicounselor.com/assets/frontend/images/images-new-home/nasdaq.webp"
              width="127"
              height="36"
              class="img-fluid"
              data-src="https://hicounselor.com/assets/frontend/images/images-new-home/nasdaq.webp"
              alt="featured image"
            />
          </div>
          <div className="mx-2 my-4">
            <img
              rel="preload"
              src="https://hicounselor.com/assets/frontend/images/images-new-home/business-standard.webp"
              width="222"
              height="36"
              class="img-fluid"
              data-src="https://hicounselor.com/assets/frontend/images/images-new-home/business-standard.webp"
              alt="featured image"
            />
          </div>
          <div className="mx-2 my-4">
            <img
              rel="preload"
              src="https://hicounselor.com/assets/frontend/images/images-new-home/Yahoo.webp"
              width="98"
              height="36"
              class="img-fluid"
              data-src="https://hicounselor.com/assets/frontend/images/images-new-home/Yahoo.webp"
              alt="featured image"
            />
          </div>

          <div className="mx-2 my-4">
            <img
              rel="preload"
              src="https://hicounselor.com/assets/frontend/images/images-new-home/livemint.webp"
              width="122"
              height="36"
              class="img-fluid"
              data-src="https://hicounselor.com/assets/frontend/images/images-new-home/livemint.webp"
              alt="featured image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
