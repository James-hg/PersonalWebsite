"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroProps {
    setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
    return (
        <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
            {/* Background animations */}
            <div className="absolute inset-0 -z-10">
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-2xl"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold text-foreground mb-6"
                >
                    Computer Science Student | Software Developer
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-muted-foreground mb-8"
                >
                    Backend-focused CS major crafting scalable, elegant
                    solutions
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex gap-4 justify-center flex-wrap"
                >
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 30px rgba(127, 107, 237, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveSection("projects")}
                        className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold transition-all"
                    >
                        View My Work
                    </motion.button>
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveSection("contact")}
                        className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all"
                    >
                        Get in Touch
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10"
            >
                <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </motion.div>
        </section>
    );
}
