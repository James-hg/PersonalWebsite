"use client";
import { Waves, Twitter, Facebook, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
    return (
        <footer id="contact" className="py-12 px-4 bg-gray-900 text-white">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Waves className="w-8 h-8 text-blue-400" />
                            <span className="text-2xl font-bold">
                                Guard Duty
                            </span>
                        </div>
                        <p className="text-gray-400">
                            The ultimate social deduction game that brings
                            summer fun to your game night.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="#about" className="hover:text-white">
                                    About the Game
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
                                <a href="#roles" className="hover:text-white">
                                    Meet the Roles
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Download Rules
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Connect With Us
                        </h3>
                        <div className="flex space-x-4">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-400 hover:text-white"
                            >
                                <Twitter className="w-5 h-5" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-400 hover:text-white"
                            >
                                <Facebook className="w-5 h-5" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-400 hover:text-white"
                            >
                                <Github className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>
                        &copy; 2024 Guard Duty: Lifeguards vs. Patrons. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
