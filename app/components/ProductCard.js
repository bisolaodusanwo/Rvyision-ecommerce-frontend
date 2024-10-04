

import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="font-bold text-lg mb-4">Price: ${product.price}</p>
      <Link href={`/products/${product._id}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          View Details
        </button>
      </Link>
    </div>
  );
}
