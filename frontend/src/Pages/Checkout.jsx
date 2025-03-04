import React from "react";
import { useState } from "react";

export default function Checkout() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    phone: "",
    paymentMethod: "credit_card",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sipariş Bilgileri:", formData);
    alert("Siparişiniz alınmıştır! Teşekkür ederiz.");
  };

  return (
    <section className="py-16 px-6 container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Ödeme Sayfası</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-md max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Ad Soyad</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Adres</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Şehir</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Telefon</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Ödeme Yöntemi</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="credit_card">Kredi Kartı</option>
            <option value="bank_transfer">Banka Havalesi</option>
            <option value="cash_on_delivery">Kapıda Ödeme</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded font-semibold hover:bg-orange-600 transition"
        >
          Siparişi Tamamla
        </button>
      </form>
    </section>
  );
}