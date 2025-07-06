"use client";
import { Card } from "@/components/ui/card";
import {
    Users,
    Waves,
    Timer,
    Lightbulb,
    Target,
    ShieldCheck,
    UserRound,
} from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="py-16 px-4 bg-gray-100">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-900 mb-6">
                        About the Game
                    </h2>
                    <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12">
                        A thrilling social deduction game where teamwork and
                        cunning decide the fate of the pool! Players are
                        secretly divided into Lifeguards and Patrons, each with
                        unique abilities and objectives.
                    </p>
                </div>

                {/* Inspiration */}
                <div className="w-full mb-16 max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-bold text-blue-900 mb-4 text-center">
                        Inspiration
                    </h3>
                    <p className="text-gray-700 text-lg">
                        <em>Guard Duty: Lifeguards vs. Patrons</em> was inspired
                        by the classic social deduction game{" "}
                        <a
                            href="https://playwerewolf.co/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline transition"
                        >
                            Werewolf
                        </a>{" "}
                        and the chaotic energy of a busy summer pool. It
                        combines hidden roles and day-night phases from Werewolf
                        with the unique tension of pool operations, creating an
                        experience where deception and strategy meet the playful
                        setting of lifeguards protecting a public pool from
                        saboteurs.
                    </p>
                </div>

                {/* Three Pillars */}
                <h3 className="text-3xl font-bold text-blue-900 mb-4 text-center">
                    Three Game Pillars
                </h3>
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <Card className="text-center p-8 bg-white border-2 border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="flex justify-center mb-4">
                            <Lightbulb className="w-16 h-16 text-yellow-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900 mb-4">
                            What
                        </h3>
                        <p className="text-gray-600">
                            Guard Duty is a hidden-role, social deduction game
                            of lifeguards protecting a pool from saboteurs.
                        </p>
                    </Card>

                    <Card className="text-center p-8 bg-white border-2 border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="flex justify-center mb-4">
                            <Target className="w-16 h-16 text-red-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900 mb-4">
                            How
                        </h3>
                        <p className="text-gray-600">
                            Players use unique abilities during tense night
                            phases and strategic discussions during the day to
                            root out or conceal the Patrons.
                        </p>
                    </Card>

                    <Card className="text-center p-8 bg-white border-2 border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="flex justify-center mb-4">
                            {/* <ShieldCheck className="w-16 h-16 text-green-600" /> */}
                            <UserRound className="w-16 h-16 text-green-600" />
                            <UserRound className="w-16 h-16 text-green-600" />
                            <UserRound className="w-16 h-16 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900 mb-4">
                            Why
                        </h3>
                        <p className="text-gray-600">
                            To create an exciting, replayable experience full of
                            suspense, teamwork, and dramatic reveals that
                            mirrors the chaos of a crowded summer pool.
                        </p>
                    </Card>
                </div>

                {/* Original About Section Pillars */}
                {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <Card className="text-center p-8 bg-white border-2 border-gray-200">
                        <div className="flex justify-center mb-4">
                            <Users className="w-16 h-16 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900 mb-4">
                            Hidden Roles
                        </h3>
                        <p className="text-gray-600">
                            Secret team assignments create tension and mystery
                        </p>
                    </Card>
                    <Card className="text-center p-8 bg-white border-2 border-gray-200">
                        <div className="flex justify-center mb-4">
                            <Waves className="w-16 h-16 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900 mb-4">
                            Pool Strategy
                        </h3>
                        <p className="text-gray-600">
                            Strategic pool guarding vs sabotage mechanics
                        </p>
                    </Card>
                    <Card className="text-center p-8 bg-white border-2 border-gray-200">
                        <div className="flex justify-center mb-4">
                            <Timer className="w-16 h-16 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900 mb-4">
                            Night-Day Cycles
                        </h3>
                        <p className="text-gray-600">
                            Dynamic gameplay with secret actions and public
                            discussion
                        </p>
                    </Card>
                </div> */}
            </div>
        </section>
    );
}
