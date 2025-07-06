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
                        <strong>Kylie Wawryk</strong>: - .
                    </li>
                    <li>
                        <strong>Dami Kim</strong>: - .
                    </li>
                    <li>
                        <strong>James Hoang</strong>: - .
                    </li>
                    <li>
                        <strong>Joshua Weekes</strong>: - .
                    </li>
                    <li>
                        <strong>Jamal Asmi</strong>: - .
                    </li>
                    <p>Example:</p>
                    <li>
                        <strong>James Hoang</strong>: 20% - e.g. Website
                        development, Rule Book, Play Testing + Log, Game
                        Dynamics & Gameplay.
                    </li>
                    {/* <li>
                        <strong>John Smith</strong>: 30% – Website development,
                        visuals, and component illustrations.
                    </li>
                    <li>
                        <strong>Alice Lee</strong>: 30% – Playtesting,
                        documentation logs, and game balance analysis.
                    </li> */}
                </ul>
            </div>
        </section>
    );
}
