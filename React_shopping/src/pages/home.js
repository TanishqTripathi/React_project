import React, { useEffect, useState } from "react";
import Search from "../Components/Search";
import ProductCard from "../Components/ProductCard";

function Home() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const categories = [...new Set(data.map(item => item.category))];

  const filteredProducts = data
    .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(p => categoryFilter ? p.category === categoryFilter : true);

  return (
  <div style={{padding:"10px", marginLeft:"100px"}}>
  <div className="search-bar">
  <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

    <div style={{padding:"10px"}}>
      <select className="category-select" onChange={(e)=>setCategoryFilter(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((cat,i)=> <option key={i} value={cat}>{cat}</option>)}
      </select></div>
</div>
      <div style={{display:"flex", flexWrap:"wrap"}}>
        {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}

export default Home;

