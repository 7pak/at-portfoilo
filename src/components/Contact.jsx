import React from 'react'
import styles from './Contact.module.css'
import { useInView } from '../hooks/useInView'
import { Mail, Github, Linkedin, Twitter, ArrowRight, MessageCircle } from 'lucide-react'
import { useI18n } from '../i18n/index.jsx'
const EMAIL = 'abdella.tawfig@gmail.com'
const WHATSAPP_NUMBER = '+971 551609926'
const WHATSAPP_URL = 'https://wa.me/971551609926'
export default function Contact() {
  const header = useInView({ threshold: 0.12 })
  const content = useInView({ threshold: 0.1 })
  const { t } = useI18n()

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/7pak', label: t('contact.labels.github') },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/abdella-tawfig', label: t('contact.labels.linkedin') },
  ]

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div ref={header.ref} className={`${styles.header} ${styles.reveal} ${header.inView ? styles.revealed : ''}`}>
          <span className={styles.index}>{t('contact.index')}</span>
          <h2 className={styles.title}>{t('contact.title')}</h2>
          <span className={styles.line} aria-hidden="true" />
        </div>

        <div ref={content.ref} className={`${styles.content} ${styles.reveal} ${content.inView ? styles.revealed : ''}`}>
          <h3 className={styles.heroTitle}>{t('contact.heroTitle')}</h3>
          <p className={styles.subtitle}>{t('contact.subtitle')}</p>
          <div className={styles.ctaRow}>
            <a className={styles.ctaButton} href={`mailto:${EMAIL}`} aria-label={t('contact.aria.sendEmail')}>
              <Mail size={18} /> {t('contact.ctas.sayHello')} <ArrowRight size={18} />
            </a>
            <a className={styles.ctaButton} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label={t('contact.aria.whatsapp')}>
              <MessageCircle size={18} /> {t('contact.ctas.whatsapp')} <ArrowRight size={18} />
            </a>
          </div>
          <div className={styles.methods}>
            <div>
              {t('contact.methods.orEmail')} <a className={styles.emailLink} href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <div>
              {t('contact.methods.orWhatsApp')} <a className={styles.emailLink} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{WHATSAPP_NUMBER}</a>
            </div>
            <div>{t('contact.methods.orFindMeOn')}</div>
            <div className={styles.socialRow}>
              {socialLinks.map(({ Icon, href, label }) => (
                <a key={label} className={styles.iconLink} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}