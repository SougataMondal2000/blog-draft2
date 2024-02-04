import Image from "next/image";
import React from "react";
import dummypf from "../assets/dummy-pf.jpg";

const BlogCard = () => {
  return (
    <div className="w-[190px] h-fit px-2 py-4 border border-dashed">
      <h1 className="font-bold text-lg">Blog Title Blog Title Blog Title</h1>
      <p className="text-sm my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        speriores sit minus quia eum laboriosam tempore omnis possimus.
      </p>
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
