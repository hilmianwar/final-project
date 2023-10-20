import React from "react";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-between mx-3 text-sm">
      <button
        onClick={handlePreviousClick}
        className="p-2 bg-emerald-500 rounded-md"
      >
        Prev
      </button>
      <div className="page-number">{currentPage}</div>
      <button
        onClick={handleNextClick}
        className="p-2 bg-emerald-500 rounded-md"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
