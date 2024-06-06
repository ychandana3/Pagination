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
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 7;
    const halfRange = Math.floor(maxPagesToShow / 2);

    let startPage = 1;
    let endPage = startPage + maxPagesToShow - 1;

    if (currentPage > maxPagesToShow) {
      if (currentPage < totalPages - maxPagesToShow + 1) {
        startPage = currentPage - halfRange;
        endPage = currentPage + halfRange;
      } else {
        startPage = totalPages - maxPagesToShow + 1;
        endPage = totalPages;
      }
    }

    if (startPage > 1) {
      pageNumbers.push(
        <button
          key={1}
          className="mx-1 px-2 py-1 border bg-white"
          onClick={() => onPageChange(1)}
        >
          1
        </button>,
        <span key="start-ellipsis" className="px-2 py-1">
          ...
        </span>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`mx-1 px-2 py-1 border ${
            currentPage === i ? "bg-blue-500 text-white" : "bg-white"
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      pageNumbers.push(
        <span key="end-ellipsis" className="px-2 py-1">
          ...
        </span>,
        <button
          key={totalPages}
          className="px-2 py-1 mx-1 border bg-white"
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        className={`px-2 py-1 mx-1 border ${
          currentPage === 1 ? "cursor-not-allowed" : ""
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <div className="flex">{renderPageNumbers()}</div>
      <button
        className={`px-2 py-1 mx-1 border ${
          currentPage === totalPages ? "cursor-not-allowed" : ""
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
