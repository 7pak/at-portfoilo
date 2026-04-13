import React, { useState } from 'react'
import styles from './Projects.module.css'
import { useInView } from '../hooks/useInView'
import { Github, ExternalLink, Folder } from 'lucide-react'
import { useI18n } from '../i18n/index.jsx'

const featuredProjects = [
  {
    label: 'Featured Project',
    title: 'Corteksa — Enterprise CRM Platform',
    image: '/corteks_icon.png',
    alt: 'Corteksa CRM app icon',
    desc:
      'Enterprise CRM mobile app featuring a dynamic engine that renders Tables, Kanban boards, grouped views, and Forms from server metadata. Includes unified multi-channel messaging (WhatsApp, Messenger, Instagram) with real-time WebSocket sync, optimistic UI, and scalable architecture powered by Clean Architecture and BLoC.',
    tech: ['Flutter', 'BLoC/Cubit', 'WebSocket', 'Firebase', 'Codemagic', 'Clean Architecture'],
    github: undefined,
    demo: 'https://play.google.com/store/apps/details?id=com.moontij.corteksa',
  },
  {
    label: 'Featured Project',
    title: 'Mawaqi3 — Local Business Directory & Marketplace',
    image: '/mawaqi3_logo.jpg',
    alt: 'Mawaqi3 app logo',
    desc:
      'A local business directory and service marketplace for Kuwait. Users can browse companies by category, save favorites, and manage their own listings. Features real-time push notifications, search and filtering, user profiles with Arabic and English support, and a trust and verification system for businesses.',
    tech: ['Flutter', 'BLoC', 'Dio', 'Firebase FCM', 'Google Maps', 'Clean Architecture'],
    github: undefined,
    demo: 'https://kuwait-explorer-legacy.vercel.app/en',
  },
  {
    label: 'Featured Project',
    title: 'Recallly — AI Voice-to-CRM App',
    image: '/recallly_logo.png',
    alt: 'Recallly app logo',
    desc:
      'An AI-powered voice-to-CRM native Android app for field professionals. Tap the mic, talk naturally about a field visit, and the app transcribes and extracts structured CRM data automatically. Features dual-mode transcription (online and offline via whisper.cpp), AI extraction via Gemini 2.5 Flash, PDF export, Google Calendar integration, and offline-first architecture.',
    tech: ['Kotlin', 'Jetpack Compose', 'Gemini AI', 'whisper.cpp', 'Room', 'Firebase Auth', 'Clean Architecture'],
    github: undefined,
    demo: 'https://play.google.com/store/apps/details?id=com.at.recallly',
  },
  {
    label: 'Featured Project',
    title: 'Autoinvo — Receipt & Expense Manager',
    image: '/autoinvo/auto_invo_graph.png',
    alt: 'Autoinvo app screen showing receipt list',
    desc:
      'Autoinvo is a smart receipt management and invoicing app built for simplicity, speed, and reliability. Users can scan receipts using the camera or upload from their gallery, then filter and export them as PDFs. It supports full offline functionality with automatic sync when online — perfect for tracking expenses on the go.',
    tech: ['Flutter', 'Firebase Auth', 'Cloud Firestore', 'Firebase Storage', 'Crashlytics', 'Analytics', 'camera', 'image_picker', 'PDF', 'Bloc'],
    github: undefined,
    demo: 'https://play.google.com/store/apps/details?id=com.at.autoinvo.auto_invo',
  },
]

