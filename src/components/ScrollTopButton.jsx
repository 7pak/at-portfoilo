import React, { useEffect, useState } from 'react'
import styles from './ScrollTopButton.module.css'
import { ArrowUp } from 'lucide-react'
import { useI18n } from '../i18n/index.jsx'

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={`${styles.root} ${!visible ? styles.hidden : ''}`}>
      <button className={styles.btn} aria-label={useI18n().t('scrollTop.aria')} onClick={scrollToTop}>
        <ArrowUp size={20} />
      </button>
    </div>
  )
}