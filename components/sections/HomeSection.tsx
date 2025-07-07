"use client";

import { Badge } from "@/components/ui/badge";
import { Sun, Waves } from "lucide-react";

export default function HomeSection() {
    return (
        <section
            id="home"
            className="relative text-center text-white overflow-hidden min-h-screen flex items-start w-full pt-8"
            style={{
                backgroundImage: "url('/images/background.png')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 w-full px-4">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center mb-6">
                        <Sun className="w-12 h-12 mr-4 text-yellow-300" />
                        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
                            Guard Duty
                        </h1>
                        <Waves className="w-12 h-12 ml-4 text-blue-300" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-300 drop-shadow-md">
                        Lifeguards vs. Patrons
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto drop-shadow-md">
                        Lifeguards protect, Patrons sabotage. Only one side will
                        rule the pool.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <Badge className="text-lg px-4 py-2 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                            Hidden Roles
                        </Badge>
                        <Badge className="text-lg px-4 py-2 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                            Social Deduction
                        </Badge>
                        <Badge className="text-lg px-4 py-2 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                            Team Strategy
                        </Badge>
                        <Badge className="text-lg px-4 py-2 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                            10+ Players
                        </Badge>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>
    );
}
