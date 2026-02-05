'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="border-t border-border bg-card/50"
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <p className="text-muted-foreground">
              © 2024 Your Name. Built with Next.js & Framer Motion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex gap-6"
          >
            {['GitHub', 'LinkedIn', 'Twitter'].map((link) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ color: '#5f6bb6' }}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}
