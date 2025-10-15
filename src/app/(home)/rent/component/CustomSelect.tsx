import { HeaderDropdown } from "@/app/utils/Icons";
import React, { useState } from "react";

interface SortOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: SortOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Sort By",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((option) => option.value === value) || {
    label: placeholder,
    value: "",
  };

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center  gap-4 justify-center ps-4 p-2 bg-[#F4F6F8] border border-gray-200 rounded-lg text-left text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
      >
        <div>
          <span className="text-xs text-[#697483] mb-1">{placeholder}</span>
          <div className="flex items-center text-black text-base font-medium justify-between w-full">
            <span>{selectedOption.label}</span>
          </div>
        </div>
        <HeaderDropdown />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleOptionClick(option.value)}
              className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
