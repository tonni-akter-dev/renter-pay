"use client";
import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="card bg-base-100 shadow-2xl p-5 rounded-2xl border-2 border-[#EBEDF0] hover:shadow-xl transition">
      {/* Image */}
      <figure>
        <img
          className="rounded-2xl w-full h-48 object-cover"
          src={blog?.img}
          alt={blog?.title}
        />
      </figure>

      {/* Date & Read time */}
      <div className="text-[#42526D] flex justify-between my-3 text-sm">
        <p>{blog?.date}</p>
        <p>{blog?.readTime}</p>
      </div>

      {/* Body */}
      <div className="card-body p-0">
        <h2 className="card-title text-lg font-semibold text-gray-800">
          {blog?.title}
        </h2>
        <p className="text-[#42526D] text-sm mt-1 line-clamp-2">
          {blog?.description}
        </p>
        <p className="text-gray-500 text-sm mt-3">
          By <span className="font-medium text-gray-700">{blog?.author}</span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
