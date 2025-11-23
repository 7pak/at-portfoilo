import React, { useState } from 'react'
import styles from './Footer.module.css'
import { Github, Linkedin, Twitter, Heart } from 'lucide-react'
import { useI18n } from '../i18n/index.jsx'

const socialLinks = [
  { Icon: Github, href: 'https://github.com/7pak', label: 'GitHub' },
]

export default function Footer() {
  const [showTip, setShowTip] = useState(false)
  const year = new Date().getFullYear()
  const { t } = useI18n()

  const handleAuthorClick = () => {
    setShowTip(true)
    setTimeout(() => setShowTip(false), 1800)
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.credit}>
            {t('footer.creditPrefix')} <span className={styles.author} onClick={handleAuthorClick}>Abdalla Tawfig
              <span className={`${styles.tooltip} ${showTip ? ' '+styles.show : ''}`}>{t('footer.tooltip')}</span>
            </span>
          </div>
          <div className={styles.socialRow}>
            {socialLinks.map(({ Icon, href, label }) => (
              <a key={label} className={styles.iconLink} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon size={16} />
              </a>
            ))}
          </div>
          <div className={styles.finePrint}>
            {t('footer.builtWith')} <Heart size={12} /> &nbsp;•&nbsp; {t('footer.copyright').replace('{year}', String(year))}
          </div>
        </div>
      </div>
    </footer>
  )
}