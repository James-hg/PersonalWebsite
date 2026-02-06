"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

export default function PathfinderProject() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
            {/* Header */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border"
            >
                <div className="max-w-5xl mx-auto px-6 py-4">
                    <Link href="/">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back Home
                        </motion.button>
                    </Link>
                </div>
            </motion.div>

            <main className="max-w-5xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                        Pathfinder
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        An AI-powered travel planning application that
                        transforms natural-language requests into structured,
                        location-aware itineraries.
                    </p>

                    <div className="flex gap-4 mb-12">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="#"
                            className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5"
                        >
                            <ExternalLink className="w-5 h-5" />
                            Stay tuned:)
                        </motion.a>
                    </div>

                    {/* Project details */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12"
                    >
                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                Overview
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Pathfinder is a full-stack travel planning app
                                built during a 24-hour hackathon. It allows
                                users to describe travel plans in natural
                                language and instantly receive a structured,
                                editable itinerary. The system combines large
                                language models with real-time mapping data to
                                produce location-aware recommendations and
                                optimized routes.
                                <br />
                                <br />
                                The project focuses on fast backend
                                orchestration, AI integration, and turning
                                unstructured user input into usable planning
                                data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                Key Features
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    "Natural-language travel planning (e.g., “3 days in Tokyo with food and museums”)",
                                    "AI-generated, structured itineraries with editable sections",
                                    "Location-aware recommendations powered by live map data",
                                    "Intelligent place suggestions and routing based on user intent",
                                    "End-to-end flow from free-text input to actionable travel plans",
                                ].map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-3 text-muted-foreground"
                                    >
                                        <span className="text-primary font-bold mt-1">
                                            •
                                        </span>
                                        <span>{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                Tech Stack
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    {
                                        category: "Frontend",
                                        tech: "React, TypeScript, Tailwind CSS",
                                    },
                                    {
                                        category: "Backend",
                                        tech: "Node.js, Express, GraphQL",
                                    },
                                    {
                                        category: "Database",
                                        tech: "PostgreSQL, Redis",
                                    },
                                    {
                                        category: "DevOps",
                                        tech: "Docker, AWS, GitHub Actions",
                                    },
                                    {
                                        category: "Tools",
                                        tech: "VS Code, Postman, Figma",
                                    },
                                    {
                                        category: "Testing",
                                        tech: "Jest, React Testing Library",
                                    },
                                ].map((item) => (
                                    <motion.div
                                        key={item.category}
                                        whileHover={{ y: -5 }}
                                        className="p-4 bg-card border border-border rounded-lg"
                                    >
                                        <h3 className="font-semibold text-foreground mb-2">
                                            {item.category}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {item.tech}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                Challenges & Solutions
                            </h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        challenge:
                                            "Parsing vague or ambiguous natural-language travel requests into structured itinerary data",
                                        solution:
                                            "Designed custom prompt structures and backend orchestration to consistently transform free-text input into well-defined itinerary objects.",
                                    },
                                    {
                                        challenge:
                                            "Ensuring recommendations are relevant to real-world locations and distances",
                                        solution:
                                            "Combined LLM-generated plans with real-time Google Maps data to validate locations, calculate routes, and refine suggestions.",
                                    },
                                    {
                                        challenge:
                                            "Delivering a complete product within a 24-hour hackathon timeframe",
                                        solution:
                                            "Prioritized backend logic and core user flow, enabling a functional end-to-end experience with minimal UI overhead.",
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-6 bg-card border border-border rounded-lg"
                                    >
                                        <h3 className="font-semibold text-foreground mb-2 text-primary">
                                            Challenge:
                                        </h3>
                                        <p className="text-muted-foreground mb-4">
                                            {item.challenge}
                                        </p>
                                        <h3 className="font-semibold text-foreground mb-2 text-primary">
                                            Solution:
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {item.solution}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                Learning Outcomes
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    "Gained experience translating natural-language user input into structured, actionable data using large language models.",
                                    "Learned how to combine LLM-generated outputs with real-time external APIs (Google Maps) to produce location-aware, practical results.",
                                    "Strengthened backend orchestration skills by designing workflows that transform free-text requests into editable travel itineraries.",
                                    "Developed an understanding of prompt design and constraint enforcement to keep AI-generated plans consistent and usable.",
                                    "Improved rapid prototyping skills by delivering a complete, end-to-end product within a 24-hour hackathon timeframe.",
                                ].map((outcome, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-3 text-muted-foreground"
                                    >
                                        <span className="text-primary font-bold mt-1">
                                            ✓
                                        </span>
                                        <span>{outcome}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </section>
                    </motion.div>
                </motion.div>
            </main>
        </div>
    );
}
