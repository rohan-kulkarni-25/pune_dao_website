import React from "react";

export default function Section2_Card() {
  return (
    <div className="h-fit w-1/4 flex flex-col gap-4 m-12 bg-dodger-blue-100 p-4 rounded-xl">
      <p className="text-2xl font-mono font-semibold">GET INVOLVED</p>
      <p className="text-justify font-mono">
        We are on a mission to bring more PuneDAO is built for enabling the
        Professionals tech/non-tech into Web3 stakeholders and professionals in
        the Web3 space
      </p>
      <button className="font-mono text-lg font-semibold bg-dodger-blue-600 rounded-full p-2 w-fit place-self-center pr-12 pl-12 text-dodger-blue-50 mt-4">Join US</button>
    </div>
  );
}
