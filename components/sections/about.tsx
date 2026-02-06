"use client";

import { motion } from "framer-motion";

export default function About() {
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
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 },
        },
    };

    return (
        <section className="min-h-screen flex items-center py-20 px-6">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-4xl mx-auto w-full"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-4xl md:text-5xl font-bold text-foreground mb-8"
                >
                    About Me
                </motion.h2>

                <motion.div
                    variants={itemVariants}
                    className="prose prose-lg max-w-none"
                >
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        I'm a full stack developer with a stronger focus on
                        backend work, especially building projects that feel
                        realistic and actually useful, like automation tools and
                        systems that solve real problems. I started coding back
                        in grade 8 and built my first proper project in grade
                        11(finally phew), and I've been hooked ever since. I
                        love coding because there's nothing more motivating than
                        finishing something and seeing the results immediately.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        I'm especially interested in AI, which is also the
                        direction of my studies, and I enjoy exploring how it
                        can be applied in practical, meaningful ways. Outside of
                        my own projects, I'm a volunteer peer tutor for first
                        year CMPT courses, which I genuinely enjoy because it
                        lets me help others understand concepts that once
                        challenged me too, and it's also a way for me to revise
                        fundamental concepts.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        I'm currently working toward securing an internship
                        where I can apply what I've learned, contribute to real
                        projects, and continue growing as a developer *and yes,
                        make money*. When I'm not coding, you'll probably find
                        me playing sports like badminton, tennis, ping pong,
                        football, billiards, or getting into esports. I'm
                        comfortable working with Python, Java, C and C++,
                        JavaScript, and I have experience building backend
                        systems using FastAPI, React, Rest APIPs, PostgreSQL,
                        and Spring Boot.
                    </p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12"
                >
                    {[
                        { label: "Experience", value: "5+ years" },
                        { label: "Projects", value: "15+" },
                        { label: "Languages", value: "5+" },
                    ].map((stat) => (
                        <motion.div
                            key={stat.label}
                            whileHover={{ y: -5 }}
                            className="p-4 bg-card border border-border rounded-lg"
                        >
                            <p className="text-sm text-muted-foreground mb-2">
                                {stat.label}
                            </p>
                            <p className="text-2xl font-bold text-foreground">
                                {stat.value}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
