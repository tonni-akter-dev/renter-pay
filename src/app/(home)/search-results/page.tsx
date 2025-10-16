'use client';
import React, { useState } from "react";
import PropertyCard from "../rent/component/PropertyCard";
import { properties } from "@/app/utils/data";
import Pagination from "../rent/component/Pagination";

const SearchResults = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
 <div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
    <Pagination
      currentPage={currentPage}
      totalPages={4}
      onPageChange={handlePageChange}
    />
 </div>
  );
};

export default SearchResults;
