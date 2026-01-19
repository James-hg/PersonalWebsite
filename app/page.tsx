import Link from "next/link";
import { Fraunces, Space_Grotesk } from "next/font/google";

const headingFont = Fraunces({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const bodyFont = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function LandingPage() {
    return (
        <main
            className={`${bodyFont.className} relative min-h-screen overflow-hidden bg-[#f7f3ee] text-slate-900`}
        >
            <div className="absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-amber-200 via-rose-100 to-sky-200 blur-3xl opacity-70" />
            <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-br from-teal-200 to-amber-100 blur-2xl opacity-60" />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-16">
                <header className="flex flex-col gap-10 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                            Portfolio Index
                        </p>
                        <h1
                            className={`${headingFont.className} text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl`}
                        >
                            James Hoang’s selected projects in experience,
                            storytelling, and systems design.
                        </h1>
                        <p className="max-w-xl text-lg text-slate-600">
                            A mix of interactive prototypes, strategic research,
                            and product storytelling. Explore the latest work or
                            dive into full case studies.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/pathfinder"
                                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                            >
                                View Pathfinder Demo
                            </Link>
                            <Link
                                href="/iat210boardgame"
                                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900"
                            >
                                Board Game System
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                            <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm">
                                Product Design
                            </span>
                            <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm">
                                Research
                            </span>
                            <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm">
                                Interactive Systems
                            </span>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-white/40 bg-white/70 p-8 shadow-xl backdrop-blur">
                        <h2
                            className={`${headingFont.className} text-2xl font-semibold text-slate-900`}
                        >
                            Latest focus
                        </h2>
                        <p className="mt-3 text-sm text-slate-600">
                            Building human-centered tools that turn complex
                            decisions into calm, guided journeys.
                        </p>
                        <div className="mt-6 space-y-4 text-sm text-slate-700">
                            <div>
                                <p className="font-semibold text-slate-900">
                                    Pathfinder
                                </p>
                                <p className="text-slate-600">
                                    AI-guided travel planning with rich visual
                                    routing.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">
                                    Analog to digital
                                </p>
                                <p className="text-slate-600">
                                    Tabletop mechanics reimagined for digital
                                    collaboration.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">
                                    Cultural impact
                                </p>
                                <p className="text-slate-600">
                                    Games research focused on community and
                                    identity.
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Link
                        href="/pathfinder"
                        className="group rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                    >
                        <h3
                            className={`${headingFont.className} text-2xl font-semibold text-slate-900`}
                        >
                            Pathfinder Travel Advisor
                        </h3>
                        <p className="mt-3 text-sm text-slate-600">
                            Collaborative trip planning with Gemini-powered
                            itinerary editing, routing visuals, and a live demo
                            walkthrough.
                        </p>
                        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                            Explore Demo
                        </p>
                    </Link>

                    <Link
                        href="/iat210boardgame"
                        className="group rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                    >
                        <h3
                            className={`${headingFont.className} text-2xl font-semibold text-slate-900`}
                        >
                            Guard Duty Board Game
                        </h3>
                        <p className="mt-3 text-sm text-slate-600">
                            A social strategy tabletop system with asymmetric
                            roles, player psychology, and rapid prototypes.
                        </p>
                        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                            View Case Study
                        </p>
                    </Link>

                    <Link
                        href="/iat210researchessay"
                        className="group rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                    >
                        <h3
                            className={`${headingFont.className} text-2xl font-semibold text-slate-900`}
                        >
                            PUBG Research Essay
                        </h3>
                        <p className="mt-3 text-sm text-slate-600">
                            A cultural analysis of battle royale ecosystems,
                            community rituals, and digital identity.
                        </p>
                        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                            Read Essay
                        </p>
                    </Link>
                </section>
            </div>
        </main>
    );
}
