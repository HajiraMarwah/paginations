import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-img"
      />
      <p className="product-title">{product.title}</p>
    </div>
  );
}

export default ProductCard;
