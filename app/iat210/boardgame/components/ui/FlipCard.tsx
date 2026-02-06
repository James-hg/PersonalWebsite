"use client";
import { useState } from "react";

type FlipCardProps = {
    frontImg: string;
    backImg: string;
    alt: string;
};

export default function FlipCard({ frontImg, backImg, alt }: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="w-64 h-96 [perspective:1000px] cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                }`}
            >
                {/* Front Side */}
                <div className="absolute w-full h-full [backface-visibility:hidden]">
                    <img
                        src={frontImg}
                        alt={alt}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <img
                        src={backImg}
                        alt={`${alt} Back`}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
}
