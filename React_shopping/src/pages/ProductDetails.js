import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())  
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
   <div className="product-detail">
     <div
     className="product-info-card">
      <img src={product.image} alt={product.title} style={{ width: "200px" }} />
      <h2>{product.title}</h2>
      <p><b>₹{product.price}</b></p>
      <p>Category: {product.category}</p> 
      <p>Rating: ⭐{product.rating.rate}</p> 
    </div>
   </div>
  );
}

export default ProductDetails;