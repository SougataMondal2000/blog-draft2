import Image from "next/image";
import React from "react";
import dummypf from "../assets/dummy-pf.jpg";

const BlogCard = ({ desc, title, blogImage }) => {
  return (
    <div className="w-[300px] h-fit p-4 border border-red-300 m-2 rounded-md">
      {/* <img src={blogImage} alt="" /> */}
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="text-sm my-2 text-wrap h-fit w-[280px]">{desc}</p>
      <section className="flex items-center gap-2">
        <Image
          src={dummypf}
          alt="logo"
          width={35}
          height={35}
          className="rounded-sm"
        />
        <div className="">
          <h2 className="font-bold text-xs text-[#EE5626]">Sougta Mondal</h2>
          <p className="text-xs">3 June, 2000</p>
        </div>
      </section>
    </div>
  );
};

export default BlogCard;
