"use client";

import { motion } from "framer-motion";

interface NavigationProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

export default function Navigation({
    activeSection,
    setActiveSection,
}: NavigationProps) {
    const sections = ["home", "about", "skills", "projects", "contact"];

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
                        <motion.button
                            key={section}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                            onClick={() => setActiveSection(section)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                                activeSection === section
                                    ? "text-primary-foreground"
                                    : "text-foreground hover:text-primary"
                            }`}
                        >
                            {activeSection === section && (
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
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </motion.button>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}
