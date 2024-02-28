"use client";

import { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";
import axios from "axios";

export default function Home() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/get")
      .then((response) => {
        setPost(response.data);
      })
      .catch((err) => {
        console.log(err, "Can't fetch data!");
      });
  }, []);
  console.log(post);
  return (
    <main className="md:px-20 px-4 md:pb-10">
      {post?.length <= 0 ? (
        <p className="font-bold text-center">Please come back later!</p>
      ) : (
        <div className="flex justify-start items-center flex-wrap">
          {post?.map((item) => (
            <BlogCard key={item._id} title={item.title} desc={item.desc} />
          ))}
        </div>
      )}
    </main>
  );
}
