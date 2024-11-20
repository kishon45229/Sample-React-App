import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-primary text-white px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src={logo} className="h-8 w-auto" alt="logo" />
            </div>

            <button className="text-white text-3xl md:hidden focus:outline-none" onClick={toggleMenu}>☰</button>

            <div className="hidden md:flex space-x-6">
                <a href="#" className="text-lg">HOME</a>
                <a href="#" className="text-lg">SERVICES</a>
                <a href="#" className="text-lg">ABOUT US</a>
                <a href="#" className="text-lg">CONTACT US</a>
                <a href="#" className="text-lg">CAREERS</a>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-white z-50">
                    <button className="absolute top-4 right-6 text-3xl text-black focus:outline-none" onClick={toggleMenu}>✕</button>

                    <div className="flex flex-col items-start px-6 py-12 space-y-6">
                        <a href="#" className="text-lg text-black">HOME</a>
                        <a href="#" className="text-lg text-black">SERVICES</a>
                        <a href="#" className="text-lg text-black">ABOUT US</a>
                        <a href="#" className="text-lg text-black">CONTACT US</a>
                        <a href="#" className="text-lg text-black">CAREERS</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;