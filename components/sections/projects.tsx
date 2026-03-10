"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Project = {
    id: string;
    title: string;
    description: string;
    tech: string[];
    link: string;
};

export default function Projects() {
    const featuredProjects: Project[] = [
        {
            id: "quizzz",
            title: "Quizzz - AI Assisted Quiz Generation",
            description:
                "A full-stack app for students to revise via multiple choice questions",
            tech: ["Python FastAPI", "React", "PostgreSQL", "Docker"],
            link: "/quizzz",
        },
        {
            id: "pathfinder",
            title: "Stormhacks 2025 - Pathfinder",
            description: "A full-stack app trip planner",
            tech: ["Python FastAPI", "React", "SQLite", "Docker"],
            link: "/pathfinder",
        },
        {
            id: "xp",
            title: "Xhacks 2026 - Escape from Windows",
            description: "A click and point game on browser",
            tech: ["Java Spring Boot", "React", "PostgreSQL", "Docker"],
            link: "/xp",
        },
    ];
    const personalProjects: Project[] = [
        {
            id: "quizzz",
            title: "Quizzz - AI Assisted Quiz Generation",
            description:
                "A full-stack app for students to revise via multiple choice questions",
            tech: ["Python FastAPI", "React", "PostgreSQL", "Docker"],
            link: "/quizzz",
        },
        {
            id: "novel-to-audio",
            title: "Novel to Audiobook Automation",
            description: "Convert a text novel to an audiobook",
            tech: ["React", "Tailwind"],
            link: "/novel-to-audio",
        },
    ];
    const hackathons: Project[] = [
        {
            id: "pathfinder",
            title: "Stormhacks 2025 - Pathfinder",
            description: "A full-stack app trip planner",
            tech: ["Python FastAPI", "React", "SQLite", "Docker"],
            link: "/pathfinder",
        },
        {
            id: "xp",
            title: "Xhacks 2026 - Escape from Windows",
            description: "A click and point game on browser",
            tech: ["Java Spring Boot", "React", "PostgreSQL", "Docker"],
            link: "/xp",
        },
        {
            id: "mountfinance",
            title: "Mountain Finance 2026 - Mountain Finance",
            description: "A full-stack app personal finance tracker",
            tech: ["Python FastAPI", "React", "JavaScript", "PostgreSQL"],
            link: "/mountfinance",
        },
    ];
    const courseProjects: Project[] = [
        {
            id: "iat210-boardgame",
            title: "Guard Duty",
            description: "A board game prototype course project",
            tech: ["React", "Tailwind"],
            link: "/iat210",
        },
        {
            id: "red-corridor",
            title: "Red Corridor",
            description: "A grid-based maze game project",
            tech: ["Java", "JavaFX"],
            link: "/red-corridor",
        },
        {
            id: "cmpt295",
            title: "Insertion Sort Performance Analyzer",
            description: "A course mini project to analyze Insertion Sort",
            tech: ["C++", "Assembly"],
            link: "/cmpt295",
        },
    ];
    const categorizedSections = [
        { title: "Personal Projects", projects: personalProjects },
        { title: "Hackathons", projects: hackathons },
        { title: "Course Projects", projects: courseProjects },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
    };

    const renderProjectCard = (project: Project, featured = false) => (
        <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={featured ? { x: 10 } : { y: -4 }}
            className={`group ${featured ? "" : "h-full"}`}
        >
            <Link
                href={project.link}
                className={featured ? "" : "block h-full"}
            >
                <div
                    className={`bg-card border border-border rounded-xl hover:border-primary/50 transition-all cursor-pointer ${
                        featured ? "p-8" : "p-5 md:p-6 h-full flex flex-col"
                    }`}
                >
                    <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                            <h3
                                className={`font-bold text-foreground mb-2 ${
                                    featured
                                        ? "text-2xl"
                                        : "text-lg md:text-xl leading-tight"
                                }`}
                            >
                                {project.title}
                            </h3>
                            <p
                                className={`text-muted-foreground ${
                                    featured
                                        ? "max-w-2xl text-base"
                                        : "text-sm md:text-base"
                                }`}
                            >
                                {project.description}
                            </p>
                        </div>
                        <motion.div
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            className="mt-1 shrink-0"
                        >
                            <ArrowRight
                                className={`text-primary ${
                                    featured ? "w-6 h-6" : "w-5 h-5"
                                }`}
                            />
                        </motion.div>
                    </div>

                    <div
                        className={`flex flex-wrap gap-2 ${
                            featured ? "mt-6" : "mt-4"
                        }`}
                    >
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className={`bg-primary/10 text-primary rounded-full font-medium ${
                                    featured
                                        ? "px-3 py-1 text-sm"
                                        : "px-2.5 py-1 text-xs md:text-sm"
                                }`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        className={`h-0.5 bg-gradient-to-r from-primary to-accent ${
                            featured ? "mt-6" : "mt-4"
                        }`}
                    />
                </div>
            </Link>
        </motion.div>
    );

    return (
        <section className="min-h-screen flex items-center py-20 px-6">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-5xl mx-auto w-full"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-4xl md:text-5xl font-bold text-foreground mb-12"
                >
                    Featured Projects
                </motion.h2>

                <div className="space-y-8">
                    {featuredProjects.map((project) =>
                        renderProjectCard(project, true),
                    )}
                </div>

                <div className="mt-16 md:mt-20 space-y-14 md:space-y-16">
                    {categorizedSections.map((section) => (
                        <div key={section.title}>
                            <motion.h3
                                variants={itemVariants}
                                className="text-2xl md:text-3xl font-bold text-foreground mb-6"
                            >
                                {section.title}
                            </motion.h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                                {section.projects.map((project) =>
                                    renderProjectCard(project),
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to action */}
                <motion.div
                    variants={itemVariants}
                    className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl text-center"
                >
                    <h3 className="text-xl font-bold text-foreground mb-2">
                        More projects coming soon!
                    </h3>
                    <p className="text-muted-foreground">
                        Check back regularly for updates on new work and
                        open-source contributions.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
