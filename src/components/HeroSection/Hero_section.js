import React from "react";

export default function Hero_section() {
  return (
    <div className="flex flex-col justify-center gap-4  align-middle bg-slate-600 h-screen bg-dodger-blue-600 ">
        <img src="https://i.ibb.co/XpFLv0G/Large-transparent-Pune-DAO.png" className="w-36 absolute top-8 left-8" />
        <img src="https://i.ibb.co/QbzG46t/web3dubai-1.jpg" className="w-36 absolute top-8 right-8" />
      <div>
        <h1 className="text-6xl align-middle text-dodger-blue-50 font-bold font-mono sm:text-4xl ">
          Accelerating the best
          <br /> Web3 Professionals
        </h1>
        <p className="text-dodger-blue-200 text-2xl font-mono sm:text-xl mt-8">
          We are on a mission to bring more Professionals tech/non-tech into
          Web3
        </p>
        {/* <button className="bg-white w-fit place-self-center p-4 pr-12 pl-12  rounded-full mt-8">
          <p className="font-semibold text-lg font-mono">
            Apply to Our Next Cohort
          </p>
        </button> */}
      </div>
    </div>
  );
}
