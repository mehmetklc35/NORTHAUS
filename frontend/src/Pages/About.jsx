import React from "react";

export default function About() {
    return (
      <section className="py-16 bg-[#f5f3ef] text-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">About NortHaus</h1>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            At NortHaus, we believe in creating timeless furniture that brings comfort and elegance to every home. Our mission is to offer high-quality, sustainable, and beautifully crafted pieces that transform spaces into warm, inviting environments.
          </p>
          <img src="/about-image.jpg" alt="About NortHaus" className="mx-auto w-full md:w-2/3 rounded-lg shadow-lg" />
        </div>
      </section>
    );
  }