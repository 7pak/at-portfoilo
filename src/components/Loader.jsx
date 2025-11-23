import React from 'react'
import styles from './Loader.module.css'

export default function Loader({ hidden }) {
  return (
    <div className={`${styles.overlay} ${hidden ? styles.hidden : ''}`} aria-live="polite" aria-label="Loading">
      <div className={`${styles.logo} ${styles.pulse}`}>AT</div>
    </div>
  )
}