import React from "react";

const DappPlug = () => {
  return (
    <>
      <div className=" grid justify-center mt-12 gap-16">
        <div data-aos="fade-down" className=" text-4xl lg:text-6xl text-center text-white font-semibold lg:w-[700px]">
          We make it easy to plug into Dapp.
        </div>
        <div>
          <button data-aos="zoom-in-up" className=" flex mx-auto py-4 px-7 lg:py-3 lg:px-6 rounded-md hover:bg-gray-600 bg-gray-700 font-medium text-white" style={{border:"0.1px light gray", transition: "0.2s all linear"}}>
            Back to Top
          </button>
        </div>
      </div>
    </>
  );
};

export default DappPlug;
