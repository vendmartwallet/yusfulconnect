import React from 'react'

const EquityProps = (props) => {
  return (
    <div className='bg-[#1E293B] py-4 lg:py-5 px-4 lg:px-7 grid grid-rows-1 gap-1'>
        <div>
            <img src={props.img} alt="" />
        </div>
        <div className=' text-white font-medium text-[19px]'>{props.title}</div>
        <div className=' text-[#56748B] text-base'>{props.paragrapgh}</div>
    </div>
  )
}

export default EquityProps