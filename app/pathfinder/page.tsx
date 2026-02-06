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
                        Experience Sharing Platform
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        A full-stack social platform for sharing and discovering
                        personal experiences with others
                    </p>

                    <div className="flex gap-4 mb-12">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="https://github.com"
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold"
                        >
                            <Github className="w-5 h-5" />
                            View Code
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="#"
                            className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5"
                        >
                            <ExternalLink className="w-5 h-5" />
                            Live Demo
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
                                This project is a comprehensive social platform
                                built with modern web technologies. It allows
                                users to share their personal experiences,
                                connect with others, and discover unique stories
                                from around the world. The platform includes
                                real-time notifications, user authentication,
                                and a sophisticated matching algorithm to
                                suggest relevant experiences.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                Key Features
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    "User authentication with OAuth integration",
                                    "Real-time experience feed with WebSocket support",
                                    "Advanced search and filtering capabilities",
                                    "User profile management and customization",
                                    "Community engagement through likes and comments",
                                    "Responsive design for mobile and desktop",
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
                                            "Scaling real-time notifications",
                                        solution:
                                            "Implemented WebSocket connections with Redis pub/sub for efficient message distribution",
                                    },
                                    {
                                        challenge:
                                            "Database query optimization",
                                        solution:
                                            "Added strategic indexing and implemented query caching with Redis",
                                    },
                                    {
                                        challenge: "User experience on mobile",
                                        solution:
                                            "Built responsive components and optimized bundle size for faster load times",
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
                    </motion.div>
                </motion.div>
            </main>
        </div>
    );
}
