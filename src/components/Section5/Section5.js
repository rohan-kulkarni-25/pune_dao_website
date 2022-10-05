import React from "react";
import Section5_card from "./Section5_card";
import pune from "./../../pune.jpg";

export default function Section5() {
  return (
    <div className="flex justify-evenly p-12 sm:flex-col">
      <div className="w-4/5">
        <p className="text-4xl font-mono font-semibold">Why Join Pune DAO ?</p>
        <img className="mt-24" src={pune} />
      </div>

      <div className="flex flex-col items-center gap-4 mt-12 ">
        <div className="w-2/4 bg-dodger-blue-50 p-4 flex flex-col gap-4 rounded-lg sm:w-fit">
          <p className="text-2xl font-mono text-left font-medium">
            Domain Expertise
          </p>
          <p className=" font-mono text-left">
            Our community of network , mentors, market makers, legal experts and
            other service producers will help you navigate the main challenges
            you’ll face building for Web3
          </p>
        </div>
        <div className="w-2/4 bg-dodger-blue-50 p-4 flex flex-col gap-4 rounded-lg  sm:w-fit">
          <p className="text-2xl font-mono text-left font-medium">Community</p>
          <p className=" font-mono text-left">
            Get instant access to a tight-knit community of exceptional peers.
            Our community members support each other, share advice, form
            partnerships and build together
          </p>
        </div>
        <div className="w-2/4 bg-dodger-blue-50 p-4 flex flex-col gap-4 rounded-lg  sm:w-fit">
          <p className="text-2xl font-mono text-left font-medium">Events</p>
          <p className=" font-mono text-left">
            We are open to collaboration and will help organise Hackathons
            ,meetups and demo days.
          </p>
        </div>
      </div>
    </div>
  );
}
