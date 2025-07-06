import { useState } from "react";

type FlipCardProps = {
    frontImg: string;
    backImg: string;
    alt: string;
};

export default function FlipCard({ frontImg, backImg, alt }: FlipCardProps) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="relative w-64 h-96 perspective cursor-pointer mx-auto"
            onClick={() => setFlipped(!flipped)}
        >
            <div
                className={`absolute w-full h-full transition-transform duration-700 transform ${
                    flipped ? "rotate-y-180" : ""
                }`}
            >
                <img
                    src={frontImg}
                    alt={alt}
                    className="absolute w-full h-full rounded-lg backface-hidden"
                />
                <img
                    src={backImg}
                    alt={`${alt} Back`}
                    className="absolute w-full h-full rounded-lg backface-hidden transform rotate-y-180"
                />
            </div>
        </div>
    );
}
