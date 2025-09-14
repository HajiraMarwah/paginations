import React from "react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

function PaginationControls({ currentPage, totalPages, onPageChange }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "25px" }}>
      <button
        id="previous"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          marginRight: "8px",
          padding: "6px 12px",
          borderRadius: "6px",
          border: "1px solid #007bff",
          backgroundColor: currentPage === 1 ? "#ddd" : "#007bff",
          color: currentPage === 1 ? "#666" : "#fff",
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
        }}
      >
        <FiChevronsLeft /> Previous
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            style={{
              margin: "0 4px",
              fontWeight: currentPage === page ? "bold" : "normal",
              backgroundColor: currentPage === page ? "#007bff" : "#fff",
              color: currentPage === page ? "#fff" : "#000",
              border: "1px solid #ccc",
              padding: "6px 12px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            {page}
          </button>
        );
      })}

      <button
        id="next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          marginLeft: "8px",
          padding: "6px 12px",
          borderRadius: "6px",
          border: "1px solid #007bff",
          backgroundColor: currentPage === totalPages ? "#ddd" : "#007bff",
          color: currentPage === totalPages ? "#666" : "#fff",
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
        }}
      >
        Next <FiChevronsRight />
      </button>
    </div>
  );
}

export default PaginationControls;
