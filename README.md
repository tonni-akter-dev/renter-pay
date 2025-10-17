import React, { useState, useRef, useEffect } from 'react';

interface TestimonialCard {
  id: number;
  name: string;
  location: string;
  content: string;
  rating: number;
  imageUrl: string;
}

const TestimonialSlider: React.FC = () => {
  // Sample data for the cards
  const testimonials: TestimonialCard[] = [
    {
      id: 1,
      name: "James Carter",
      location: "Los Angeles, USA",
      content: "I love the natural light and spaciousness of this apartment. The 24/7 security gives me peace of mind. The neighborhood is quiet and the neighbors are friendly.",
      rating: 5,
      imageUrl: "https://z-cdn-media.chatglm.cn/files/5cc2a707-34ae-4557-aa26-fd1f341fc52c_pasted_image_1760684869084.png?auth_key=1792220877-57137f3c85d54cff8cd2271607e8189e-0-1d4870130c9cd916be8b85da87cac676"
    },
    {
      id: 2,
      name: "Emily Rodriguez",
      location: "New York, USA",
      content: "The location is perfect for my daily commute. The amenities are top-notch and the management is responsive. I couldn't ask for a better place to live.",
      rating: 5,
      imageUrl: "https://picsum.photos/seed/testimonial2/200/200.jpg"
    },
    {
      id: 3,
      name: "Michael Chen",
      location: "San Francisco, USA",
      content: "Modern design with excellent layout. The neighborhood is quiet yet close to everything I need. The building facilities are exceptional.",
      rating: 5,
      imageUrl: "https://picsum.photos/seed/testimonial3/200/200.jpg"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      location: "Chicago, USA",
      content: "Spacious rooms with great views. The building has excellent facilities and the community is friendly. I've been living here for two years and love it.",
      rating: 5,
      imageUrl: "https://picsum.photos/seed/testimonial4/200/200.jpg"
    },
    {
      id: 5,
      name: "David Williams",
      location: "Seattle, USA",
      content: "Perfect for my family. The schools nearby are great and the park is just a few blocks away. The apartment is spacious and well-maintained.",
      rating: 5,
      imageUrl: "https://picsum.photos/seed/testimonial5/200/200.jpg"
    }
  ];

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

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  // Calculate the transform value to center the active card
  const calculateTransform = () => {
    return `translateX(-${activeIndex * 1004 - 300}px)`;
  };

  // Calculate opacity for cards based on their position relative to the active card
  const getCardOpacity = (index: number) => {
    if (index === activeIndex) return 1;
    if (index === (activeIndex - 1 + testimonials.length) % testimonials.length) return 0.7;
    if (index === (activeIndex + 1) % testimonials.length) return 0.7;
    return 0.3;
  };

  // Calculate scale for cards based on their position relative to the active card
  const getCardScale = (index: number) => {
    if (index === activeIndex) return 1;
    return 0.95;
  };

  return (
    <div className="relative w-full mx-auto py-12 px-4 overflow-hidden">
      {/* Container with overflow hidden to hide the non-visible parts of cards */}
      <div className="relative mx-auto" style={{ width: '1604px', height: '500px' }}>
        {/* Slider container that will be transformed */}
        <div 
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ 
            transform: calculateTransform(),
            width: `${testimonials.length * 1004}px`
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 h-full cursor-pointer transition-all duration-700 ease-in-out"
              style={{ 
                width: '1004px',
                opacity: getCardOpacity(index),
                transform: `scale(${getCardScale(index)})`,
                transformOrigin: index < activeIndex ? 'right center' : 'left center'
              }}
              onClick={() => handleCardClick(index)}
            >
              <div className={`bg-white rounded-2xl shadow-2xl p-8 h-full flex flex-col border border-gray-200 ${index === activeIndex ? 'ring-4 ring-blue-500 ring-opacity-50' : ''}`}>
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover mr-6"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-lg text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-7 h-7 text-yellow-400 fill-current mr-1"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl text-gray-600 flex-grow leading-relaxed">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation controls positioned relative to the viewport */}
      <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg z-50">
        <button
          onClick={handlePrev}
          disabled={isTransitioning}
          className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous testimonial"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
              } disabled:cursor-not-allowed`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next testimonial"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;