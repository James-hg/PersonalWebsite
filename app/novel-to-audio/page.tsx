"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

export default function NovelToAudioProject() {
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
                        Novel to Audiobook
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        An automated pipeline that converts web novels into
                        long-form audiobooks using AI-assisted text processing
                        and text-to-speech synthesis.
                    </p>

                    <div className="flex gap-4 mb-12">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="https://github.com/James-hg/novel_to_audio"
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold"
                        >
                            <Github className="w-5 h-5" />
                            View Code
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href=""
                            className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5"
                        >
                            <ExternalLink className="w-5 h-5" />
                            Stay tuned
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
                                Novel to Audiobook is a Python-based automation
                                project that transforms raw web novel text into
                                coherent, chapter-length audiobooks. The system
                                handles text cleaning, segmentation, and
                                narration orchestration, removing the need for
                                manual preprocessing and voice recording.
                                <br />
                                <br />
                                The project focuses on building a reliable
                                pipeline for long-form audio generation rather
                                than short, single-prompt outputs.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                Key Features
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    "Automated conversion of web novels into audiobook-ready audio",
                                    "AI-assisted text cleaning to remove noise and normalize raw content",
                                    "Intelligent text segmentation for long-form narration",
                                    "End-to-end orchestration from raw text to synthesized audio files",
                                    "Support for chapter-length and multi-chapter content",
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
                                        category: "Graphics",
                                        tech: "Three.js, WebGL, GLSL",
                                    },
                                    {
                                        category: "Frontend",
                                        tech: "React, TypeScript, Canvas API",
                                    },
                                    {
                                        category: "Build Tools",
                                        tech: "Vite, Webpack",
                                    },
                                    {
                                        category: "Libraries",
                                        tech: "Perlin Noise, Math.js",
                                    },
                                    {
                                        category: "Performance",
                                        tech: "RequestAnimationFrame",
                                    },
                                    {
                                        category: "Testing",
                                        tech: "Jest, Vitest",
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
                                Technical Deep Dive
                            </h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Raw web novel content often contains inconsistent formatting, ads, and noise that degrade narration quality",
                                        description:
                                            "Integrated AI-assisted text preprocessing to normalize content and produce clean, TTS-ready inputs.",
                                    },
                                    {
                                        title: "Generating coherent audio for long chapters without TTS limits or voice inconsistency",
                                        description:
                                            "Implemented efficient text segmentation and orchestration to maintain narration flow across large inputs.",
                                    },
                                    {
                                        title: "Ensuring the pipeline scales beyond small samples to full novels",
                                        description:
                                            "Designed the system as a modular pipeline, allowing reliable processing of multi-chapter content.",
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
                                            {item.title}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {item.description}
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
                                    "Gained hands-on experience designing end-to-end automation pipelines for long-form content processing, from raw text ingestion to final audio output.",
                                    "Developed a deeper understanding of AI-assisted text preprocessing, including cleaning noisy real-world data and preparing inputs for downstream systems.",
                                    "Learned how to segment and orchestrate long-form text-to-speech workflows, balancing API limits, audio coherence, and narration quality.",
                                    "Strengthened skills in integrating cloud-based AI services (LLMs and TTS) into a reliable, repeatable production pipeline.",
                                    "Improved ability to design systems that scale beyond demos, focusing on robustness, modularity, and real-world constraints.",
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
