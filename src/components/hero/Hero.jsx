import React, { useEffect }  from 'react'
import Merge from "../../assets/merge.jpg"
import RatingStar from '../ratingProps/RatingStar'
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useConnect, useEnsName } from "wagmi";
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Wallets from '../wallets/Wallets';



const Hero = () => {
	const { open } = useWeb3Modal();
	const { address, isConnected } = useAccount();
	const [showModal, setShowMainWalletModal] = useState(false);
	
	
	useEffect(() => {
		AOS.init({
			duration: 2000,
			once: false, 
		});
	  }, []);

  const Rating = (props) =>{
    return(
      <div className=' text-center'>
        <div className='rating flex justify-center'>
        <RatingStar/>
        </div>
        <div className='paragrapgh lg:w-[25vw] text-[#56748B]'>{props.paragrapgh}</div>
        <div className='nameRate text-white mb-8 mt-8 lg:mb-0 lg:mt-12 text-[12px]'>{props.nameRate}<span className=' font-medium text-[#5866F1] text-[17px]'>{props.rate}</span></div>
      </div>
    )
  }
  return (
		<div className="">
			{showModal &&
				<div className='w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-[1000]  bg-black bg-opacity-30 backdrop-blur-sm'>
					<div className='z-[100] select-none'>
						<Wallets />
					</div>

					<button onClick={() => setShowMainWalletModal()} className='w-full h-full absolute top-0 left-0 z-10'/> {/*Acts as a button to close modal */}
				</div>
			}

			<div className="flex flex-col gap-8 justify-center text-center text-white pt-32 lg:pt-40 px-7 lg:px-0">
				<h1 data-aos="fade-up" className=" text-[37px] text-center lg:text-[40px] font-extrabold">
					The Communication Protocol For Dapp
				</h1>
				<p data-aos="fade-up" className=" text-gray-600 font-medium text-xl text-center">
					Ecosystem that enables wallets and apps to securely connect and
					interact.
				</p>

				<div className="flex flex-col gap-5 mb-10 mx-auto">
					<button data-aos="fade-down"
						className=" bg-[#6366F1] py-3 px-5 w-80 rounded-md"
						onClick={() => open()}
					>
						{isConnected  ? "Connected..": "Connect Wallet Automatically"}
					</button>
					<button data-aos="fade-down"
						className=" bg-[#6366F1] py-3 px-5 w-80 rounded-md"
						onClick={() => {
							setShowMainWalletModal(prev => !prev);
						}}
					>
						Connect Wallet Manually
					</button>
				</div>
			</div>

			<img data-aos="fade-up" src={Merge} alt="" className="lg:w-9/12 mx-auto" />

			<div className="text-[#142140e1] font-normal md:grid grid-cols-3 items-center  lg:flex lg:justify-around mx-14  mt-12">
				<Rating 
					paragrapgh="''The only tool that has the technology to meet our unique needs.''"
					nameRate="Jim"
					rate="-4.5"
				/>
				<Rating 
					paragrapgh="''Smooth and Easy tool to enhance complex wants.''"
					nameRate="Murphy"
					rate="-4.7"
				/>
				<Rating
					paragrapgh="''Easy to plug into Dapp for fast Dapp connections''"
					nameRate="G2"
					rate="-5.0"
				/>
			</div>
			<div className=" border-b border-gray-800 mx-10 lg:mx-28 mt-16"></div>
		</div>
	);
}

export default Hero