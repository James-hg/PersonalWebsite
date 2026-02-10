"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NavigationProps {
    activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
    const sections = [
        { id: "home", href: "/" },
        { id: "about", href: "/about" },
        { id: "skills", href: "/skills" },
        { id: "projects", href: "/projects" },
        { id: "contact", href: "/contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold text-foreground"
                >
                    {"@jameshoang"}
                </motion.div>

                <div className="flex gap-1">
                    {sections.map((section, index) => (
                        <Link key={section.id} href={section.href}>
                            <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                                activeSection === section.id
                                    ? "text-primary-foreground"
                                    : "text-foreground hover:text-primary"
                            }`}
                        >
                            {activeSection === section.id && (
                                <motion.div
                                    layoutId="activeBackground"
                                    className="absolute inset-0 bg-primary rounded-lg -z-10"
                                    transition={{
                                        type: "spring",
                                        bounce: 0.2,
                                        duration: 0.6,
                                    }}
                                />
                            )}
                            {section.id.charAt(0).toUpperCase() +
                                section.id.slice(1)}
                        </motion.span>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}
