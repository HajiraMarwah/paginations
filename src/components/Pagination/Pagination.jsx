import React, { useEffect, useState } from "react";

import "./Pagination.css";
import ProductCard from "../ProductCard/ProductCard";
import PaginationControls from "../PaginationControls/PaginationControls";

function Pagination() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const totalPages = 20;

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
    <div className="pagination-container">
      <h2 className="pagination-title">Product List</h2>

      {/* Pagination Controls on TOP */}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Product Grid */}
      {currentProducts.length > 0 ? (
        <div className="product-grid">
          {currentProducts.map((product) => (
            <ProductCard   key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="no-products">No products found</p>
      )}
    </div>
  );
}

export default Pagination;
