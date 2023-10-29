import React from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

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
    <div className="flex justify-end mx-3 text-sm mt-6 gap-4 text-white">
      <div>
        <button
          onClick={handlePreviousClick}
          className="h-6 w-6 bg-emerald-500 rounded-md flex justify-center items-center"
        >
          <GrFormPrevious />
        </button>
      </div>
      <div className="page-number">
        {currentPage} of {totalPages}
      </div>
      <div>
        <button
          onClick={handleNextClick}
          className="h-6 w-6 bg-emerald-500 rounded-md flex justify-center items-center"
        >
          <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
