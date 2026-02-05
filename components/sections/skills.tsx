'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML/CSS', 'JavaScript'],
    },
    {
      title: 'DevOps & Tools',
      skills: ['Docker', 'Git', 'AWS', 'CI/CD', 'Linux', 'Webpack'],
    },
    {
      title: 'Databases',
      skills: ['SQL', 'Redis', 'Elasticsearch', 'Firebase', 'Database Design', 'Optimization'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-6 bg-card border border-border rounded-xl transition-all"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, boxShadow: '0 5px 15px rgba(127, 107, 237, 0.2)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency breakdown */}
        <motion.div variants={itemVariants} className="mt-12 p-8 bg-card border border-border rounded-xl">
          <h3 className="text-xl font-bold text-foreground mb-6">Proficiency Levels</h3>
          <div className="space-y-4">
            {[
              { name: 'Backend Development', level: 90 },
              { name: 'Database Design', level: 85 },
              { name: 'Frontend Development', level: 75 },
              { name: 'DevOps & Cloud', level: 70 },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <motion.div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
