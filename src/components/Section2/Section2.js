import React from 'react'
import Section2_Card from './Section2_Card'

export default function Section2() {
  return (
    <div className='flex justify-around pt-12 pb-12 sm:flex-col'>
      <div className="h-fit w-1/4 flex flex-col gap-4 m-12 bg-dodger-blue-100 p-4 rounded-xl sm:w-fit">
      <p className="text-2xl font-mono font-semibold">GET INVOLVED</p>
      <p className="text-justify font-mono">
        We're building a community of community builders. Join us in shaping the future of community in Web3.
      </p>
      <button className="font-mono text-lg font-semibold bg-dodger-blue-600 rounded-full p-2 w-fit place-self-center pr-12 pl-12 text-dodger-blue-50 mt-4">Join US</button>
    </div>
    <div className="h-fit w-1/4 flex flex-col gap-4 m-12 bg-dodger-blue-100 p-4 rounded-xl sm:w-fit">
      <p className="text-2xl font-mono font-semibold">Learn with Us</p>
      <p className="text-justify font-mono">
        Bootcamps, workshops,Events. Come learn with the Community.
      </p>
      <button className="font-mono text-lg font-semibold bg-dodger-blue-600 rounded-full p-2 w-fit place-self-center pr-12 pl-12 text-dodger-blue-50 mt-4">Get Started</button>
    </div>
    <div className="h-fit w-1/4 flex flex-col gap-4 m-12 bg-dodger-blue-100 p-4 rounded-xl sm:w-fit">
      <p className="text-2xl font-mono font-semibold">Work with Us</p>
      <p className="text-justify font-mono">
        Learn more about how our service DAO works and let us help grow your web3 community.
      </p>
      <button className="font-mono text-lg font-semibold bg-dodger-blue-600 rounded-full p-2 w-fit place-self-center pr-12 pl-12 text-dodger-blue-50 mt-4">Our Services</button>
    </div>
    </div>
  )
}
