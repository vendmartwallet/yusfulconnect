import React from 'react'
import "../../App.css"
import Polygon from "../../assets/p.png"
import Cryp from "../../assets/diamond.svg"
import Bigcone from "../../assets/cone.svg"


const Ecosystem = () => {
    const Cone = (props)=>{
        return(
            <div className='bg-[#1E293B] items-center flex justify-center p-7 w-[83%] lg:w-[12%] lg:py-7'>
                <div className='drey rounded-full bg-[#20334c] p-2 lg:p-2'>
                    <img src={props.img} alt=""/>
                </div>
            </div>
        )
    }

  return (
    <>
    <div className='grid justify-center text-center mx-8 lg:mx-0'>
       <div className=' text-4xl lg:text-6xl text-white pb-16'>
        <h1 data-aos="fade-up" className='  lg:w-[600px] text-center font-semibold'>An ecosystem of integrations</h1>
       </div>

       <div className='walletanimation flex justify-center'>
       <svg fill="none" height="150" viewBox="0 0 480 332" width="150" xmlns="http://www.w3.org/2000/svg"><path d="m126.613 93.9842c62.622-61.3123 164.152-61.3123 226.775 0l7.536 7.3788c3.131 3.066 3.131 8.036 0 11.102l-25.781 25.242c-1.566 1.533-4.104 1.533-5.67 0l-10.371-10.154c-43.687-42.7734-114.517-42.7734-158.204 0l-11.107 10.874c-1.565 1.533-4.103 1.533-5.669 0l-25.781-25.242c-3.132-3.066-3.132-8.036 0-11.102zm280.093 52.2038 22.946 22.465c3.131 3.066 3.131 8.036 0 11.102l-103.463 101.301c-3.131 3.065-8.208 3.065-11.339 0l-73.432-71.896c-.783-.767-2.052-.767-2.835 0l-73.43 71.896c-3.131 3.065-8.208 3.065-11.339 0l-103.4657-101.302c-3.1311-3.066-3.1311-8.036 0-11.102l22.9456-22.466c3.1311-3.065 8.2077-3.065 11.3388 0l73.4333 71.897c.782.767 2.051.767 2.834 0l73.429-71.897c3.131-3.065 8.208-3.065 11.339 0l73.433 71.897c.783.767 2.052.767 2.835 0l73.431-71.895c3.132-3.066 8.208-3.066 11.339 0z" fill="rgb(62,57,168)"/></svg>
       </div>
    </div>

    <div className=' grid grid-cols-2 md:grid lg:flex justify-center lg:justify-start items-center gap-4 ml-6 lg:mx-20 pb-8 lg:py-8'>
        <Cone img={Bigcone}/>
        <Cone img={Cryp}/>
        <div className='md:hidden'><Cone img={Polygon}/></div>
       </div>

       <div className=' border-b border-gray-800 pb-10'></div>
    </>
  )
}

export default Ecosystem