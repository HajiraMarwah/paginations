import React, { useEffect, useState } from "react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

function Pagination() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const totalPages = 20; // fixed, as required

  useEffect(() => {
    // Fetch enough products to cover all 20 pages (200 products)
    fetch("https://dummyjson.com/products?limit=200")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
      .catch(() => setProducts([]));
  }, []);

  // Calculate paginated products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ width: "80%", margin: "20px auto", textAlign: "center" }}>
      <h2>Product List</h2>

      {/* Product Grid */}
      {currentProducts.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "15px",
            margin: "20px 0",
          }}
        >
          {currentProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "100%", height: "120px", objectFit: "cover" }}
              />
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                {product.title}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found</p>
      )}

      {/* Pagination Controls */}
      <div style={{ marginTop: "20px" }}>
        <button
          id="previous"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ marginRight: "5px" }}
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
                margin: "0 3px",
                fontWeight: currentPage === page ? "bold" : "normal",
                backgroundColor: currentPage === page ? "#007bff" : "#fff",
                color: currentPage === page ? "#fff" : "#000",
                border: "1px solid #ccc",
                padding: "5px 10px",
                borderRadius: "4px",
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
          style={{ marginLeft: "5px" }}
        >
          Next <FiChevronsRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
