import React from "react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("İletişim Mesajı:", formData);
    alert("Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.");
  };

  return (
    <section className="py-16 px-6 container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">İletişim</h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
        Bizimle iletişime geçmek için aşağıdaki formu doldurun. En kısa sürede size geri dönüş yapacağız.
      </p>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-md max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Adınız</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">E-posta</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mesajınız</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded font-semibold hover:bg-orange-600 transition"
        >
          Gönder
        </button>
      </form>
    </section>
  );
}