import Link from "next/link";
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="md:fixed md:bottom-0 w-full bg-[#EE5626]">
      <section className="text-xs font-bold md:flex md:justify-around md:px-20 md:py-10 p-5">
        <p>
          Thanks for <span className="text-[#EE5626]">visiting!</span>
        </p>
        <a href="#" className="underline ">
          sougataofficial362000@gmail.com
        </a>
        <div className="flex gap-2 items-center">
          <a href="#" className="text-black ">
            <RiWhatsappFill className="w-4 h-4" />
          </a>
          <a href="#" className="text-black ">
            <FaFacebook className="w-4 h-4" />
          </a>
          <a href="#" className="text-black ">
            <FaGithub className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
