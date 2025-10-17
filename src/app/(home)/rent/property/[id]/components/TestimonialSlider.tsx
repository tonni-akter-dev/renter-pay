import { testimonials } from "@/app/utils/data";
import Image from "next/image";
import React, { useState, useRef } from "react";

const TestimonialSlider: React.FC = () => {

  const [activeIndex, setActiveIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (index: number) => {
    if (index !== activeIndex && !isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex(index);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const calculateTransform = () => {
    return `translateX(-${activeIndex * 1004 - 300}px)`;
  };

  const getCardOpacity = (index: number) => {
    if (index === activeIndex) return 1;
    if (index === (activeIndex - 1 + testimonials.length) % testimonials.length)
      return 0.7;
    if (index === (activeIndex + 1) % testimonials.length) return 0.7;
    return 0.3;
  };

  const getCardScale = (index: number) => {
    if (index === activeIndex) return 1;
    return 0.95;
  };

  return (
    <div className="relative w-full mx-auto py-12 px-4 overflow-hidden">
      <div
        className="relative mx-auto"
      >
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out h-full items-center"
          style={{
            transform: calculateTransform(),
            width: `${testimonials.length * 1004}px`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 gap-8 justify-center items-center cursor-pointer transition-all duration-700 ease-in-out"
              style={{
                width: "1004px",
                opacity: getCardOpacity(index),
                transform: `scale(${getCardScale(index)})`,
                transformOrigin:
                  index < activeIndex ? "right center" : "left center",
              }}
              onClick={() => handleCardClick(index)}
            >
              <div
                className={`rounded-4xl p-8 lg:h-[380px] h-full flex lg:flex-row flex-col items-center
                ${index === activeIndex ? " lg:h-[422px] h-full mx-8" : ""}`}
                style={{
                  background:
                    " linear-gradient(270deg, #FAF5FF 0%, #FCF4FF 100%)",
                  boxShadow:
                    index === activeIndex
                      ? "0px 8px 28px 0px #14142B1A"
                      : "0px 7.2px 25.19px 0px #14142B1A",
                }}
              >
                <div className="flex-shrink-0 lg:w-[337px] lg:h-[358px] relative">
                  <div className="img_bg ps-3.5">
                    <Image  
                      width={323}
                      height={345}
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="w-full lg:w-[323px] lg:h-[320px] rounded-[86px] absolute top-[20px] lg:mr-6 object-cover"
                    />
                  </div>
                </div>
                <div className="flex-grow  justify-center lg:ml-[60px]">
                  <p className="text-xl text-black flex-grow font-medium mb-10">
                    {testimonial.content}
                  </p>

                  <div className="flex items-center mb-3">
                    <div>
                      <h3 className="text-h4 font-semibold text-black mb-2">
                        {testimonial.name}
                      </h3>
                      <p className="text-xl font-semibold text-neutral-100">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-7 h-7 text-primary-500 fill-current"
                        viewBox="0 0 21 21"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;