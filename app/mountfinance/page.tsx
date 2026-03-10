"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

export default function MountFinanceProject() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
            {/* Header */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border"
            >
                <div className="max-w-5xl mx-auto px-6 py-4">
                    <Link href="/projects">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back
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
                        Mountain Finance - AI Personal Finance Web App
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        An AI-powered personal finance web app that helps users
                        track transactions, manage budgets, import receipts and
                        bank statements, and plan savings goals through
                        interactive dashboards and chat assistants.
                    </p>

                    <div className="flex gap-4 mb-12">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="https://github.com/James-hg/MountMadness2026"
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold"
                        >
                            <Github className="w-5 h-5" />
                            View Code
                        </motion.a>
                        {/* <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="https://quizzz.jameshoang.com/"
                            className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5"
                        >
                            <ExternalLink className="w-5 h-5" />
                            Live Demo
                        </motion.a> */}
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
                                Mountain Finance is a full-stack personal
                                finance platform built to help users, especially
                                students, understand and manage their money more
                                clearly. The app supports transaction tracking,
                                smart budgeting, savings goal planning,
                                recurring transactions, and financial reporting,
                                while also using AI to extract data from
                                receipts and bank statements. In addition to
                                dashboard analytics, it includes chat assistants
                                that can summarize spending, suggest budgets,
                                detect anomalies, and help users plan future
                                finances.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                Key Features
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    "Effortlessly manage your finances with AI-powered features that automatically categorize transactions, extract data from receipts, and offer personalized budgeting recommendations.",
                                    "Automatically allocate funds across categories, track your spending with dollar and percentage views, and get real-time budget health warnings to stay on track.",
                                    "Upload receipts and bank statements, and let our AI quickly extract and categorize your financial data, saving you hours of manual entry.",
                                    "Chat with a finance assistant that helps you set budgets, track goals, detect anomalies, and plan for the future; all tailored to your financial habits.",
                                    "Set and track savings goals with real-time progress updates, recommended monthly savings amounts, and insight into your ability to meet your goals.",
                                    "Gain clear insights with interactive charts and reports that track your income, expenses, savings, and financial trends, helping you make smarter, data-driven decisions.",
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
                                        tech: "React, JavaScript, CSS, Chart.js",
                                    },
                                    {
                                        category: "Backend",
                                        tech: "Python, FastAPI, Pydantic, Pydantic",
                                    },
                                    {
                                        category: "Database",
                                        tech: "PostgreSQL",
                                    },
                                    {
                                        category: "DevOps",
                                        tech: "Docker, Docker-compose, Nginx, Vercel",
                                    },
                                    {
                                        category: "AI & APIs",
                                        tech: "RestAPI, Gemini 2.5 Pro",
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
                                            "Handling messy and inconsistent financial documents such as receipt images and bank statements in different formats.",
                                        solution:
                                            "Built backend extraction workflows using AI-assisted parsing so users can upload receipts or statements, review extracted transactions, and save clean structured data into the system.",
                                    },
                                    {
                                        challenge:
                                            "Designing budgeting features that are flexible enough for different spending habits while still giving users actionable guidance.",
                                        solution:
                                            "Implemented a monthly budgeting system that can automatically allocate category limits, while still allowing users to manually override values and switch between percentage and dollar views.",
                                    },
                                    {
                                        challenge:
                                            "Making AI assistants useful for finance tasks without letting them perform risky write actions too freely.",
                                        solution:
                                            "Added controlled backend tool execution, conversation memory in PostgreSQL, and confirmation flows for sensitive actions such as goal planning and transaction creation.",
                                    },
                                    {
                                        challenge:
                                            "Keeping a wide set of finance features consistent across dashboards, reports, transactions, recurring rules, and goals.",
                                        solution:
                                            "Designed the app around structured REST APIs, reusable data models, and shared backend logic so that core finance data stays consistent across the platform.",
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
                                    "Developed stronger full-stack experience by building an end-to-end finance platform across frontend, backend, database, and deployment layers",
                                    "Learned how to design finance-focused user flows around transactions, budgets, goals, reports, and recurring activity",
                                    "Gained hands-on experience integrating Gemini AI for document parsing, financial insights, and assistant workflows",
                                    "Improved backend API design skills by supporting both standard CRUD operations and AI-assisted tool execution flows",
                                    "Strengthened system design thinking by connecting authentication, analytics, document imports, and budgeting into one cohesive product",
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
