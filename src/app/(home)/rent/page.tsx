"use client";
import { useState } from "react";
import Filters from "./component/Filters";
import PropertyCard from "./component/PropertyCard";
import Pagination from "./component/Pagination";
import CustomSelect from "./component/CustomSelect";
import { Property, SortOption } from "@/app/utils/type";
import { properties } from "@/app/utils/data";

export default function Home() {
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [propertiesList, setPropertiesList] = useState<Property[]>(properties);

  const handleSort = (sortValue: string) => {
    const value = sortValue as SortOption;
    setSortBy(value);
    const sorted = [...propertiesList];

    switch (value) {
      case "price-low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        sorted.reverse();
        break;
      default:
        break;
    }

    setPropertiesList(sorted);
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="mb-[115px]">
      <main className="">
        <div className="flex flex-col md:flex-row gap-6">
          <Filters />
          <div className="flex-1 ">
            <div className="bg-white flex items-center rounded-xl border w-full border-[#E6E9ED] p-2 mb-6 h-[74px]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4">
                <div className="flex items-center gap-4">
                  <p className="text-xl px-4 text-black font-semibold flex gap-1.5 items-center">
                    Property
                    <span className="font-medium text-[#697483] text-base ">
                      --- Showing result- (12)
                    </span>
                  </p>
                </div>
               <CustomSelect
                  options={[
                    { value: "featured", label: "Featured" },
                    { value: "price-low-high", label: "Price: Low to High" },
                    { value: "price-high-low", label: "Price: High to Low" },
                    { value: "newest", label: "Newest First" },
                  ]}
                  value={sortBy}
                  onChange={handleSort}
                />
              </div>
            </div>

            {/* Property Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {propertiesList.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={4}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
