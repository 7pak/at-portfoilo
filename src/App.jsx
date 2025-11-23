import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import SocialBar from './components/SocialBar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTopButton from './components/ScrollTopButton'
import Loader from './components/Loader'
import CursorDot from './components/CursorDot'
import React, { useEffect, useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const onReady = () => {
      // Small delay for a smoother transition feel
      setTimeout(() => setLoading(false), 500)
    }
    if (document.readyState === 'complete') onReady()
    else window.addEventListener('load', onReady, { once: true })
    return () => window.removeEventListener('load', onReady)
  }, [])
  return (
    <>
      <Loader hidden={!loading} />
      <Header />
      <SocialBar />
      <main>
        <Hero />
        <About />
        <section id="experience" className="section">
          <Experience />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <Skills />
        <section id="team" className="section" />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
      <CursorDot />
    </>
  )
}

export default App
