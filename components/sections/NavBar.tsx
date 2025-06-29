"use client";
import Link from "next/link";
import { Waves } from "lucide-react";

export default function NavBar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-blue-200">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Waves className="w-8 h-8 text-blue-600" />
                    <span className="text-2xl font-bold text-blue-900">
                        Guard Duty
                    </span>
                </div>
                <div className="hidden md:flex space-x-6">
                    <Link
                        href="#home"
                        className="text-blue-700 hover:text-blue-900 font-medium"
                    >
                        Home
                    </Link>
                    {/* <Link
                        href="#trailer"
                        className="text-blue-700 hover:text-blue-900 font-medium"
                    >
                        Trailer
                    </Link> */}
                    <Link
                        href="#about"
                        className="text-blue-700 hover:text-blue-900 font-medium"
                    >
                        About
                    </Link>
                    {/* <Link
                        href="#backstory"
                        className="text-blue-700 hover:text-blue-900 font-medium"
                    >
                        Backstory
                    </Link> */}
                    <Link
                        href="#roles"
                        className="text-blue-700 hover:text-blue-900 font-medium"
                    >
                        Roles
                    </Link>
                    <Link
                        href="#how-to-play"
                        className="text-blue-700 hover:text-blue-900 font-medium"
                    >
                        How to Play
                    </Link>
                    <Link
                        href="#documentation"
                        className="text-blue-700 hover:text-blue-900 font-medium"
                    >
                        Docs
                    </Link>
                    {/* <Link
                        href="#quantitative-analysis"
                        className="text-blue-700 hover:text-blue-900 font-medium"
                    >
                        Analysis
                    </Link> */}
                    {/* <Link
                        href="#gameplay-insights"
                        className="text-blue-700 hover:text-blue-900 font-medium"
                    >
                        Insights
                    </Link>
                    <Link
                        href="#team"
                        className="text-blue-700 hover:text-blue-900 font-medium"
                    >
                        Team
                    </Link> */}
                </div>
            </div>
        </nav>
    );
}
