"use client";
import React, {useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GradientButton } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const testimonials_info = [
  {
    name: "HABIB KARBASIAN",
    image:
      "https://hicounselor.com/assets/frontend/images/images-new-home/testimonial-tumnail1.webp",
    role: "Data Scientist ",
    testimonial:
      " I was ready to give up [on the job search point] and I was at my lowest point...fortunately,  HiCounselor was my last resort and they walked me through every step of the interview process. The program was the light at the end of the tunnel [for me], and I landed a job within 1 month",
    youtube: "",
    company: "Neal Analytics",
    big_img:'https://hicounselor.com/assets/frontend/images/images-new-home/testimonial1.webp',
  },
  {
    name: "EMIL",
    image:
      "https://hicounselor.com/assets/frontend/images/images-new-home/testimonial-tumnail4.webp",
    role: "Software Engineer ",
    testimonial:
      " I was ready to give up [on the job search point] and I was at my lowest point...fortunately,  HiCounselor was my last resort and they walked me through every step of the interview process. The program was the light at the end of the tunnel [for me], and I landed a job within 1 month",
    youtube: "",
    company: "Neal Analytics",
    big_img:'https://hicounselor.com/assets/frontend/images/images-new-home/candidates-1.webp',
  },
  {
    name: "WEI",
    image:
      "https://hicounselor.com/assets/frontend/images/images-new-home/testimonial-tumnail2.webp",
    role: "Software Engineer ",
    testimonial:
      " I was ready to give up [on the job search point] and I was at my lowest point...fortunately,  HiCounselor was my last resort and they walked me through every step of the interview process. The program was the light at the end of the tunnel [for me], and I landed a job within 1 month",
    youtube: "",
    company: "Neal Analytics",
    big_img:'https://hicounselor.com/assets/frontend/images/candidates-2.webp',
  },
  {
    name: "Akshay",
    image:
      "https://hicounselor.com/assets/frontend/images/images-new-home/testimonial-tumnail3.webp",
    role: "Product Lead ",
    testimonial:
      " I was ready to give up [on the job search point] and I was at my lowest point...fortunately,  HiCounselor was my last resort and they walked me through every step of the interview process. The program was the light at the end of the tunnel [for me], and I landed a job within 1 month",
    youtube: "",
    company: "Neal Analytics",
    big_img:'https://hicounselor.com/assets/frontend/images/candidates-3.webp',
  },
  {
    name: "Ivan",
    image:
      "https://hicounselor.com/assets/frontend/images/images-new-home/ivan-thubnail.gif",
    role: "Product Owner ",
    testimonial:
      " I was ready to give up [on the job search point] and I was at my lowest point...fortunately,  HiCounselor was my last resort and they walked me through every step of the interview process. The program was the light at the end of the tunnel [for me], and I landed a job within 1 month",
    youtube: "",
    company: "Neal Analytics",
    big_img:'https://hicounselor.com/assets/frontend/images/IVAN.jfif',
  },
  {
    name: "Lee",
    image:
      "https://hicounselor.com/assets/frontend/images/images-new-home/jofry-thubnail.gif",
    role: "Software Engineer ",
    testimonial:
      " I was ready to give up [on the job search point] and I was at my lowest point...fortunately,  HiCounselor was my last resort and they walked me through every step of the interview process. The program was the light at the end of the tunnel [for me], and I landed a job within 1 month",
    youtube: "",
    company: "Neal Analytics",
    big_img:'https://hicounselor.com/assets/frontend/images/Jeffrey.jfif',
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  function onChangeTestimonialHandler (idx){
      setCurrentTestimonial(idx);
  }
  return (
    <div className="py-10">
      <div className="bg-[#f9f9f9] border-[1px] border-[#e6e8f4] w-[80%] mx-auto py-20 px-10 rounded-3xl">
        <div className="w-[50%] mx-auto">
          <h2 className="font-semibold text-center text-[25px] pb-10">
            Here’s What Our <span className="text-[#5245df]">Candidates</span>{" "}
            <br />
            Are Saying About Us
          </h2>
        </div>

        <div className="">
          <div className="grid lg:grid-cols-2 gap-10 grid-cols-1 w-[80%] mx-auto">
            <div className="flex items-center">
              <div className="">
                <h1 className="font-semibold">{testimonials_info[currentTestimonial].name}</h1>
                <h3 className="text-gray-500">{testimonials_info[currentTestimonial].role}</h3>
                <p className="text-[14px]">
                {testimonials_info[currentTestimonial].testimonial}
                </p>
              </div>
            </div>
            <div className="">
              <div className="">
                <img
                  rel="preload"
                  src={testimonials_info[currentTestimonial].big_img}
                  width="220"
                  height="220"
                  className="rounded-xl"
                  data-src="https://hicounselor.com/assets/frontend/images/candidates-3.webp"
                  alt="AKSHAY KULKARNI"
                />
              </div>
            </div>
          </div>
          <div className="">
            <Carousel  responsive={responsive}>
              {testimonials_info.map((item, idx) => (
                <div onClick={()=>onChangeTestimonialHandler(idx)} className={` py-4 px-4 cursor-pointer flex items-center bg-white mx-4 ${idx===currentTestimonial?'border-[1px] border-[#6a5ee4]':''} rounded-2xl shadow-xl my-10`}>
                  <div className="h-10 w-10 mr-4">
                    <img
                      src={item.image}
                      alt=""
                      className="h-[100%] w-[100%]"
                    />
                  </div>
                  <div className="">
                    <h2 className="font-semibold text-[14px]">{item.name}</h2>
                    <p className="text-[10px]">
                      {item.role} at {item.company}
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="flex justify-end">
          <GradientButton text={"View more success stories"} link={""} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
