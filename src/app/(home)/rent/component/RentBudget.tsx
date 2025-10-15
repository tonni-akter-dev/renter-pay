import { Minus } from "@/app/utils/Icons";
import React from "react";
import PriceRangeSlider from "./PriceRangeSlider";

const RentBudget = () => {
  return (
    <div className="p-6 mb-4 rounded-xl border border-[#E6E9ED] bg-white">
      <div className="flex justify-between items-center  pb-3.5 border-b border-[#E5E9EE] mb-6">
        <h3 className="text-xl font-semibold text-[#252B37]">Rent Budget</h3>
        <Minus />
      </div>
      <PriceRangeSlider />
    </div>
  );
};

export default RentBudget;
