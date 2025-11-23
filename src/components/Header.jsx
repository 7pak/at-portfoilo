import styles from './Header.module.css'
import React, { useEffect, useState } from 'react'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { Menu } from 'lucide-react'
import { useI18n } from '../i18n/index.jsx'

const navItems = [
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'skills', href: '#skills' },
  { key: 'team', href: '#team' },
  { key: 'contact', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useScrollSpy(['#home','#about','#experience','#projects','#skills','#team','#contact'], 80)
  const { t, lang, setLang } = useI18n()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.inner}>
          <a href="#home" className={styles.logo} aria-label="AT Software">AT</a>
          <button className={styles.menuBtn} onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            <Menu size={20} />
          </button>
          <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
            {navItems.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={(e) => onNavClick(e, i.href)}
                aria-current={activeId === i.href ? 'page' : undefined}
                className={activeId === i.href ? styles.active : ''}
              >
                {t(`nav.${i.key}`)}
              </a>
            ))}
          </nav>
          <div className={styles.actionsRow}>
            <button
              className={styles.langBtn}
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              aria-label={lang === 'ar' ? 'Switch to English' : 'Switch to Arabic'}
              title={lang === 'ar' ? 'Switch to English' : 'Switch to Arabic'}
            >
              {lang === 'ar' ? 'EN' : 'AR'}
            </button>
            <a className={`btn ${styles.resume}`} href="/at_resume.pdf" target="_blank" rel="noopener">{t('nav.resume')}</a>
          </div>
        </div>
      </div>
    </header>
  )
}