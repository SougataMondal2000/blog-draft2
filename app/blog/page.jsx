import Image from "next/image";
import React from "react";
import dummypf from "../assets/dummy-pf.jpg";

const page = ({ title, desc, blogImage }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="md:w-[600px] w-full px-2">
        <h1 className="text-center text-[48px] font-bold">{title}</h1>
        <div className="flex justify-center items-center md:py-5 py-2">
          <section className="flex items-center gap-2">
            <Image
              src={dummypf}
              alt="logo"
              width={35}
              height={35}
              className="rounded-sm"
            />
            <div className="">
              <h2 className="font-bold text-xs text-[#EE5626]">
                Sougta Mondal
              </h2>
              <p className="text-xs">3 June, 2000</p>
            </div>
          </section>
        </div>
        <img src={blogImage} alt="" />
        <p className="font-medium leading-8">{desc}</p>
        <hr className="md:mt-4 mt-2" />
      </div>
    </div>
  );
};

export default page;
