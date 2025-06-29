"use client";
import { Waves } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-blue-200">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Waves className="w-8 h-8 text-blue-600" />
                        <span className="text-2xl font-bold text-blue-900">
                            Guard Duty
                        </span>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <a
                            href="#home"
                            className="text-blue-700 hover:text-blue-900 font-medium"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-blue-700 hover:text-blue-900 font-medium"
                        >
                            About
                        </a>
                        <a
                            href="#how-to-play"
                            className="text-blue-700 hover:text-blue-900 font-medium"
                        >
                            How to Play
                        </a>
                        <a
                            href="#roles"
                            className="text-blue-700 hover:text-blue-900 font-medium"
                        >
                            Roles
                        </a>
                        <a
                            href="#contact"
                            className="text-blue-700 hover:text-blue-900 font-medium"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
