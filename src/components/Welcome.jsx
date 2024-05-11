import React from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center item-center border-[0.5px] border-gray-400 text-white";

const Welcome = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br />
            Across The World
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world with the Dlt Africa Web-5 club
          </p>
          <button className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-t1-2x1 ${commonStyles}`}>Reliability</div>
            <div className={` ${commonStyles}`}>Security</div>
            <div className={`rounded-tr-2x1 ${commonStyles}`}>Etherum</div>
            <div className={`rounded-bl-2x1 ${commonStyles}`}>Easy Send</div>
            <div className={`${commonStyles}`}>Low Fees</div>
            <div className={`rounded-br-2x1 ${commonStyles}`}>Blockchain</div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-start justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <p className="text-black font-bold text-lg ">
                0x7b34CeD9....63FaaE
              </p>
              <p className="text-white font-semibold text-lg mt-1">Etereum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
