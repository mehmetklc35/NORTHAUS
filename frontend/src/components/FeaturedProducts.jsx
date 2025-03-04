import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/featured-products/")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className="py-16 bg-[#f5f3ef]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 shadow-lg rounded-lg">
              <img src={product.image} alt={product.name} className="w-full h-60 object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600">{product.category}</p>
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-900">${product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through">${product.oldPrice}</span>
                )}
              </div>
              <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
