import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const PriceRangeSlider = () => {
  const [value, setValue] = useState([277000, 670000]);

  const handleInput = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="price-range-slider">
      <RangeSlider
        className="custom-range-slider"
        min={277000}
        max={607000}
        step={10000}
        value={value}
        onInput={handleInput}
      />
      <div className="w-full flex gap-2 mt-3">
        <button className="text-xs font-normal bg-[#F4F6F8] w-full flex flex-col gap-2.5 items-start text-[#697483] rounded-lg px-4 py-2 ">
          Minimum
          <div className="text-base font-medium  text-black">${value[0].toLocaleString()}</div>
        </button>
        <button className="text-xs font-normal bg-[#F4F6F8] w-full flex flex-col gap-2.5 items-start text-[#697483] rounded-lg px-4 py-2 ">
          Maximum
          <div className="text-base font-medium  text-black">${value[1].toLocaleString()}</div>
        </button>
       
      </div>
    </div>
  );
};

export default PriceRangeSlider;
