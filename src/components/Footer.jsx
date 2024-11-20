import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-primary text-white px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col items-start space-y-4">
                    <div className="flex items-center">
                        <img src={logo} className="h-10 w-auto mb-2" alt="logo" />
                    </div>
                    <p className="text-sm">Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective - your business results.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col items-start space-y-4">
                        <h2 className="text-lg font-semibold">Our Technologies</h2>
                        <ul className="space-y-2 text-sm">
                            <li>React</li>
                            <li>Gatsby</li>
                            <li>Next.js</li>
                            <li>Node.js</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start space-y-4">
                        <h2 className="text-lg font-semibold">Our Services</h2>
                        <ul className="space-y-2 text-sm">
                            <li>Social Media Marketing</li>
                            <li>Web and Mobile App Development</li>
                            <li>Data Analytics</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-white mt-10 pt-4 text-sm">
                <div className="flex justify-center items-center space-x-4">
                    <a href="#">Privacy Policy</a>
                    <span>|</span>
                    <a href="#">Terms and Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;