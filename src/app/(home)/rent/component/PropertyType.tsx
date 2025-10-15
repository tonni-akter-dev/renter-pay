import { propertyType } from "@/app/utils/data";
import { Minus } from "@/app/utils/Icons";
import { PropertyTypeKey, PropertyTypeProps } from "@/app/utils/type";
import React from "react";

const PropertyType: React.FC<PropertyTypeProps> = ({
  propertyTypes,
  onHandlePropertyTypeChange,
}) => {
  return (
    <div className="p-6 mb-4 rounded-xl border border-[#E6E9ED] bg-white">
      <div className="flex justify-between items-center  pb-3.5 border-b border-[#E5E9EE] mb-3">
        <h3 className="text-xl font-semibold text-[#252B37]">Property Type</h3>
        <Minus />
      </div>
      <div className="space-y-3">
        {propertyType.map(({ key, label }) => {
          const typedKey = key as PropertyTypeKey;
          return (
            <label
              key={typedKey}
              className="flex items-center cursor-pointer select-none"
            >
              <input
                type="checkbox"
                checked={propertyTypes[typedKey]}
                onChange={() => onHandlePropertyTypeChange(typedKey)}
                className="hidden peer"
              />
              <span
                className={`w-4 h-4 rounded-[4px] flex items-center justify-center 
          bg-white  ${
            propertyTypes[typedKey] ? "border-0 " : "border-2"
          } border-gray-300`}
              >
                {propertyTypes[typedKey] && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M7.20156 3.91602C6.24678 3.91602 5.33111 4.2953 4.65598 4.97043C3.98085 5.64556 3.60156 6.56124 3.60156 7.51602V17.116C3.60156 18.0708 3.98085 18.9865 4.65598 19.6616C5.33111 20.3367 6.24678 20.716 7.20156 20.716H16.8016C17.7563 20.716 18.672 20.3367 19.3471 19.6616C20.0223 18.9865 20.4016 18.0708 20.4016 17.116V7.51602C20.4016 6.56124 20.0223 5.64556 19.3471 4.97043C18.672 4.2953 17.7563 3.91602 16.8016 3.91602H7.20156ZM16.6264 9.74082L10.6264 15.7408C10.5706 15.7967 10.5044 15.841 10.4315 15.8713C10.3586 15.9015 10.2805 15.9171 10.2016 15.9171C10.1226 15.9171 10.0445 15.9015 9.9716 15.8713C9.89871 15.841 9.8325 15.7967 9.77676 15.7408L7.37676 13.3408C7.2641 13.2282 7.2008 13.0753 7.2008 12.916C7.2008 12.7567 7.2641 12.6039 7.37676 12.4912C7.48943 12.3786 7.64223 12.3153 7.80156 12.3153C7.96089 12.3153 8.1137 12.3786 8.22636 12.4912L10.2016 14.4676L15.7768 8.89122C15.8325 8.83543 15.8988 8.79118 15.9717 8.76099C16.0445 8.7308 16.1227 8.71526 16.2016 8.71526C16.2805 8.71526 16.3586 8.7308 16.4315 8.76099C16.5044 8.79118 16.5706 8.83543 16.6264 8.89122C16.6821 8.947 16.7264 9.01323 16.7566 9.08612C16.7868 9.159 16.8023 9.23712 16.8023 9.31602C16.8023 9.39491 16.7868 9.47303 16.7566 9.54592C16.7264 9.6188 16.6821 9.68503 16.6264 9.74082Z"
                      fill="#6C0443"
                    />
                  </svg>
                )}
              </span>
              <span className="ml-2 text-base text-black font-medium">
                {label}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyType;
