import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  
  // Create page numbers array
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-600">
          Showing <span className="font-medium">1-6</span> of <span className="font-medium">24</span> properties
        </div>
        <div className="flex items-center space-x-1">
          <button 
            className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition duration-200"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>
          {pageNumbers.map(number => (
            <button
              key={number}
              className={`px-3 py-1 rounded-md ${
                currentPage === number 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition duration-200`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          ))}
          <button 
            className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition duration-200"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;