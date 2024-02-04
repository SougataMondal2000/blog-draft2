import Link from "next/link";
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-xs font-bold md:flex md:justify-around md:px-20 md:py-10 p-5">
      <p>
        Thanks for <span className="text-[#EE5626]">visiting!</span>
      </p>
      <Link href={"#"} className="underline">
        sougataofficial362000@gmail.com
      </Link>
      <div className="flex gap-2 items-center">
        <Link href="">
          <RiWhatsappFill className="w-4 h-4" />
        </Link>
        <Link href="">
          <FaFacebook className="w-4 h-4" />
        </Link>
        <Link href="">
          <FaGithub className="w-4 h-4" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
