"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

export default function XPProject() {
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
                        Escape from Windows
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        An interactive puzzle adventure game that recreates a
                        nostalgic Windows XP environment, blending exploration,
                        logic-based challenges, and narrative progression.
                    </p>

                    <div className="flex gap-4 mb-12">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="https://xhacks-2026.vercel.app/"
                            className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5"
                        >
                            <ExternalLink className="w-5 h-5" />
                            Live Demo
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="https://xhacks-2026.onrender.com/"
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold"
                        >
                            <ExternalLink className="w-5 h-5" />
                            Make sure you run backend first :)
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
                                Escape from Windows is a browser-based puzzle
                                adventure game built during xhacks 2026. Players
                                explore a simulated Windows XP–style desktop,
                                interact with familiar applications, and solve
                                interconnected puzzles to uncover clues and
                                unlock multiple endings.
                                <br />
                                <br />
                                The project focuses on creating a playable,
                                immersive experience while supporting complex
                                puzzle logic through a full-stack architecture.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                Key Features
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    "Interactive Windows XP–inspired desktop environment",
                                    "Puzzle-driven gameplay with exploration and narrative elements",
                                    "Multiple endings based on player choices and progression",
                                    "Clickable apps, files, and UI elements that act as puzzle components",
                                    "Replayable structure encouraging experimentation and discovery",
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
                                            "Recreating the look and feel of a Windows XP desktop while keeping the interface responsive and playable in a browser",
                                        solution:
                                            "Implemented custom UI components and styling to closely mimic desktop interactions while maintaining modern web performance.",
                                    },
                                    {
                                        challenge:
                                            "Coordinating game state and puzzle logic across multiple services (frontend, Java backend, Python logic)",
                                        solution:
                                            "Designed clear REST API boundaries and data contracts, allowing the frontend to remain decoupled from puzzle evaluation and progression logic.",
                                    },
                                    {
                                        challenge:
                                            "Designing puzzles that are challenging but accessible to a wide range of players",
                                        solution:
                                            "Iteratively tested puzzle difficulty and added multiple endings to reward different play styles and exploration paths.",
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
                                    "Gained experience building an interactive, browser-based game that balances user experience, gameplay logic, and technical constraints.",
                                    "Developed practical skills in full-stack architecture, coordinating a React frontend with Java and Python backends through RESTful APIs.",
                                    "Learned how to design and manage game state and puzzle logic across multiple services while keeping the frontend decoupled and responsive.",
                                    "Improved understanding of UI/UX design for interactive systems, particularly when recreating familiar desktop metaphors in a web environment.",
                                    "Strengthened debugging and deployment skills in multi-service environments using Docker and Docker Compose.",
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
