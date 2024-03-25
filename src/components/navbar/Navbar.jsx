import React, { useState } from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useConnect, useEnsName } from "wagmi";
import Wallets from "../wallets/Wallets";
const Navbar = () => {
  const { open } = useWeb3Modal();
  // const { address, isConnected } = useAccount();
  const [showModal, setShowMainWalletModal] = useState(false);
  return (
    <>
      {showModal && (
        <div className="w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-[1000]  bg-black bg-opacity-30 backdrop-blur-sm">
          <div className="z-[100] select-none">
            <Wallets />
          </div>
          <button
            onClick={() => setShowMainWalletModal()}
            className="w-full h-full absolute top-0 left-0 z-10"
          />{" "}
          {/*Acts as a button to close modal */}
        </div>
      )}

      <div className=" bg-[#030303] flex justify-between items-center py-3 px-3 lg:px-8 fixed w-full z-[99999] top-0">
        <div className="logo">
          <svg
            class="r_ ra"
            width="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="0%"
                y1="32.443%"
                x2="104.18%"
                y2="50%"
                id="hlogo-a"
              >
                <stop stop-color="#FFF" stop-opacity=".299" offset="0%"></stop>
                <stop
                  stop-color="#7587E4"
                  stop-opacity="0"
                  offset="100%"
                ></stop>
              </linearGradient>
              <linearGradient
                x1="18.591%"
                y1="0%"
                x2="100%"
                y2="100%"
                id="hlogo-b"
              >
                <stop stop-color="#818CF8" offset="0%"></stop>
                <stop stop-color="#C7D2FE" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <path fill="#3730A3" d="M16 18.5V32l15.999-9.25V9.25z"></path>
              <path fill="#4F46E5" d="m0 23 16 9V18.501L0 9.251z"></path>
              <path
                fill-opacity=".64"
                fill="url(#hlogo-a)"
                d="M16 13 0 23l16 9 16-9z"
              ></path>
              <path
                fill="url(#hlogo-b)"
                d="M16 0 0 9.25l16 9.25 15.999-9.25z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="buttonAirDrop">
          <button
            className="py-2 px-4 cursor-pointer rounded-lg text-white bg-[#7162F5] font-medium text-sm"
            onClick={() => {
              setShowMainWalletModal((prev) => !prev);
            }}
          >
            Claim Airdrop
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
