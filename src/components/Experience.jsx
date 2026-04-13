import React, { useEffect, useRef, useState } from 'react'
import styles from './Experience.module.css'
import { useInView } from '../hooks/useInView'
import CompanyCard from './CompanyCard'
import ExperienceDetail from './ExperienceDetail'
import Timeline from './Timeline'
import { useI18n } from '../i18n/index.jsx'

const experiences = [
  {
    company: 'MOONTIJ',
    role: 'Mobile Engineer',
    dates: 'Oct 2025 — Present',
    location: 'Saudi Arabia (Remote)',
    url: 'https://play.google.com/store/apps/details?id=com.moontij.corteksa',
    logo: null,
    skills: ['Flutter', 'BLoC/Cubit', 'WebSocket', 'Firebase FCM', 'Codemagic', 'Clean Architecture', 'Dartz'],
    bullets: [
      'Built a dynamic CRM engine rendering Tables, Kanban boards, grouped views, and Forms from server metadata, supporting 15+ field types and reducing feature delivery time by 70%.',
      'Engineered unified messaging hub integrating WhatsApp (WAHA & Cloud API), Facebook Messenger, and Instagram DMs with real-time WebSocket sync, handling 10,000+ messages daily.',
      'Implemented optimistic UI with a triple-matching message tracking algorithm, reducing perceived delivery time.',
      'Improved large dataset performance using Isolates for async sorting on 500+ records, achieving 40% faster renders.',
      'Developed actionable push notifications with in-notification reply and mark-as-read via Firebase FCM, increasing user response rate by 35%.',
      'Implemented secure authentication with AES/KeyStore (Android) and Keychain (iOS), plus concurrency-safe token refresh eliminating 100% of race condition failures.',
      'Architected scalable state management using BLoC/Cubit with Clean Architecture and functional error handling (Dartz Either), reducing code redundancy by 30%.',
      'Implemented CI/CD pipelines with Codemagic for automated multi-flavor builds, code signing, and delivery to Google Play and App Store, maintaining 99.2% crash-free sessions.',
    ],
  },
  {
    company: 'Script Media (Freelance)',
    role: 'Mobile Developer',
    dates: 'Jan 2026 — Apr 2026',
    location: 'Remote',
    url: 'https://kuwait-explorer-legacy.vercel.app/en',
    logo: null,
    skills: ['Flutter', 'BLoC', 'Dio', 'Firebase FCM', 'Google Maps', 'Clean Architecture'],
    bullets: [
      'Built Mawaqi3, a local business directory and service marketplace for Kuwait, from the ground up.',
      'Implemented company browsing by category with infinite-scroll pagination, favorites, and advanced search and filtering.',
      'Developed user authentication, company listing management, and profile features with full Arabic and English support.',
      'Integrated Firebase FCM for real-time push notifications and Google Maps for location-based discovery.',
      'Architected the app using BLoC pattern with Clean Architecture for a scalable and maintainable codebase.',
    ],
  },
  {
    company: 'Weblayer',
    role: 'Software Engineer',
    dates: 'Jan 2024 — Jul 2025',
    location: 'Istanbul, Turkey',
    url: null,
    logo: null,
    skills: ['Flutter', 'Bloc', 'MVVM', 'Iyzico', 'WebView', 'Pusher'],
    bullets: [
      'Delivered multiple applications across B2B marketplace, CRM, employee management, and e-commerce domains using Flutter as a cross-platform tool.',
      'Implemented core features including secure authentication, multilingual support, real-time search, payment gateway integration, and API-driven dashboards.',
      'Integrated Iyzico payments via WebView with 98% success rate.',
      'Applied Clean Architecture (MVVM) and structured state management (Bloc, GetX, Provider) for maintainable, scalable codebases.',
      'Developed internal CRM and employee management system (WebLayer ICRM) with dashboards, Kanban-based task tracking, and camera-based attendance.',
      'Engineered real-time chat with Pusher and dynamic employee profiles.',
    ],
  },
  {
    company: 'Turkish Marketer (Freelance)',
    role: 'Mobile/Backend Contributor',
    dates: '2024 — 2025',
    location: 'Remote',
    url: null,
    logo: null,
    skills: ['WebView', 'Deep Links', 'Session Management', 'API', 'Debugging'],
    bullets: [
      'Improved WebView reliability and behavior across multi-step flows.',
      'Implemented deep links for seamless navigation into app views.',
      'Fixed app vs website context issues for correct backend session differentiation.',
      'Delivered targeted bug fixes and UX improvements to raise stability.',
    ],
  },
  {
    company: 'Self-Taught Journey',
    role: 'Kotlin & Android Developer',
    dates: '2021 — 2023',
    location: 'Remote',
    url: null,
    logo: null,
    skills: ['Kotlin', 'Android Native'],
    bullets: [
      'Started coding with a focus on Kotlin and native Android.',
      'Built small apps emphasizing clean, simple, and well-written code.',
      'Established foundations in mobile development and pragmatic problem solving.',
    ],
  },
]

