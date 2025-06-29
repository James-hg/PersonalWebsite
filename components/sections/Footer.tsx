"use client";
import { Waves } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 px-4 bg-gray-900 text-white">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left: Branding */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Waves className="w-8 h-8 text-blue-400" />
                            <span className="text-2xl font-bold">
                                Guard Duty
                            </span>
                        </div>
                        <p className="text-gray-400">
                            A thrilling social deduction game where lifeguards
                            defend the pool against cunning saboteurs.
                        </p>
                    </div>

                    {/* Center: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="#home" className="hover:text-white">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#trailer" className="hover:text-white">
                                    Trailer
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-white">
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#backstory"
                                    className="hover:text-white"
                                >
                                    Backstory
                                </a>
                            </li>
                            <li>
                                <a href="#roles" className="hover:text-white">
                                    Roles
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#how-to-play"
                                    className="hover:text-white"
                                >
                                    How to Play
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#documentation"
                                    className="hover:text-white"
                                >
                                    Docs
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#quantitative-analysis"
                                    className="hover:text-white"
                                >
                                    Analysis
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#gameplay-insights"
                                    className="hover:text-white"
                                >
                                    Insights
                                </a>
                            </li>
                            <li>
                                <a href="#team" className="hover:text-white">
                                    Team
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
