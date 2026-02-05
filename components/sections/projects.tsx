'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      id: 'xp',
      title: 'Experience Sharing Platform',
      description: 'A full-stack social platform for sharing and discovering personal experiences',
      tech: ['React', 'Node.js', 'MongoDB', 'Docker'],
      link: '/xp',
    },
    {
      id: 'iat210',
      title: 'Interactive Art Tool',
      description: 'Creative coding project exploring digital art generation and real-time rendering',
      tech: ['Three.js', 'WebGL', 'React', 'TypeScript'],
      link: '/iat210',
    },
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
        className="max-w-5xl mx-auto w-full"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          Featured Projects
        </motion.h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="group"
            >
              <Link href={project.link}>
                <div className="p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                      <p className="text-muted-foreground max-w-2xl">{project.description}</p>
                    </div>
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="mt-2"
                    >
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </motion.div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className="h-0.5 bg-gradient-to-r from-primary to-accent mt-6"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          variants={itemVariants}
          className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl text-center"
        >
          <h3 className="text-xl font-bold text-foreground mb-2">More projects coming soon!</h3>
          <p className="text-muted-foreground">
            Check back regularly for updates on new work and open-source contributions.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
