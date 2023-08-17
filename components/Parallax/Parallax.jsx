"use client";

import React, { useRef, useEffect, use } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./Parallax.css";

gsap.registerPlugin(ScrollTrigger);

function ParallaxSection() {
  const scroller = useRef();
  const features = useRef();

  useEffect(() => {
    let skillSet = gsap.utils.toArray(".skill-set");

    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),

        end: () => "+=" + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <div className="">
      <h1 className="font-semibold times text-[30px] ml-5">
        Get <span className="text-[80px]">3X</span> Interviews
      </h1>
      <div className="bg-[#6a5ee4] rounded-2xl py-20" ref={scroller}>
        <div className="overflow-hidden flex">
          <div className="overflow-hidden ">
            <div
              id="features"
              className=" flex overflow-x-hidden text-white w-[400vw] m-0   relative "
            >
              <section
                ref={features}
                className="flex-col justify-center skill-set bg-container-1 px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
              >
                <img
                  rel="preload"
                  src="https://hicounselor.com/assets/frontend/images/images-new-home/laptop-mb-frame-11.webp"
                  width="414"
                  height="245"
                  class="img-fluid"
                  data-src="https://hicounselor.com/assets/frontend/images/images-new-home/laptop-mb-frame-11.webp"
                  alt="Image"
                />
                <h2 className="text-center font-semibold text-2xl">
                  Connect with recruiters through our referral network
                </h2>
              </section>
              <section
                ref={features}
                className="flex-col justify-center skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
              >
                <img
                  rel="preload"
                  src="https://hicounselor.com/assets/frontend/images/images-new-home/laptop-mb-frame-12.webp"
                  width="414"
                  height="245"
                  class="img-fluid"
                  data-src="https://hicounselor.com/assets/frontend/images/images-new-home/laptop-mb-frame-12.webp"
                  alt="Image"
                />
                <h2 className="text-center font-semibold text-2xl">
                  Auto-apply to jobs
                </h2>
              </section>
              <section
                ref={features}
                className="flex-col justify-center skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
              >
                <img
                  rel="preload"
                  src="https://hicounselor.com/assets/frontend/images/images-new-home/laptop-mb-frame-13.webp"
                  width="414"
                  height="245"
                  class="img-fluid"
                  data-src="https://hicounselor.com/assets/frontend/images/images-new-home/laptop-mb-frame-13.webp"
                  alt="Image"
                />
                <h2 className="text-center font-semibold text-2xl">
                  Auto-emails to company insiders
                </h2>
              </section>
              <section
                ref={features}
                className="flex-col justify-center skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
              >
                <img
                  rel="preload"
                  src="https://hicounselor.com/assets/frontend/images/images-new-home/laptop-mb-frame-14.webp"
                  width="414"
                  height="245"
                  class="img-fluid"
                  data-src="https://hicounselor.com/assets/frontend/images/images-new-home/laptop-mb-frame-14.webp"
                  alt="Image"
                />
                <h2 className="text-center font-semibold text-2xl">
                  Network with company insiders
                </h2>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParallaxSection;
