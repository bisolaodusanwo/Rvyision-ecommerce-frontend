"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/products`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.error("Error fetching product details:", err));
    }
  }, []);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="font-bold text-lg mb-4">Price: ${product.price}</p>
      <p className="font-bold text-lg mb-4">Stock: {product.countInStock}</p>
    </div>
  );
}
