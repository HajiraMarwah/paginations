import React, { useEffect, useState } from "react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

function Pagination() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const totalPages = 20; // fixed, as required

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=200")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
      .catch(() => setProducts([]));
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        width: "85%",
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Product List
      </h2>

      {/* Pagination Controls on TOP */}
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <button
          id="previous"
          onClick={() => handlePageChange(currentPage - 1)}
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
              onClick={() => handlePageChange(page)}
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
          onClick={() => handlePageChange(currentPage + 1)}
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

      {/* Product Grid */}
      {currentProducts.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {currentProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                padding: "15px",
                transition: "transform 0.2s ease",
                background: "#fff",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <p
                style={{
                  fontWeight: "bold",
                  marginTop: "12px",
                  fontSize: "16px",
                  color: "#333",
                }}
              >
                {product.title}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>No products found</p>
      )}
    </div>
  );
}

export default Pagination;
