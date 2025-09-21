import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import BeanbagLogo from "../assets/logo-beanbag.svg?react";

const Footer = () => {
  return (
    <footer className="bg-[url('/public/bg-photo.jpg')] bg-cover bg-center items-center text-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6 bg-black/8">
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center gap-1 mb-4 -mt-5">
          <BeanbagLogo className="h-10 w-auto text-red fill-current stroke-current shadow-sm" />
          <h1 className="text-xl font-serif font-bold">BeanBag Co.</h1>
          <p className="text-sm mt-1 lg:mt-0">All rights reserved © 2025 | Privacy Policy | Terms of Use</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">

          {/* Navigation & Newsletter */}
          <div className="flex flex-col mt-3 sm:flex-row gap-8">
            {/* Sitemap */}
            <div>
              <h3 className="text-lg font-serif font-semibold mb-2">SITE MAP</h3>
              <div className="flex flex-col space-y-1 text-sm">
                <Link to="/" className="hover:text-yellow-300">Home</Link>
                <Link to="/journeys" className="hover:text-yellow-300">Journey</Link>
                <Link to="/product" className="hover:text-yellow-300">Product</Link>
                <Link to="/contact" className="hover:text-yellow-300">Contact Us</Link>
              </div>
            
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-serif font-semibold mb-2">NEWSLETTER</h3>
              <p className="text-sm">Sign up for our latest updates & cozy coffee stories.</p>
              <form className="mt-2 flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#7a5c44] text-[#fdf6f0] placeholder-[#ffe8c4] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffe8c4] rounded-l-md w-full"
                />
                <button
                  type="submit"
                  className="bg-[#6b4e3a] text-[#fdf6f0] px-4 py-2 text-sm font-medium hover:bg-[#5c402f] transition-colors rounded-r-md"
                >
                  SIGN UP
                </button>
              </form>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-start lg:items-center">
            <h3 className="text-lg font-serif font-semibold mb-2">Follow Us:</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61579227211201" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffe8c4] transition-colors"><FaFacebookF size={20} /></a>
              <a href="https://www.instagram.com/beanbagcoffee.id/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffe8c4] transition-colors"><FaInstagram size={20} /></a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
