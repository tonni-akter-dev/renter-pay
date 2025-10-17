'use client'
import React, { useState } from "react";
import BlogCard from "@/app/(home)/blog/components/BlogCard";
import { bioData } from "@/app/utils/data";
import Pagination from "../rent/component/Pagination";
import Container from "@/components/shared/Container";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <Container>
      <h2 className="text-4xl font-semibold text-center">Our Blogs</h2>
      <p className="text-lg text-center mb-10">Read our recent blogs</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bioData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={4}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default Blog;
