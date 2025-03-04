import React from "react";

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10 mt-16">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Shipping Information</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Warranty Information</a></li>
            </ul>
          </div>
  
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
  
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Join our community</h3>
            <p className="text-gray-400 mb-4">Enter your email to stay updated with our latest offers.</p>
            <div className="flex items-center bg-gray-800 p-2 rounded-md">
              <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent border-none outline-none text-white px-2" />
              <button className="bg-orange-500 px-4 py-2 rounded text-white hover:bg-orange-600 transition">
                Join
              </button>
            </div>
          </div>
        </div>
  
        {/* Bottom Text */}
        <div className="text-center text-gray-500 mt-10 text-sm">
          © {new Date().getFullYear()} NortHaus. All rights reserved.
        </div>
      </footer>
    );
  }