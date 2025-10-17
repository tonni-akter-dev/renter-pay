import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Reviews = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-h2 font-semibold text-primary-900 mb-2">
          Customer Reviews
        </h2>
        <p className="text-neutral-100 text-base font-medium ">
          Hear what our happy tenants say about Maple Grove Garden House
        </p>
      </div>
      <TestimonialSlider />
    </div>
  );
};

export default Reviews;
