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
            className="w-64 h-96 perspective cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div
                className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
                    isFlipped ? "rotate-y-180" : ""
                }`}
            >
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden">
                    <img
                        src={frontImg}
                        alt={alt}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
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
