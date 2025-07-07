"use client";
import { useState } from "react";

export default function BackstorySection() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="backstory" className="py-16 px-4 bg-slate-50">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-8">
                    Backstory
                </h2>
                <div className="max-w-4xl mx-auto text-left text-gray-700 text-lg space-y-6">
                    <p>
                        At Splash Funzone, the most popular outdoor swimming
                        pool in the city, summer is at its peak. The sun beats
                        down over the slimy, sunscreen contaminated water, as
                        families gather for their day trip barbecues to escape
                        the heat while their children splash and squeal in the
                        pools. But behind the cheerful splashes, a sinister
                        undercurrent flows
                    </p>
                    <p>
                        The pool is turning into the center of a bitter dispute:
                        a secret group of Patrons, frustrated by rising
                        admission costs and poor maintenance, have banded
                        together and are scheming against the lifeguards. By
                        night, these saboteurs plan to force the pool’s closure
                        through calculated acts of mischief and chaos: dye
                        bombs, drain clogs, and damage to the pool.
                    </p>
                    <p>
                        The lifeguards, the city’s first line of defense for of
                        fun and safety, are sworn to protect the pool at all
                        costs. They form a union of specialized roles, each
                        using their unique skills to detect, protect, and
                        neutralize threats. Under the cover of darkness, both
                        sides play a dangerous game of cat and mouse, each
                        plotting to achieve their goals before dawn reveals the
                        victors.
                    </p>
                    <p>
                        However, nobody knows who to trust. Hidden identities
                        and secret agendas mean friends can turn to enemies in a
                        blink of an eye, and a single mistake could spell
                        disaster for the pool, or save it for another summer
                        day.
                    </p>
                </div>
            </div>
            <div className="py-8 px-4 bg-slate-50 flex flex-col items-center">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                    {isExpanded ? "Hide Banner" : "Show Banner"}
                </button>

                <div
                    className={`overflow-hidden transition-max-height duration-700 ease-in-out shadow mt-6 rounded-2xl w-full max-w-3xl ${
                        isExpanded ? "max-h-[7000px]" : "max-h-0"
                    }`}
                >
                    <img
                        src="/images/banner.png"
                        alt="Guard Duty Banner"
                        className="w-full rounded-2xl object-contain"
                        sizes="1/2"
                    />
                    <p>Artwork by Kylie</p>
                </div>
            </div>
        </section>
    );
}
