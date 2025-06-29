export default function TimingSection() {
    return (
        <section id="insights" className="py-16 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-8">
                    Gameplay Insights
                </h2>
                <div className="space-y-8 max-w-3xl mx-auto text-left">
                    <div>
                        <h3 className="text-2xl font-bold text-blue-700 mb-2">
                            Main Game Dynamics
                        </h3>
                        <p className="text-gray-700">
                            Example: Lifeguards often coordinate fake
                            discussions to bait Patrons into revealing
                            themselves.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-blue-700 mb-2">
                            Trade-offs and Dilemmas
                        </h3>
                        <p className="text-gray-700">
                            Example: Choosing between guarding the same pool
                            every night or spreading out increases risk of
                            sabotage.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-blue-700 mb-2">
                            Typical Play Duration
                        </h3>
                        <p className="text-gray-700">
                            A full game session lasts approximately 45–60
                            minutes, depending on player discussions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
