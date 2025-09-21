import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { MdCoffeeMaker,  MdProductionQuantityLimits, MdContactPhone } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { GiJourney } from "react-icons/gi";
import BeanbagLogo from "../assets/logo-beanbag.svg?react";





const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-[url('/public/bg-photo.jpg')] bg-cover bg-center text-white shadow-xl z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-4 bg-black/8">
                {/* Logo */}
                <div className="flex justify-between gap-2">

                    <BeanbagLogo className="h-9 w-auto text-red fill-current stroke-current shadow-md" />
                    
                    <Link to="/" className="text-3xl font-bold">
                        BeanBag Co.
                    </Link>
                </div>

                {/* Menu Desktop */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-yellow-300">Home</Link>
                    <Link to="/journeys" className="hover:text-yellow-300">Journey</Link>
                    <Link to="/product" className="hover:text-yellow-300">Product</Link>
                    <Link to="/contact" className="hover:text-yellow-300">Contact Us</Link>
                </div>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden focus:outline-none"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Sidebar */}
            {isOpen && (
                <div
                    className={`fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                    onClick={() => setIsOpen(false)}
                >
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
                    <div
                        className={`absolute top-0 right-0 h-full w-72 bg-gradient-to-b from-[#5b4635] to-[#4b3e2a] rounded-l-[40px] p-6 space-y-6 shadow-2xl transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Link
                            to="/"
                            className="flex items-center gap-3 text-lg font-semibold hover:text-yellow-200 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaHome /> Home
                        </Link>
                        <Link
                            to="/journeys"
                            className="flex items-center gap-3 text-lg font-semibold hover:text-yellow-200 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            <GiJourney /> Journey
                        </Link>
                        <Link
                            to="/product"
                            className="flex items-center gap-3 text-lg font-semibold hover:text-yellow-200 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            <MdProductionQuantityLimits /> Product
                        </Link>
                        <Link
                            to="/contact"
                            className="flex items-center gap-3 text-lg font-semibold hover:text-yellow-200 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            <MdContactPhone /> Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
