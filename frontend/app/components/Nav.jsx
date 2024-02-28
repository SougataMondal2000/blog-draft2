"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/logo.png";

import { PiToggleRightFill, PiToggleLeft } from "react-icons/pi";

const Nav = () => {
  const [dark, setDark] = useState(true);
  const handleDark = () => {
    setDark(!dark);
  };

  return (
    <nav className="flex justify-around items-center md:px-10 md:py-5 pt-2">
      <Image src={logo} alt="logo" width={60} height={60} />
      <button onClick={handleDark} className="">
        {dark === true ? (
          <PiToggleLeft className="w-6 h-6" />
        ) : (
          <PiToggleRightFill className="w-6 h-6 " />
        )}
      </button>
    </nav>
  );
};

export default Nav;
