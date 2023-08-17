import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';

const CloseMenuButton = ({closeFunction}) => {
  return (
    <button onClick={()=>closeFunction()} className="b border-[2px] border-[#302E481A] py-2 px-2 rounded-full">
    <div className="bg-[#302E481A] h-[36px] w-[36px] px-[7px] py-[9px] rounded-full flex justify-center items-center">
      <span className='text-2xl hover:text-[#5245df] font-bold'>
        X
      </span>
    </div>
  </button>
  )
}

export default CloseMenuButton