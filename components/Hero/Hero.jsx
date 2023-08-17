import React from 'react'
import './hero.css'
import { GradientButton } from '..'

const Hero = () => {
  return (
    <div className=''>
        <div className="hero-container">
            <div className="lg:w-[90%] mx-auto w-[95%]">
                <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
                    <div className="">
                        <h1 className="text-[33px] font-semibold">
                        Fastest way to land your dream job.<br/>
                        Maximum <span className="text-[#822973]">Interviews</span>.<br/> Minimum Efforts.
                        </h1>
                        <p className="text-[#263238] font-medium mt-[25px] leading-4 ">
                        Try our program for 1 week, risk-free
                        </p>
                        <div className="mt-10 mb-10">
                            <GradientButton text={'Apply to upcoming cohort'} link={''}/>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <img width={"463"} height={"463"} src="https://hicounselor.com/assets/frontend/images/images-new-home/top-main-slide-image10.webp" alt="hero image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero