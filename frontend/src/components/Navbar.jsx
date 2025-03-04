import React from "react";
import { useState } from "react";
import { FiSearch, FiMenu } from "react-icons/fi";
import Button from "../components/ui/button";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#f5f3ef] shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="NortHaus Logo" className="h-8" />
          <div className="text-2xl font-bold">NortHaus</div>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-black">Shop</a>
          <a href="#" className="text-gray-700 hover:text-black">Inspiration</a>
          <a href="#" className="text-gray-700 hover:text-black">About Us</a>
          <a href="#" className="text-gray-700 hover:text-black">Blog</a>
          <a href="#" className="text-gray-700 hover:text-black">Contact</a>
        </nav>

        {/* Search & Buttons */}
        <div className="flex items-center space-x-4">
          <FiSearch className="text-gray-600 cursor-pointer" size={20} />
          <Button className="bg-orange-500 text-white px-4 py-2 rounded">Shop Now</Button>
          <FiMenu 
            className="text-gray-600 cursor-pointer md:hidden" 
            size={24} 
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>
    </header>
  );
}