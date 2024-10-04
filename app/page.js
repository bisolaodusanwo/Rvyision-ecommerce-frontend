"use client";

import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
    setLoading(true);
    let url = "http://localhost:5000/api/products";
    if (searchTerm) {
      url += `?q=${searchTerm}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
        setLoading(false);
      });
  }, [searchTerm]);

  const fetchProducts = () => {
    fetch(`http://localhost:5000/api/products?query=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}
