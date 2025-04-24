import React, { useState } from "react";
import { FiSearch, FiMenu } from "react-icons/fi";
import Button from "../components/ui/button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-gradient-to-b from-white/80 to-white/10 backdrop-blur-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center gap-3">
          <img
            src="/images.png"
            alt="NortHaus Logo"
            className="h-10 w-10 rounded-xl shadow"
          />
          <span className="text-2xl font-extrabold tracking-wider uppercase text-neutral-900">
            NORTHAUS
          </span>
        </div>
        <nav className="hidden md:flex gap-8 items-center text-lg font-medium text-gray-700">
          <a
            href="#"
            className="relative hover:text-orange-500 transition after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300"
          >
            Mağaza
          </a>
          <a
            href="#"
            className="relative hover:text-orange-500 transition after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300"
          >
            Hakkımızda
          </a>
          <a
            href="#"
            className="relative hover:text-orange-500 transition after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300"
          >
            Blog
          </a>
          <a
            href="#"
            className="relative hover:text-orange-500 transition after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300"
          >
            İletişim
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <FiSearch className="text-gray-600 cursor-pointer" size={22} />
          <Button className="bg-orange-500 text-white px-6 py-2 rounded-xl font-semibold text-base shadow hover:bg-orange-600 transition">
            Alışverişe Başla
          </Button>
          <FiMenu
            className="text-gray-700 cursor-pointer md:hidden"
            size={28}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg absolute top-full left-0 w-full py-4 shadow-lg z-40">
          <nav className="flex flex-col items-center gap-6">
            <a href="#" className="text-gray-800 font-medium">
              Mağaza
            </a>
            <a href="#" className="text-gray-800 font-medium">
              İlham Al
            </a>
            <a href="#" className="text-gray-800 font-medium">
              Hakkımızda
            </a>
            <a href="#" className="text-gray-800 font-medium">
              Blog
            </a>
            <a href="#" className="text-gray-800 font-medium">
              İletişim
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
