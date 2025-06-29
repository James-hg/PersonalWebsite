"use client";
import { Card } from "@/components/ui/card";
import { Users, Waves, Timer } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="py-16 px-4 bg-gray-50">
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
                <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                </div>
            </div>
        </section>
    );
}
