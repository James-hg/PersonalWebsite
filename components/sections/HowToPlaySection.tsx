"use client";
import { Card } from "@/components/ui/card";

export default function HowToPlaySection() {
    return (
        <section id="how-to-play" className="py-16 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-900 mb-12">
                        How to Play
                    </h2>
                </div>

                {/* Phase Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <Card className="p-8 bg-blue-50 border-2 border-blue-200">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                                1
                            </div>
                            <h3 className="text-2xl font-bold text-blue-900">
                                Night Phase
                            </h3>
                        </div>
                        <p className="text-gray-700">
                            All players close their eyes. The narrator calls on
                            roles to act in order, maintaining secrecy.
                        </p>
                    </Card>

                    <Card className="p-8 bg-yellow-50 border-2 border-yellow-300">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                                2
                            </div>
                            <h3 className="text-2xl font-bold text-yellow-800">
                                Results Phase
                            </h3>
                        </div>
                        <p className="text-gray-700">
                            The narrator reveals outcomes like eliminations and
                            muted players to all participants.
                        </p>
                    </Card>

                    <Card className="p-8 bg-red-50 border-2 border-red-200">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                                3
                            </div>
                            <h3 className="text-2xl font-bold text-red-900">
                                Day Phase
                            </h3>
                        </div>
                        <p className="text-gray-700">
                            Players discuss, vote, and potentially eliminate a
                            suspect through democratic process.
                        </p>
                    </Card>
                </div>

                {/* Pool Guarding System */}
                <Card className="p-8 bg-blue-50 border-2 border-blue-200">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">
                        Pool Guarding System
                    </h3>
                    <p className="text-gray-700 mb-4">
                        The game features more pools than guards (e.g., 4 pools,
                        3 guards). Lifeguards must strategically choose which
                        pools to guard each night, while Patrons attempt to
                        sabotage unguarded pools.
                    </p>
                    <p className="text-gray-700">
                        <strong>Key:</strong> If the chosen sabotage pool is
                        unguarded, sabotage succeeds and unlocks special
                        abilities!
                    </p>
                </Card>

                {/* Night Action Order */}
                <div className="mt-12">
                    <Card className="p-8 bg-white border-2 border-gray-200">
                        <h3 className="text-3xl font-bold text-center mb-8">
                            Night Action Order
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-bold text-red-600 mb-6">
                                    Patron Actions (1-5)
                                </h4>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                            1
                                        </span>
                                        <span className="text-gray-700">
                                            Leader Patron - Target Player
                                        </span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                            2
                                        </span>
                                        <span className="text-gray-700">
                                            Disruptor Patron - Mute Player
                                        </span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                            3
                                        </span>
                                        <span className="text-gray-700">
                                            Recruiter Patron - Convert Attempt
                                        </span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                            4
                                        </span>
                                        <span className="text-gray-700">
                                            All Patrons - Confirm Sabotage
                                        </span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                            5
                                        </span>
                                        <span className="text-gray-700">
                                            Tethered Patron - Choose Tether
                                            Target
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-blue-600 mb-6">
                                    Lifeguard Actions (5-12)
                                </h4>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                            5
                                        </span>
                                        <span className="text-gray-700">
                                            Whistle Marshal - Silence Player
                                        </span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                            6
                                        </span>
                                        <span className="text-gray-700">
                                            Rescue Diver - Eliminate (if
                                            unlocked)
                                        </span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                            7
                                        </span>
                                        <span className="text-gray-700">
                                            Lifeguards - Assign Pool Guards
                                        </span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                            8
                                        </span>
                                        <span className="text-gray-700">
                                            Supervisor - Learn Player Action
                                        </span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                            9
                                        </span>
                                        <span className="text-gray-700">
                                            Security - Learn Alignment
                                        </span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                            10
                                        </span>
                                        <span className="text-gray-700">
                                            Security Bodyguard - Protect Player
                                        </span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                            11
                                        </span>
                                        <span className="text-gray-700">
                                            Camera Observer - Observe Pool
                                        </span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                            12
                                        </span>
                                        <span className="text-gray-700">
                                            Doctor - Protect Player
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
