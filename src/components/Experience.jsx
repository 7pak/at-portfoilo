import React, { useEffect, useRef, useState } from 'react'
import styles from './Experience.module.css'
import { useInView } from '../hooks/useInView'
import CompanyCard from './CompanyCard'
import ExperienceDetail from './ExperienceDetail'
import Timeline from './Timeline'
import { useI18n } from '../i18n/index.jsx'

const experiences = [
  {
    company: 'Monteej',
    role: 'Mobile Developer',
    dates: 'Jul 2025 — Present',
    location: 'Remote',
    url: null,
    logo: null,
    skills: ['Flutter', 'Waha', 'FCM', 'JWT/RBAC', 'Workflows', 'Deep Links', 'WebView'],
    bullets: [
      'Built CRM features integrating WhatsApp Business (Waha) with robust webhook flows.',
      'Implemented real-time notifications with Firebase Cloud Messaging (FCM).',
      'Designed secure authentication using JWT with role-based access control (RBAC).',
      'Created a dynamic workflow engine for approvals and automation rules.',
      'Improved deep link routing and WebView session handling for seamless navigation.',
      'Optimized API and UI performance for faster dashboard rendering under load.',
    ],
  },
  {
    company: 'Weblayer',
    role: 'Flutter Developer',
    dates: 'Jan 2024 — Jul 2025',
    location: 'Istanbul, Turkey',
    url: null,
    logo: null,
    skills: ['Flutter', 'Bloc', 'MVVM', 'Iyzico', 'WebView', 'Pusher'],
    bullets: [
      'Implemented secure authentication reducing unauthorized access by 35%.',
      'Designed multilingual dashboard with real-time search and localized content.',
      'Integrated Iyzico payments via WebView with 98% success rate.',
      'Applied Bloc + MVVM clean architecture for maintainability and speed.',
      'Developed ICRM dashboards for projects, announcements, and insights.',
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
  { year: '2025', title: 'Present Day', desc: 'Mobile developer at Monteej driving CRM and integrations.' },
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