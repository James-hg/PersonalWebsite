import Link from "next/link";

export default function LandingPage() {
    return (
        <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-white to-red-50 px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 text-center">
                Welcome to James Hoang’s IAT210 Projects
            </h1>

            <p className="text-lg text-gray-600 mb-12 text-center max-w-xl">
                Explore my work on digital game design: a custom-made board game
                and a deep research essay on PUBG’s cultural impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/iat210boardgame">
                    <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow hover:bg-blue-700 transition-all duration-200">
                        Board Game Project
                    </button>
                </Link>

                <Link href="/iat210researchessay">
                    <button className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-xl shadow hover:bg-red-700 transition-all duration-200">
                        Research Essay
                    </button>
                </Link>
            </div>
        </main>
    );
}
