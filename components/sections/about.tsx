'use client'

import { motion } from 'framer-motion'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="min-h-screen flex items-center py-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto w-full"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          About Me
        </motion.h2>

        <motion.div variants={itemVariants} className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a Computer Science major with a passion for backend development and building scalable systems. I love
            solving complex problems with clean, efficient code and creating APIs and services that other developers
            enjoy using.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            My journey in computer science has taken me through full-stack development, but my heart lies in backend
            architecture, database design, and DevOps. I'm particularly interested in distributed systems,
            microservices, and cloud infrastructure.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            diving into technical blogs and documentation. I believe in continuous learning and staying curious about
            how systems work.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12"
        >
          {[
            { label: 'Experience', value: '3+ years' },
            { label: 'Projects', value: '15+' },
            { label: 'Languages', value: '5+' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5 }}
              className="p-4 bg-card border border-border rounded-lg"
            >
              <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
