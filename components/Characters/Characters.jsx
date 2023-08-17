import React from "react";

const Characters = () => {
  return (
    <div className="py-8 pt-32">
      <div className="mx-auto w-[90%] flex justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
          <div className="bg-[#01b5dd] pt-[200px] px-[26px] pb-[60px] relative rounded-2xl mt-20">
            <div className="absolute -top-[100px]">
              <img
                height={"240"}
                width={"240"}
                src="https://hicounselor.com/assets/frontend/images/images-new-home/top-tile-first.webp"
                alt=""
              />
            </div>
            <div className="text-center">
              <h3 className="text-[1.7rem] font-semibold text-white">
                Land more Interviews
              </h3>
              <span className="text-white">With our Automated Tools</span>
            </div>
          </div>

          <div className="bg-[#604794] pt-[200px] px-[26px] pb-[60px] relative rounded-2xl mt-20">
            <div className="absolute -top-[100px]">
              <img
                height={"240"}
                width={"240"}
                src="https://hicounselor.com/assets/frontend/images/images-new-home/top-tile-second.webp"
                alt=""
              />
            </div>
            <div className="text-center">
              <h3 className="text-[1.7rem] font-semibold text-white">
              Crush Interviews
              </h3>
              <span className="text-white">Technical or Behavioral</span>
            </div>
          </div>

          <div className="bg-[#e83078] pt-[200px] px-[26px] pb-[60px] relative rounded-2xl mt-20">
            <div className="absolute -top-[100px]">
              <img
                height={"240"}
                width={"240"}
                src="https://hicounselor.com/assets/frontend/images/images-new-home/top-tile-third.webp"
                alt=""
              />
            </div>
            <div className="text-center">
              <h3 className="text-[1.7rem] font-semibold text-white">
              Start Working
              </h3>
              <span className="text-white">Pay Us Later</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
