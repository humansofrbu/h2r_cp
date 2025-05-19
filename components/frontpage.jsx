"use client";

import React from "react";
import Link from "next/link";

const FrontPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#131620] text-white px-4">
      <div className="relative w-full max-w-sm text-center flex flex-col items-center">

        {/* RBU Logo Top Right */}
        <div className="absolute top-4 right-4">
          <img
            src="/image7.png"
            alt="RBU Logo"
            className="w-[64px] h-[64px] object-contain"
          />
        </div>

        {/* Title Section */}
        <h1 className="text-[#FF5722] text-xl font-bold mt-8">HUMANS OF RBU</h1>
        <p className="text-base mt-1">brings</p>
        <h2
          className="text-2xl font-extrabold mt-1 mb-4 tracking-wider"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px white",
          }}
        >
          RBU WHISPERS!
        </h2>

        {/* Arrow Top */}
        <div className="relative w-full mb-2">
          <img
            src="/image2.png"
            alt="Curved Arrow Top"
            className="mx-auto w-6"
          />
        </div>

        {/* Whisper Message */}
        <div className="relative text-[18px] font-bold leading-[1.6] px-2 mb-4">
          <img
            src="/image1.png"
            alt="Red Slash Arrow"
            className="absolute left-[-20px] top-[30%] w-5"
          />
          <p>
            GOT A SECRET? A <br />
            STORY? OR JUST NEED <br />
            TO VENT? <br />
            <br />
            THIS IS YOUR <br />
            ANONYMOUS SPACE <br />
            TO SPEAK UP.
          </p>
        </div>

        {/* TAP HERE Button */}
        <Link href="/whisper">
          <div className="relative mb-6">
            <div className="bg-[#D2FF66] px-4 py-[6px] rounded">
              <span className="text-black font-bold text-[14px]">TAP HERE</span>
            </div>
            <img
              src="/image8.png"
              alt="Underline Image"
              className="absolute bottom-0 left-0 w-full"
            />
          </div>
        </Link>

        {/* Footer */}
        <p className="text-sm text-gray-300">
          YOUR VOICE MATTERS, EVEN IN WHISPERS
        </p>
      </div>
    </div>
  );
};

export default FrontPage;
