import React from "react";

function ProductCard({ product }) {
  return (
    <div
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
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
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
  );
}

export default ProductCard;
