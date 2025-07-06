"use client";
import { Card } from "@/components/ui/card";

export default function HowToPlaySection() {
    return (
        <section id="how-to-play" className="py-16 px4 bg-slate-100">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-900 mb-12">
                        How to Play
                    </h2>
                </div>

                {/* Phase Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <Card className="p-8 bg-gray-50 border-2 border-gray-300">
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

                {/* Night Phase */}
                <div className="mt-12">
                    <Card className="p-8 bg-gray-50 border-2 border-gray-200">
                        <h3 className="text-3xl text-center font-bold text-blue-900 mb-8">
                            Night Phase
                        </h3>
                        <h3 className="text-2xl font-bold mb-8">
                            Action Order:
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-bold text-red-600 mb-6">
                                    Patron Actions (1-5)
                                </h4>
                                <div className="space-y-3">
                                    {[
                                        "Leader Patron - Target Player",
                                        "Disruptor Patron - Mute Player",
                                        "Recruiter Patron - Convert Attempt",
                                        "Tethered Patron - Choose Tether Target",
                                        "All Patrons - Confirm Sabotage",
                                    ].map((text, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start"
                                        >
                                            <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                                {index + 1}
                                            </span>
                                            <span className="text-gray-700">
                                                {text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-blue-600 mb-6">
                                    Lifeguard Actions (6-12)
                                </h4>
                                <div className="space-y-3">
                                    {[
                                        "Lifeguards - Assign Pool Guards",
                                        "Security - Learn Alignment",
                                        "Security Bodyguard - Protect Player",
                                        "Doctor - Protect Player",
                                        "Rescue Diver - Eliminate (if unlocked)",
                                        "Whistle Marshal - Silence Player",
                                        "Camera Observer - Observe Pool",
                                        "Supervisor - Learn Player Action",
                                    ].map((text, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start"
                                        >
                                            <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                                {index + 6}
                                            </span>
                                            <span className="text-gray-700">
                                                {text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <br />
                        <h3 className="text-2xl font-bold mb-8">Notes:</h3>
                        <ul className="text-gray-700 text-lg list-disc list-inside space-y-2 text-left">
                            <li>
                                Patrons wake together; keep eyes open until all
                                Patron roles finish.
                            </li>
                            <li>
                                Lifeguards wake one at a time in
                                Narrator-assigned order.
                            </li>
                            <li>
                                Recommended gestures:
                                <ul className="list-disc list-inside pl-5 space-y-1">
                                    <li>Point to choose a player.</li>
                                    <li>
                                        Patrons vote by displaying pool numbers
                                        with fingers; Leader Patron decide final
                                        choice.
                                    </li>
                                    <li>
                                        Rescue Diver: Narrator shows an X if
                                        ability is locked.
                                    </li>
                                    <li>
                                        Supervisor: thumbs up for action, thumbs
                                        down for none.
                                    </li>
                                    <li>
                                        Security: thumbs up for Lifeguard team,
                                        thumbs down for Patron team.
                                    </li>
                                    <li>
                                        Camera Observer: thumbs up if pool
                                        sabotaged, thumbs down if not.
                                    </li>
                                </ul>
                            </li>
                            Leader Patron:
                            <li>
                                If the Leader Patron is eliminated, the Regular
                                Patron to the right of the Leader becomes the
                                new Leader.
                            </li>
                            <li>
                                If no Regular Patrons are alive but other Patron
                                roles remain, the Patron role on the right of
                                the eliminated Leader takes over the Leader role
                                but loses their special ability immediately
                                (e.g., a Disruptor who becomes Leader can no
                                longer mute players).
                            </li>
                        </ul>
                    </Card>
                </div>

                {/* Result Phase */}
                <div className="mt-12">
                    <Card className="p-8 bg-yellow-50 border-2 border-yellow-300">
                        <h3 className="text-3xl font-bold text-center mb-8 text-yellow-800">
                            Result Phase
                        </h3>
                        <ul className="text-gray-700 text-lg list-disc list-inside space-y-2 text-left">
                            <strong>Narrator action:</strong>
                            <li>Announce eliminated players</li>
                            <li>Announce muted player</li>
                            <li>Check winning conditions</li>
                        </ul>
                    </Card>
                </div>

                {/* Day Phase */}
                <div className="mt-12">
                    <Card className="p-8 bg-red-50 border-2 border-red-200">
                        <h3 className="text-3xl font-bold text-center mb-8 text-red-900">
                            Day Phase
                        </h3>
                        <ul className="text-gray-700 text-lg list-disc list-inside space-y-2 text-left">
                            <strong>Voting & Defense:</strong>
                            <li>
                                After results are announced, players discuss
                                suspicions.
                            </li>
                            <li>
                                Players vote; ties or no votes skip elimination.
                            </li>
                            <li>
                                If a player receives the most votes, they get 60
                                seconds to defend themselves before a final vote
                                decides their elimination.
                            </li>
                            <li>
                                If the final vote results in a tie, no player is
                                eliminated, and the game proceeds to the next
                                Night Phase.
                            </li>
                        </ul>
                    </Card>
                </div>
                {/* Winning Condition */}
                <div className="mt-12">
                    <Card className="p-8 bg-green-50 border-2 border-green-200">
                        <h3 className="text-3xl font-bold text-center mb-8 text-green-900">
                            Winning Conditions
                        </h3>
                        <ul className="text-gray-700 text-lg list-disc list-inside space-y-2 text-left">
                            <li>
                                <strong>Lifeguards win:</strong> All Patrons are
                                eliminated or they survive the required number
                                of rounds without sabotage success.
                            </li>
                            <li>
                                <strong>Patrons win:</strong> Patrons equal or
                                outnumber Lifeguards, or they sabotage pools
                                successfully for the set number of rounds.
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>
            <div className="text-center mt-12">
                <a
                    href="/RuleBook.pdf"
                    target="_blank"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition"
                >
                    Download the Rule Book
                </a>
            </div>
        </section>
    );
}