const milestones = [
  { year: '2021', title: 'Started Coding Journey', desc: 'Self-taught Kotlin and Android foundations.' },
  { year: '2024', title: 'First Professional Role', desc: 'Flutter dev; dashboards, payments, and real-time systems.' },
  { year: '2025', title: 'Founded AT Software', desc: 'Building premium products and client solutions.' },
  { year: '2025', title: 'Key Promotions & Transitions', desc: 'Freelance projects and cross-functional contributions.' },
  { year: '2026', title: 'Script Media — Mawaqi3', desc: 'Built a Kuwait business directory and marketplace app.' },
  { year: '2026', title: 'Present Day', desc: 'Mobile Engineer at MOONTIJ driving CRM and integrations.' },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const [switching, setSwitching] = useState(false)
  const cardRefs = useRef([])
  const { t } = useI18n()

  const { ref: headerRef, inView: headerIn } = useInView({ threshold: 0.12 })
  const { ref: listRef, inView: listIn } = useInView({ threshold: 0.12 })
  const { ref: detailRef, inView: detailIn } = useInView({ threshold: 0.12 })

  const onSelect = (idx) => {
    if (idx === active) return
    setSwitching(true)
    setActive(idx)
    setTimeout(() => setSwitching(false), 250)
  }

  const onListKeyDown = (e) => {
    const count = experiences.length
    let next = active
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (active + 1) % count
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (active - 1 + count) % count
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = count - 1
    if (next !== active) {
      onSelect(next)
      const el = cardRefs.current[next]
      if (el) el.focus()
    }
  }

  return (
    <div className={styles.section}>
      <div className={`container ${styles.wide}`}>
        <div ref={headerRef} className={`${styles.header} ${headerIn ? styles.headerRevealed : ''}`}>
          <span className={styles.index}>{t('experience.index')}</span>
          <h2 className={styles.title}>{t('experience.title')}</h2>
          <span className={styles.lineGradient} />
        </div>

        <div className={styles.layout}>
          <div
            ref={listRef}
            className={`${styles.companyList} ${listIn ? styles.listRevealed : ''}`}
            role="listbox"
            aria-label={t('experience.aria.selectCompany')}
            onKeyDown={onListKeyDown}
          >
            {experiences.map((item, idx) => (
              <CompanyCard
                key={item.company}
                item={item}
                active={active === idx}
                index={idx}
                onSelect={onSelect}
                buttonRef={(el) => (cardRefs.current[idx] = el)}
              />
            ))}
          </div>

          <div
            ref={detailRef}
            className={`${styles.detailWrapper} ${detailIn ? styles.detailRevealed : ''}`}
            aria-live="polite"
          >
            <div key={active} className={switching ? styles.fadeOut : styles.fadeIn}>
              <ExperienceDetail item={experiences[active]} switching={switching} />
            </div>
          </div>
        </div>

        <Timeline milestones={milestones} />

        {/* Subtle decorative elements */}
        <div className={styles.decor} aria-hidden>
          <span className={`${styles.floatSymbol} ${styles.brace}`}>{'{'}{'}'}</span>
          <span className={`${styles.floatSymbol} ${styles.chev}`}>{'< / >'}</span>
        </div>
      </div>
    </div>
  )
}