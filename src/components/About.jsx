import styles from './About.module.css'
import { useInView } from '../hooks/useInView'
import { useI18n } from '../i18n/index.jsx'

export default function About() {
  const header = useInView()
  const text = useInView()
  const photo = useInView()
  const { t } = useI18n()

  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className="container">
        <div ref={header.ref} className={`${styles.titleRow} ${styles.reveal} ${header.inView ? styles.visible : ''}`}>
          <span className={styles.sectionIndex}>{t('about.index')}</span>
          <h2 className={styles.title}>{t('about.title')}</h2>
          <span className={styles.line} aria-hidden="true" />
        </div>

        <div className={styles.grid}>
          <div ref={text.ref} className={`${styles.content} ${styles.reveal} ${text.inView ? styles.visible : ''}`}>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>

          <div ref={photo.ref} className={`${styles.reveal} ${photo.inView ? styles.visible : ''}`}>
            <div className={styles.frame}>
              <div className={styles.accentLayer} />
              <div className={styles.imageLayer}>
                <img src="/gradution_pic.jpg" alt="Graduation portrait of Abdalla Tawfig" loading="lazy" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
