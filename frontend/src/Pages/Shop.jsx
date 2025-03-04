import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Ürünler yüklenirken hata oluştu:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/categories/")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Kategoriler yüklenirken hata oluştu:", error));
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <section className="py-16 px-6 container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Mağaza</h1>
      
      {/* Kategori Filtreleme */}
      <div className="mb-6 text-center">
        <label className="mr-4 font-semibold">Kategori Seç:</label>
        <select
          className="p-2 border rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Tüm Ürünler</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>{category.name}</option>
          ))}
        </select>
      </div>
      
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-600">Seçilen kategoride ürün bulunamadı.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-6 shadow-md rounded-md">
              <img src={product.image} alt={product.name} className="w-full h-60 object-cover mb-4 rounded-md" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.price} TL</p>
              <Link to={`/product/${product.id}`} className="block text-center bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition">
                Ürünü İncele
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}