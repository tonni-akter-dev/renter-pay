// components/Reviews.tsx
import React from 'react';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
}

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">用户评价</h2>
      
      {reviews.length > 0 ? (
        <div className="space-y-4">
          {reviews.map(review => (
            <div key={review.id} className="border-b border-gray-200 pb-4 last:border-0">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-800">{review.name}</h3>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              
              <div className="mb-2">
                {renderStars(review.rating)}
              </div>
              
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">暂无评价</p>
      )}
    </div>
  );
};

export default Reviews;