import React from "react";
import BlogCard from "@/app/(home)/blog/components/BlogCard";
import BioData from "./components/data";
const Blog = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center">Our Blogs</h2>
      <p className="text-lg text-center mb-10">Read our recent blogs</p>
      <div className="grid grid-cols-2 gap-4">
       
      {BioData.map((blog)=>(<BlogCard key={blog.id} blog={blog}/>))}
      </div>
     
    </div>
  );
};

export default Blog;
