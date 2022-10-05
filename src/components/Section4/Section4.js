import React from "react";
import TeamCard from "./TeamCard";

export default function Section4() {
  return (
    <div className="pt-12 pb-12 gap-4 flex-col flex m-12">
      <div className="flex flex-col gap-4">
        <p className="text-4xl font-mono font-semibold">
          Accelerating the world's transition to Web3
        </p>
        <p className="font-mono text-lg">
          Our goal is simple to grow Web3 to 1 billion users by 2025
        </p>
      </div>
      <div className="flex justify-between bg-dodger-blue-100 p-12 rounded-lg mt-12 sm:flex-col ">
        <p className="font-mono text-3xl sm:mb-8">Mission</p>
        <p className="w-1/2 text-justify text-lg font-mono sm:w-fit">
          Web3 will dramatically change the lives of people all over the world.
          It allows for lower costs, better coordination and owenership,and
          novel use cases.
        </p>
      </div>
      <div className="flex justify-between bg-dodger-blue-100 p-12 rounded-lg mt-12 sm:flex-col sm:gap-8">
        <p className="font-mono text-3xl">Team</p>

        <div
          className="h-fit w-56 bg-white p-4 rounded-lg flex flex-col
        gap-2 sm:w-fit"
        >
          <img
            src="https://i.ibb.co/jwxVyNV/me.jpg"
            className="rounded-lg"
          />
          <p className="text-center text-xl font-mono ">Almas Sayyed</p>
          <p className="font-mono">Member @PUNE_DAO</p>
        </div>

        <div
          className="h-fit w-56 bg-white p-4 rounded-lg flex flex-col
        gap-2 sm:w-fit"
        >
          <img
            src="https://i.ibb.co/7YncpWj/Megha-Jain.jpg"
            className="rounded-lg"
          />
          <p className="text-center text-xl font-mono ">Megha Jain</p>
          <p className="font-mono">Member @PUNE_DAO</p>
        </div>
        <div
          className="h-fit w-56 bg-white p-4 rounded-lg flex flex-col
        gap-2 sm:w-fit"
        >
          <img
            src="https://i.ibb.co/hmwbBh5/Nitesh.jpg"
            className="rounded-lg"
          />
          <p className="text-center text-xl font-mono ">Nitesh Singh</p>
          <p className="font-mono">Member @PUNE_DAO</p>
        </div>
      </div>
    </div>
  );
}
