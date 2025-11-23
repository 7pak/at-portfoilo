import React from 'react'
import styles from './Experience.module.css'

export default function CompanyCard({ item, active, onSelect, index, buttonRef }) {
  const initial = item.company?.[0]?.toUpperCase() || '•'

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSelect(index)
    }
  }

  return (
    <button
      ref={buttonRef}
      className={`${styles.companyCard} ${active ? styles.companyCardActive : ''}`}
      onClick={() => onSelect(index)}
      onKeyDown={onKeyDown}
      aria-selected={active}
      role="option"
      tabIndex={active ? 0 : -1}
    >
      {item.logo ? (
        <img src={item.logo} alt="" className={styles.companyLogo} loading="lazy" />
      ) : (
        <div className={styles.companyBadge} aria-hidden>
          <span>{initial}</span>
        </div>
      )}
      <div className={styles.cardText}>
        <div className={styles.companyName}>{item.company}</div>
        <div className={styles.cardRole}>{item.role}</div>
      </div>
      <div className={styles.cardDuration}>{item.dates}</div>
    </button>
  )
}