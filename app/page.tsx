'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Skills from '@/components/sections/skills'
import Projects from '@/components/sections/projects'
import Contact from '@/components/sections/contact'
import Footer from '@/components/footer'

export default function Page() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="overflow-hidden">
        {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  )
}
