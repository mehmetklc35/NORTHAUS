import React from "react";

export default function Hero() {
    return (
      <section className="relative bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="container mx-auto text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Craft Your Perfect Space</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Our curated collection combines timeless designs with modern comfort, helping you create a space where beauty, comfort, and relaxation meet.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">
            Shop Now
          </button>
        </div>
      </section>
    );
  }
  