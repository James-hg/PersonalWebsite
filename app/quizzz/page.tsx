"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

export default function QuizzzProject() {
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
                        Quizzz
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        An interactive quiz platform that turns lecture content
                        and documents into playable quizzes, with AI-assisted
                        editing for better question quality and variety.
                    </p>

                    <div className="flex gap-4 mb-12">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="https://github.com/James-hg/quizzz"
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold"
                        >
                            <Github className="w-5 h-5" />
                            View Code
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="https://quizzz.jameshoang.com/"
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
                                Quizzz is a full-stack quiz creation and play
                                platform built for fast revision workflows.
                                Users can import quizzes from DOCX/PDF or
                                generate new quizzes from lecture content, then
                                immediately play them in an interactive format.
                                An AI assistant helps clean up inputs, fill
                                missing answers, rephrase questions, and vary
                                numeric values to improve quiz quality and
                                replayability.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                Key Features
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    "Interactive quiz player with instant feedback and session flow (playable quiz experience)",
                                    "Document import (DOCX/PDF) to auto-extract questions, choices, and answers",
                                    "AI-assisted editing: fill missing answers, rephrase questions, vary numbers, improve consistency",
                                    "Lecture-to-quiz generation for quick practice sets",
                                    "Validation and error handling for messy real-world instructor formatting",
                                    "Export options for platform-ready quiz formats (if you support this)",
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
                                        tech: "Python (FastAPI), REST APIs",
                                    },
                                    {
                                        category: "Database",
                                        tech: "PostgreSQL",
                                    },
                                    {
                                        category: "DevOps",
                                        tech: "Docker, Vercel",
                                    },
                                    {
                                        category: "Tools",
                                        tech: "VS Code, Github",
                                    },
                                    {
                                        category: "LLM/AI",
                                        tech: "Gemma 3",
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
                                            "Handling inconsistent DOCX/PDF formatting (mixed bullets, numbering styles, missing labels, uneven spacing)",
                                        solution:
                                            "Built a parsing + validation pipeline with format-tolerant extraction rules and clear error reporting to keep imports reliable.",
                                    },
                                    {
                                        challenge:
                                            "Keeping quizzes playable even when source content is incomplete (missing answers, unclear phrasing)",
                                        solution:
                                            "Added AI-assisted workflows to complete missing fields and rewrite questions while enforcing formatting and validation constraints.",
                                    },
                                    {
                                        challenge:
                                            "Maintaining consistent user experience from “import/generate” to “play”",
                                        solution:
                                            "Designed a structured quiz data model and unified transformation steps so imported, AI-edited, and generated quizzes all play the same way.",
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
                                    "Developed experience designing a playable, user-focused quiz platform, balancing content generation, validation, and interactive quiz flow.",
                                    "Learned how to process unstructured real-world documents (DOCX/PDF) and reliably transform them into structured, reusable quiz data.",
                                    "Gained hands-on experience integrating AI-assisted workflows to enhance content quality, including completing missing answers, rephrasing questions, and generating quizzes from lecture material.",
                                    "Strengthened full-stack development skills by connecting frontend interactions with backend processing through RESTful APIs.",
                                    "Improved system design skills by enforcing consistent data models and validation rules across imported, AI-generated, and user-edited quizzes.",
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
