import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/products/${id}/`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Ürün verisi alınırken hata oluştu:", error));
  }, [id]);

  if (!product) {
    return <p className="text-center py-16">Ürün yükleniyor...</p>;
  }

  return (
    <section className="py-16 px-6 container mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Ürün Görseli */}
        <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />

        {/* Ürün Detayları */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-900 mb-4">{product.price} TL</p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">
            Sepete Ekle
          </button>
        </div>
      </div>
    </section>
  );
}