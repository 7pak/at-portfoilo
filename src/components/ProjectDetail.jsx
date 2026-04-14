import React, { useEffect, useRef } from 'react'
import styles from './ProjectDetail.module.css'
import { X, Github, ExternalLink } from 'lucide-react'
import { useI18n } from '../i18n/index.jsx'

export default function ProjectDetail({ item, onClose }) {
  const { t } = useI18n()
  const dialogRef = useRef(null)
  const closeBtnRef = useRef(null)

  useEffect(() => {
    if (!item) return
    const previouslyFocused = document.activeElement
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    const focusTimer = setTimeout(() => closeBtnRef.current?.focus(), 50)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      clearTimeout(focusTimer)
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [item, onClose])

  if (!item) return null

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className={styles.backdrop} onClick={onBackdropClick}>
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-title"
      >
        <button
          ref={closeBtnRef}
          className={styles.closeBtn}
          onClick={onClose}
          aria-label={t('projects.aria.close')}
        >
          <X size={20} />
        </button>

        <div className={styles.content}>
          <h3 id="project-detail-title" className={styles.title}>{item.title}</h3>
          <p className={styles.desc}>{item.desc}</p>

          {item.tech && item.tech.length > 0 && (
            <div className={styles.chips} aria-label={t('projects.aria.technologies')}>
              {item.tech.map((tech, i) => (
                <span key={i} className={styles.chip}>{tech}</span>
              ))}
            </div>
          )}

          {(item.github || (item.demo && item.demo !== '#')) && (
            <div className={styles.actions}>
              {item.github && (
                <a className={styles.actionBtn} href={item.github} target="_blank" rel="noopener">
                  <Github size={16} />
                  <span>{t('projects.detail.viewGithub')}</span>
                </a>
              )}
              {item.demo && item.demo !== '#' && (
                <a className={styles.actionBtn} href={item.demo} target="_blank" rel="noopener">
                  <ExternalLink size={16} />
                  <span>{t('projects.detail.viewDemo')}</span>
                </a>
              )}
            </div>
          )}

          {item.video && (
            <div className={styles.videoWrap}>
              <video
                className={styles.video}
                src={item.video}
                controls
                playsInline
                preload="metadata"
                poster={item.image}
              />
            </div>
          )}

          {item.gallery && item.gallery.length > 0 && (
            <>
              <h4 className={styles.sectionLabel}>{t('projects.detail.screenshots')}</h4>
              <div className={styles.gallery}>
                {item.gallery.map((src, i) => (
                  <div key={i} className={styles.galleryItem}>
                    <img src={src} alt={`${item.title} screenshot ${i + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
