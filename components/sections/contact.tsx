"use client";

import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Contact() {
    const contactMethods = [
        {
            icon: Mail,
            label: "Email",
            value: "chemhoang2304@gmail.com",
            href: "mailto:chemhoang2304@gmail.com",
        },
        {
            icon: Github,
            label: "GitHub",
            value: "@James-hg",
            href: "https://github.com/James-hg",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "/in/jameshoang06",
            href: "https://www.linkedin.com/in/jameshoang06",
        },
        {
            icon: FileText,
            label: "Resume",
            value: "PDF download",
            href: "/JH_resume_main.pdf",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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

    return (
        <section className="min-h-screen flex items-center py-20 px-6">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-3xl mx-auto w-full"
            >
                <motion.div
                    variants={itemVariants}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Have a question or project in mind? I'd love to hear
                        from you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactMethods.map((method) => {
                        const Icon = method.icon;
                        return (
                            <motion.a
                                key={method.label}
                                href={method.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    boxShadow:
                                        "0 10px 30px rgba(127, 107, 237, 0.1)",
                                }}
                                className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all group cursor-pointer"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="mb-4"
                                >
                                    <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                                </motion.div>
                                <h3 className="font-semibold text-foreground mb-1">
                                    {method.label}
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    {method.value}
                                </p>
                            </motion.a>
                        );
                    })}
                </div>

                {/* Message form */}
                <motion.div
                    variants={itemVariants}
                    className="mt-12 p-8 bg-card border border-border rounded-xl"
                >
                    <h3 className="text-xl font-bold text-foreground mb-6">
                        Send me a message
                    </h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="text"
                                placeholder="Your name"
                                className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                            />
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                            />
                        </div>
                        <motion.textarea
                            whileFocus={{ scale: 1.02 }}
                            placeholder="Your message"
                            rows={5}
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                        />
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow:
                                    "0 10px 30px rgba(127, 107, 237, 0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>
        </section>
    );
}
