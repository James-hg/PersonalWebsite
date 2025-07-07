export default function ContributionSection() {
    return (
        <section id="team" className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-8">
                    Team Contributions
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto mb-6">
                    Each team member’s contributions are detailed below.
                    Percentages are approximate.
                </p>
                <ul className="space-y-4 text-left max-w-xl mx-auto">
                    <li>
                        <strong>Kylie Wawryk</strong>: 25% - Banner, Trailer,
                        Backstory Gallery, Logbook, Criteria Checklist,
                        Finalizing, Formatting.
                    </li>
                    <li>
                        <strong>Dami Kim</strong>: 25% - Website design,
                        Summary, Game Pillars, Backstory, Rulebook, Playtesting,
                        Game Dynamics.
                    </li>
                    <li>
                        <strong>James Hoang</strong>: 30% - Website development,
                        Core Statement, Backstory, Summary, Game pillars,
                        Rulebook, Playtesting, Flowchart, Game Dynamics.
                    </li>
                    <li>
                        <strong>Joshua Weekes</strong>: 10% - Analysis, Game
                        Concept, Idea/Theme.
                    </li>
                    <li>
                        <strong>Jamal Asmi</strong>: 10% - Analysis, Game
                        Concept, Idea/Theme.
                    </li>
                </ul>
                <div className="text-center mt-12">
                    <a
                        href="/ContributionLog.pdf"
                        target="_blank"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition"
                    >
                        Download the Contribution Log
                    </a>
                </div>
            </div>
        </section>
    );
}
