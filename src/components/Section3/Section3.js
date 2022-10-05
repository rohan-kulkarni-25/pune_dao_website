import React from "react";
import img1 from './../../img1.png'

export default function Section3() {
  return (
    <div className="flex  bg-dodger-blue-600 pt-12 pb-12 sm:flex-col-reverse">
      <div className="flex flex-col w-1/2 gap-8 m-12 sm:w-fit">
        <p className="text-left text-4xl font-mono font-semibold text-dodger-blue-50">
          We are putting the <br /> We in Web3
        </p>
        <p className="text-justify font-mono text-dodger-blue-200 text-lg">
          There is a huge rising demand for Web3 No-tech professionals:
          Community managers, Creators and Story tellers .Even more
          traditionally technical positions, like Developers, are seeking
          Evangelists and Advocates like never before. The PuneDAO Community
          educates up-and-coming Web3 community professionals and leaders.
        </p>
      </div>
      <img src={img1}/>
    </div>
  );
}
