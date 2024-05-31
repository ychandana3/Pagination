import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevPage = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1);
    }
  };

  //To display only 5 buttons at a time
  const maxPagesToShow = 5;
  let startPage = Math.max(0, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = startPage + maxPagesToShow;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(0, endPage - maxPagesToShow);
  }

  const pages = Array.from(
    { length: endPage - startPage },
    (_, i) => startPage + i
  );

  return (
    <div className="flex justify-center mt-4 space-x-2">
      <button
        className={`px-4 py-2 border rounded-l ${
          currentPage === 0 ? "bg-gray-200 cursor-not-allowed" : "bg-white"
        }`}
        onClick={handlePrevPage}
        disabled={currentPage === 0}
      >
        Previous
      </button>
      <div className="flex space-x-1">
        {pages.map((page) => (
          <button
            key={page}
            className={`px-4 py-2 border ${
              currentPage === page ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page + 1}
          </button>
        ))}
      </div>
      <button
        className={`px-4 py-2 border rounded-r ${
          currentPage === totalPages - 1
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-white"
        }`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
