import React from "react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import "./PaginationControls.css";

function PaginationControls({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination-controls">
      <button
        id="previous"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`page-btn ${currentPage === 1 ? "disabled" : ""}`}
      >
        <FiChevronsLeft /> Previous
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`page-btn ${currentPage === page ? "active" : ""}`}
          >
            {page}
          </button>
        );
      })}

      <button
        id="next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`page-btn ${currentPage === totalPages ? "disabled" : ""}`}
      >
        Next <FiChevronsRight />
      </button>
    </div>
  );
}

export default PaginationControls;
