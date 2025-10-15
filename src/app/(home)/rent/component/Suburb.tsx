import { Minus } from "@/app/utils/Icons";
import React from "react";
import AddressSearch from "./AddressSearch";

const Suburb = () => {
  return (
    <div className="p-6 mb-4 rounded-xl border border-[#E6E9ED] bg-white h-[280px]">
      <div className="flex justify-between items-center  pb-3.5 border-b border-[#E5E9EE] mb-3">
        <h3 className="text-xl font-semibold text-[#252B37]">Suburb</h3>
        <Minus />
      </div>
      <AddressSearch />
    </div>
  );
};

export default Suburb;
