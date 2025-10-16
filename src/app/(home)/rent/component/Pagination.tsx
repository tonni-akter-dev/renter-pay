import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = (current: number, total: number): (number | string)[] => {
    if (total <= 5) {
      const pages: number[] = [];
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
      return pages;
    }

    const pages: (number | string)[] = [];
    if (current <= 3) {
      // Show first few pages
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(total);
    } else if (current >= total - 2) {
      // Show last few pages
      pages.push(1);
      pages.push("...");
      for (let i = total - 4; i <= total; i++) {
        if (i >= 1) pages.push(i);
      }
    } else {
      // Middle pages with ellipsis
      pages.push(1);
      pages.push("...");
      for (let i = current - 1; i <= current + 1; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(total);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className=" p-4 mt-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex justify-between w-full items-center space-x-1">
          <button
            className={`px-3.5 py-2.5 flex gap-2 items-center rounded-md border border-[#0000001A] text-black
               hover:bg-gray-200 transition duration-200 ${
                 isFirstPage ? "opacity-50 cursor-not-allowed" : ""
               }`}
            onClick={() => !isFirstPage && onPageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            <FaArrowLeft /> Previous
          </button>
        <div className="flex gap-2">
            {pageNumbers.map((number, index) =>
            typeof number === "string" ? (
              <span
                key={`ellipsis-${index}`}
                className="px-3 py-1 text-gray-500 select-none"
              >
                {number}
              </span>
            ) : (
              <button
                key={number}
                className={`size-10 rounded-lg ${
                  currentPage === number
                    ? "bg-primary-500 text-base font-medium text-white"
                    : "bg-neutral-20 text-[#00000080] hover:bg-gray-200"
                } transition duration-200`}
                onClick={() => onPageChange(number)}
              >
                {number}
              </button>
            )
          )}
        </div>
          <button
            className={`px-3.5 py-2.5 flex gap-2 items-center rounded-md border border-[#0000001A] text-black
               hover:bg-gray-200 transition duration-200 ${
                 isLastPage ? "opacity-50 cursor-not-allowed" : ""
               }`}
            onClick={() => !isLastPage && onPageChange(currentPage + 1)}
            disabled={isLastPage}
          >
            Next <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
