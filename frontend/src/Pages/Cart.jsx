import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // API'den veya localStorage'dan sepet verisini çekme
    fetch("http://localhost:8000/api/cart/")
      .then((response) => response.json())
      .then((data) => setCartItems(data))
      .catch((error) => console.error("Sepet verisi alınırken hata oluştu:", error));
  }, []);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    // API'ye istek atarak backend'den de ürünü kaldırabiliriz.
  };

  return (
    <section className="py-16 px-6 container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Alışveriş Sepeti</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Sepetiniz boş.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-white p-4 shadow-md rounded-md">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">{item.price} TL x {item.quantity}</p>
              </div>
              <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:text-red-700">
                Kaldır
              </button>
            </div>
          ))}
          <Link to="/checkout" className="block text-center bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition">
            Ödeme Sayfasına Geç
          </Link>
        </div>
      )}
    </section>
  );
}