const otherProjects = [
  {
    title: 'B2B Marketer — Turkish Manufacturers Marketplace',
    image: '/b2b_preview.jpg',
    alt: 'B2B Marketer app preview',
    desc:
      'A B2B e-commerce platform connecting Turkish manufacturers with global buyers, particularly in Arab markets. It spans textiles, electronics, food, and machinery — facilitating seamless trade and helping boost exports. Uses clean architecture, reliable payments, and in-app browsing for a cohesive experience.',
    tech: ['Flutter', 'Bloc', 'Dio', 'MVVM', 'SharedPreferences', 'WebView', 'Iyzico', 'REST API'],
    github: undefined,
    demo: 'https://www.turkishmarketer.com',
  },
  {
    title: 'Swift eCommerce',
    image: '/swift_present.png',
    alt: 'Swift eCommerce app preview',
    desc: 'A sleek eCommerce app focused on fast shopping, clean architecture, and dynamic price updates — simplifying product browsing and purchasing.',
    tech: ['Flutter', 'BLoC', 'GetIt', 'Dio', 'MVVM', 'SharedPreferences', 'Next.js'],
    github: undefined,
    demo: undefined,
  },
  {
    title: 'LonePaw — Pet Adoption Platform',
    image: '/lonepaw_present.png',
    alt: 'LonePaw pet adoption app preview',
    desc: 'A mobile platform connecting pet owners with potential adopters. Browse pets by category, save favorites, post adoption listings, and chat directly with owners — streamlining the entire adoption process.',
    tech: ['Kotlin', 'Jetpack Compose', 'Ktor', 'Room', 'Firebase', 'Dagger Hilt', 'MVI'],
    github: 'https://github.com/7pak/LonePaw-PetAdoption',
    demo: undefined,
  },
  {
    title: 'TastyTable — Recipe Discovery App',
    image: '/tastytable_present.png',
    alt: 'TastyTable recipe app preview',
    desc: 'A recipe discovery app that helps users find delicious meals by name or category. Browse detailed ingredients and instructions, watch cooking videos, and bookmark favorites for quick access.',
    tech: ['Kotlin', 'Jetpack Compose', 'Ktor', 'Room', 'MVI', 'Koin'],
    github: 'https://github.com/7pak/Tasty-Table',
    demo: undefined,
  },
  {
    title: 'Vib-Audio — Music Player',
    image: '/vibaudio_present.png',
    alt: 'Vib-Audio music player app preview',
    desc: 'An Android music player with background playback, system notification controls, metadata extraction, and a collapsible UI — built for a smooth listening experience.',
    tech: ['Kotlin', 'Jetpack Compose', 'ExoPlayer', 'Coroutines', 'Koin', 'MVI'],
    github: 'https://github.com/7pak/Vib-Player',
    demo: undefined,
  },
  {
    title: 'Tyksee — Glasses eCommerce',
    image: '/tyksee_present.png',
    alt: 'Tyksee glasses eCommerce app preview',
    desc: 'An e-commerce app for browsing and purchasing eyewear. Features product catalogs, filtering, and a clean shopping experience built with modern architecture.',
    tech: ['Flutter', 'Bloc', 'Dio', 'Clean Architecture'],
    github: undefined,
    demo: undefined,
  },
]

