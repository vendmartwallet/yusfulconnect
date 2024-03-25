import React from 'react'
import EquityProps from '../equityprops/EquityProps'
import Ubility from "../../assets/ubility.svg"
import Cone from "../../assets/cone.svg"
import Diamond from "../../assets/diamond.svg"
const OpenExperiences = () => {
  return (
    <>
    <div className=' pt-16 lg:pt-28 text-white mx-6 grid justify-center pb-20'>
      <div className=' text-center lg:w-[60vw]' >
      
      <div data-aos="zoom-in-up" className=' md:text-[67px] md:leading-[65px] text-[38px] leading-[50px] lg:text-[63px] lg:leading-[60px] font-bold'>Opening the doors of new world of Dapp experiences.</div>
        <div data-aos="fade-up" className=' md:text-[24px] lg:text-[23px] text-[#56748B] font-medium pt-2 md:pt-4'>The communications protocol for Dapp, brings the ecosystem together by enabling wallets and apps to securely connect and interact.</div>
      </div>

    </div>
      <div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-6 lg:mx-24'>
        <div data-aos="fade-left">
        <EquityProps title="Ubiquity" paragrapgh="Easy access provided to a large capacity" img={Ubility}/>
        </div>
       <div data-aos="flip-up">
       <EquityProps title="Driving Technologies" paragrapgh="AI, ML & Decentralized Protocols For Dapps" img={Cone}/>
       </div>
        <div data-aos="fade-right">
        <EquityProps title="Security" paragrapgh="Highest level of security is utilized For easy use" img={Diamond}/>
        </div>
      </div>
     </> 
  )
}

export default OpenExperiences