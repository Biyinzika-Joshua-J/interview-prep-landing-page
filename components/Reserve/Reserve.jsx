import React from 'react'
import './reserve.css'
import { GradientButton } from '..'

const Reserve = () => {
  return (
    <div className='reserve-container py-20'>
        <div className="text-center">
            <h1 className="text-[18px] leading-6">Reserve Your Spot Today</h1>
            <h1 className="text-[#01b5dd] text-[24px] font-semibold">Our Program Fills Up Fast!</h1>
        </div>
        <div className="py-10">
            <div className="lg:w-[80%] md:w-[80%] sm:w-[100%] mx-auto shadow-2xl rounded-2xl overflow-hidden">
                <table className="w-[100%] shadow-2xl">
                    <thead className="bg-[#b5b8cc]">
                        <tr className='py-4 '>
                            <th className="">
                            Career Track
                            </th>
                            <th className="">
                            Application Deadline
                            </th>
                            <th className="">
                            Start Date
                            </th>
                            <th className="">
                            Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr>
                            <td>
                            Software Engineering
                            </td>
                            <td>
                            18th Aug 2023
                            </td>
                            <td>
                            21st Aug 2023
                            </td>
                            <td>
                            <GradientButton text={'Apply Now'} id={'smaller-grad-btn'} link={'/'}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Data Science
                            </td>
                            <td>
                            18th Aug 2023
                            </td>
                            <td>
                            21st Aug 2023
                            </td>
                            <td>
                            <GradientButton id={'smaller-grad-btn'} text={'Apply Now'} link={'/'}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Product Management
                            </td>
                            <td>
                            1st Sep 2023
                            </td>
                            <td>
                            4th Sep 2023
                            </td>
                            <td>
                            <GradientButton id={'smaller-grad-btn'} text={'Apply Now'} link={'/'}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Salesforce Consultant
                            </td>
                            <td>
                            1st Sep 2023
                            </td>
                            <td>
                            4th Sep 2023
                            </td>
                            <td>
                            <GradientButton id={'smaller-grad-btn'} text={'Apply Now'} link={'/'}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Sales
                            </td>
                            <td>
                            18th Aug 2023
                            </td>
                            <td>
                            21st Aug 2023
                            </td>
                            <td>
                            <GradientButton id={'smaller-grad-btn'} text={'Apply Now'} link={'/'}/>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    </div>
  )
}

export default Reserve