function FeaturedItem({ item, index }) {
  const reveal = useInView({ threshold: 0.1 })
  const isReverse = index % 2 === 1
  const { t } = useI18n()
  return (
    <div
      ref={reveal.ref}
      className={`${styles.featured} ${isReverse ? styles.reverse : ''} ${styles.reveal} ${reveal.inView ? styles.revealed : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={styles.imageWrap}>
        {item.video ? (
          <video
            className={styles.image}
            src={reveal.inView ? item.video : undefined}
            muted
            playsInline
            controls
            preload="none"
            poster="/b2b_preview.jpg"
            aria-label={item.alt}
          />
        ) : (
          <img className={styles.image} src={item.image} alt={item.alt} loading="lazy" />
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.label}>{item.label}</div>
        <h3 className={styles.projectTitle}>{item.title}</h3>
        <div className={styles.descCard}><p>{item.desc}</p></div>
        {item.tech && item.tech.length > 0 && (
          <div className={styles.chips} aria-label={t('projects.aria.technologies')}>
            {item.tech.map((t, i) => (
              <span key={i} className={styles.chip}>{t}</span>
            ))}
          </div>
        )}
        <div className={styles.links}>
          {item.github && (
            <a className={styles.iconLink} href={item.github} target="_blank" rel="noopener" aria-label={t('projects.aria.github')}>
              <Github size={18} />
            </a>
          )}
          {item.demo && item.demo !== '#' && (
            <a className={styles.iconLink} href={item.demo} target="_blank" rel="noopener" aria-label={t('projects.aria.demo')}>
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function GridCard({ item, index }) {
  const reveal = useInView({ threshold: 0.1 })
  const { t } = useI18n()
  const cardLink = item.github || item.demo || item.image
  return (
    <a
      ref={reveal.ref}
      href={cardLink}
      target="_blank"
      rel="noopener"
      className={`${styles.card} ${styles.reveal} ${reveal.inView ? styles.revealed : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {item.image && (
        <div className={styles.cardImageWrap}>
          <img className={styles.cardImage} src={item.image} alt={item.alt || item.title} loading="lazy" />
        </div>
      )}
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <Folder size={22} className={styles.folderIcon} aria-hidden="true" />
          <div className={styles.cardIconRow}>
            {item.github && (
              <span className={styles.iconLink} aria-label={t('projects.aria.github')}>
                <Github size={18} />
              </span>
            )}
            {item.demo && item.demo !== '#' && (
              <span className={styles.iconLink} aria-label={t('projects.aria.demo')}>
                <ExternalLink size={18} />
              </span>
            )}
          </div>
        </div>
        <div className={styles.cardTitle}>{item.title}</div>
        <div className={styles.cardDesc}>{item.desc}</div>
        <div className={styles.cardTags} aria-label={t('projects.aria.technologies')}>
          {item.tech.map((t, i) => (
            <span key={i} className={styles.chip}>{t}</span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default function Projects() {
  const header = useInView({ threshold: 0.12 })
  const [expanded, setExpanded] = useState(false)
  const visibleOthers = expanded ? otherProjects : otherProjects.slice(0, 6)
  const { t } = useI18n()

  const featuredI18n = t('projects.featured')
  const featuredLocalized = featuredProjects.map((p, i) => {
    const tr = Array.isArray(featuredI18n) ? featuredI18n[i] : null
    return {
      ...p,
      ...(tr ? { label: tr.label ?? p.label, alt: tr.alt ?? p.alt, desc: tr.desc ?? p.desc } : {}),
    }
  })

  const othersI18n = t('projects.others')
  const visibleOthersLocalized = (expanded ? otherProjects : otherProjects.slice(0, 6)).map((p, i) => {
    const tr = Array.isArray(othersI18n) ? othersI18n[i] : null
    return { ...p, ...(tr ? { desc: tr.desc ?? p.desc } : {}) }
  })

  return (
    <div className={styles.section}>
      <div className="container">
        <div ref={header.ref} className={`${styles.header} ${styles.reveal} ${header.inView ? styles.revealed : ''}`}>
          <span className={styles.index}>{t('projects.index')}</span>
          <h2 className={styles.title}>{t('projects.title')}</h2>
          <span className={styles.line} aria-hidden="true" />
        </div>

        {/* Featured projects alternating layout */}
        <div className={styles.featuredList}>
          {featuredLocalized.map((p, i) => (
            <FeaturedItem key={p.title} item={p} index={i} />
          ))}
        </div>

        {/* Other notable projects grid */}
        <div className={styles.grid}>
          {visibleOthersLocalized.map((p, i) => (
            <GridCard key={p.title} item={p} index={i} />
          ))}
        </div>

        {otherProjects.length > 6 && (
          <div className={styles.showMoreRow}>
            <button className={styles.showMoreBtn} onClick={() => setExpanded((v) => !v)}>
              {expanded ? t('projects.cta.showLess') : t('projects.cta.showMore')}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}