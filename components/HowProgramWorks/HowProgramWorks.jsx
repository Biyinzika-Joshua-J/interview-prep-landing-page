import React from "react";
import "./howprogramworks.css";
import Link from "next/link";

const HowProgramWorks = () => {
  return (
    <div className="py-10">
      <div className="video-detail mx-auto lg:w-[40%] md:w-[60%] w-[80%] py-10 px-10 text-left">
        <h2 className="font-semibold text-[#1d1e37] text-[33px] ">
          Your true <span className="text-[#822973]">Job Search</span> <br />{" "}
          companion
        </h2>
        <h2 className="uppercase text-[#9a9ec3] text-[14px] mt-[15px]">
          watch how our{" "}
        </h2>
        <h2 className="text-[#01b5dd] text-[50px] font-bold">program works</h2>
      </div>
      <div className="">
        <section className="bg-white py-20 lg:py-[70px]">
          <div className="container mx-auto lg:w-[60%] md:w-[70%] w-[80%]" >
            <div className="-mx-4 flex flex-wrap justify-center">
              <div className="w-full px-4 lg:w-10/12">
                <div className="relative z-20 h-[300px] overflow-hidden rounded-lg md:h-[450px]">
                  <div className="absolute top-0 left-0 h-full w-full">
                    <div className="absolute top-0 left-0 h-full w-full bg-black opacity-60"></div>
                    <img
                      src="https://hicounselor.com/assets/frontend/images/images-new-home/thumbnail2.jpg"
                      alt="image"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-primary bg-opacity-90">
                    <Link
                      href="https://www.youtube.com/watch?v=tAivs_EJuN8&feature=youtu.be"
                      target="__blank"
                      className="absolute z-20 flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary md:h-[100px] md:w-[100px]"
                    >
                      <span className="absolute top-0 right-0 z-[-1] h-full w-full animate-ping rounded-full bg-[#fff] bg-opacity-20 delay-300 duration-1000"></span>
                      <svg
                        width="23"
                        height="27"
                        viewBox="0 0 23 27"
                        className="fill-current "
                        color="#604794"
                      >
                        <path d="M22.5 12.634C23.1667 13.0189 23.1667 13.9811 22.5 14.366L2.25 26.0574C1.58333 26.4423 0.750001 25.9611 0.750001 25.1913L0.750002 1.80866C0.750002 1.03886 1.58334 0.557731 2.25 0.942631L22.5 12.634Z" />
                      </svg>
                    </Link>
                  </div>

                  <div>
                    <span className="absolute top-4 left-4 z-40">
                      {/* SVG icon 1 */}
                    </span>
                    <span className="absolute bottom-4 right-4 z-40">
                      {/* SVG icon 2 */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowProgramWorks;
