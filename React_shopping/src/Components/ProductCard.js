import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  if (!product) return null; // safety check

  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
      <div style={{
        border: "1px solid #ddd",
        padding: "15px",
        width: "300px",
        borderRadius: "8px",
        margin: "10px",
        textAlign: "center",
        cursor: "pointer"
      }}>
        <img src={product.image} alt={product.title} style={{ width: "120px", height: "120px" }} />
        <h4>{product.title.slice(0, 20)}...</h4>
        <p><b>₹{product.price}</b></p>
        <p><b>⭐{product.rating.rate}</b></p>
      </div>
    </Link>
  );
}

export default ProductCard;
