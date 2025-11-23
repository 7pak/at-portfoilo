import styles from './Hero.module.css'
import { useTypedText } from '../hooks/useTypedText'
import { useI18n } from '../i18n/index.jsx'

export default function Hero() {
  const { t } = useI18n()
  const typed = useTypedText(t('hero.roles'))

  return (
    <section id="home" className={`section ${styles.hero} ${styles.bgShapes}`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.copy}>
            <p className={`${styles.greeting} ${styles.fadeUp}`}>{t('hero.greeting')}</p>
            <h1 className={`${styles.name} ${styles.fadeUp}`}>{t('hero.name')}</h1>
            <p className={`${styles.typed} ${styles.fadeUp}`}>{typed}</p>
            <p className={`${styles.tagline} ${styles.fadeUp}`}>
              {t('hero.tagline')}
            </p>
            <div className={`${styles.actions} ${styles.fadeUp}`}>
              <a className="btn btn-cta" href="#projects">{t('hero.ctas.work')}</a>
              <a className="btn btn-outline" href="#contact">{t('hero.ctas.contact')}</a>
            </div>
          </div>
          <div className={`${styles.photoWrap} ${styles.fadeUp}`}>
            <div className={styles.photo}>
              <img src="/professional.png" alt="Portrait of Abdalla Tawfig" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}