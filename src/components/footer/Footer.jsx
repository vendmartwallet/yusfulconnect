import React from 'react'

const Footer = () => {
  return (
    <>

    <div className=' mx-7 mt-12 lg:mt-24'>
    <svg class="r_ ra" width="31" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient x1="0%" y1="32.443%" x2="104.18%" y2="50%" id="hlogo-a">
                    <stop stop-color="#FFF" stop-opacity=".299" offset="0%"></stop>
                    <stop stop-color="#7587E4" stop-opacity="0" offset="100%"></stop>
                </linearGradient>
                <linearGradient x1="18.591%" y1="0%" x2="100%" y2="100%" id="hlogo-b">
                    <stop stop-color="#818CF8" offset="0%"></stop>
                    <stop stop-color="#C7D2FE" offset="100%"></stop>
                </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
                <path fill="#3730A3" d="M16 18.5V32l15.999-9.25V9.25z"></path>
                <path fill="#4F46E5" d="m0 23 16 9V18.501L0 9.251z"></path>
                <path fill-opacity=".64" fill="url(#hlogo-a)" d="M16 13 0 23l16 9 16-9z"></path>
                <path fill="url(#hlogo-b)" d="M16 0 0 9.25l16 9.25 15.999-9.25z"></path>
            </g>
        </svg> 
    </div>
    <div className=' border-t mx-5 mt-14 border-white py-5 lg:py-6'>
      <p className=' text-xs text-gray-500 font-medium'>© 2022. All Rights Reserved.</p>
    </div>
    </>
  )
}

export default Footer