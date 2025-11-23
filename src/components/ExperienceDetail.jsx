import React from 'react'
import styles from './Experience.module.css'
import { MapPin, ExternalLink } from 'lucide-react'
import { useI18n } from '../i18n/index.jsx'

export default function ExperienceDetail({ item, switching }) {
  const { t } = useI18n()
  return (
    <div className={`${styles.detailPanel} ${switching ? styles.switching : ''}`} aria-busy={switching}>
      <div className={styles.detailHeader}>
        <div className={styles.roleTitle}>{item.role}</div>
        {item.url ? (
          <a href={item.url} target="_blank" rel="noreferrer" className={styles.companyLink} aria-label={t('experience.aria.openCompany')(item.company)}>
            {item.company}
            <ExternalLink size={16} />
          </a>
        ) : (
          <div className={styles.companyLink} aria-label={item.company}>{item.company}</div>
        )}
        <span className={styles.durationBadge}>{item.dates}</span>
        {item.location && (
          <div className={styles.location}><MapPin size={16} />{item.location}</div>
        )}
      </div>

      <div className={styles.divider} />

      <ul className={styles.achievements}>
        {item.bullets?.map((b, i) => (
          <li key={i} style={{ animationDelay: `${i * 80}ms` }} className={styles.achievementItem}>{b}</li>
        ))}
      </ul>

      {item.skills && item.skills.length > 0 && (
        <div className={styles.techPills} aria-label={t('experience.aria.techStack')}>
          {item.skills.map((s, i) => (
            <span key={i} className={styles.techPill}>{s}</span>
          ))}
        </div>
      )}
      <div className={styles.switchOverlay} aria-hidden />
    </div>
  )
}