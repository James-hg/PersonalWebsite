"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, FilePen } from "lucide-react";

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
                        Insertion Sort Performance Analyzer
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        A systems-level performance analysis project examining
                        how algorithm design, compiler optimizations, and memory
                        behavior affect real-world execution time.
                    </p>

                    <div className="flex gap-4 mb-12">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="https://github.com/James-hg/cmpt295"
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold"
                        >
                            <Github className="w-5 h-5" />
                            View Code
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="/cmpt295/report.pdf"
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold"
                        >
                            <FilePen className="w-5 h-5" />
                            View Final Report
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
                                Insertion Sort Performance Analyzer is a CMPT
                                295 mini-project focused on understanding
                                performance beyond Big-O notation. The project
                                benchmarks multiple insertion sort
                                implementations and analyzes how data movement
                                strategies, compiler optimizations, branching
                                behavior, and cache locality impact runtime on
                                modern CPUs.
                                <br />
                                <br />
                                Rather than treating insertion sort as a purely
                                theoretical algorithm, this project evaluates
                                how low-level implementation details translate
                                into measurable performance differences.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                What Was Compared
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    "Standard insertion sort using C-style arrays",
                                    "Insertion sort using std::vector to evaluate abstraction overhead",
                                    "Optimized insertion sort using binary search and memmove",
                                    "std::sort as a baseline reference",
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
                            <br />
                            <p>
                                <strong>
                                    Each implementation was tested on sorted,
                                    reverse-sorted, random, and duplicate-heavy
                                    inputs across multiple input sizes.
                                </strong>
                            </p>
                        </section>
                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                Key Takeaways
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    "Compiler optimizations (-O2, -O3) dramatically reduce instruction count and execution time.",
                                    "Replacing branch-heavy loops with linear memory operations (memmove) significantly improves performance on modern CPUs.",
                                    "Memory access patterns and branch predictability have a major impact on runtime, often more than algorithmic complexity alone.",
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
                                        tech: "Python (FastAPI), ",
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
                                            "Understanding why algorithmically similar insertion sort implementations showed large performance differences in practice.",
                                        solution:
                                            "Benchmarked each variant under identical conditions and analyzed compiler output, performance counters, and memory behavior to identify the impact of branching, data movement, and abstraction overhead.",
                                    },
                                    {
                                        challenge:
                                            "Evaluating the real effect of compiler optimization flags beyond raw timing results.",
                                        solution:
                                            "Compiled the same code with -O0, -O2, and -O3, then compared execution time, generated assembly, and profiling data to connect optimizations to measurable performance changes.",
                                    },
                                    {
                                        challenge:
                                            "Identifying performance bottlenecks caused by memory access and branch prediction.",
                                        solution:
                                            "Used profiling tools and cache analysis to study memory behavior and branch misses, revealing that replacing branch-heavy loops with linear memory operations (memmove) significantly improved performance.",
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
                                    "Gained practical experience benchmarking and analyzing performance at the systems level.",
                                    "Learned how compiler optimizations, branching behavior, and cache locality influence runtime.",
                                    "Developed confidence reading assembly output and profiling data to explain performance differences.",
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
