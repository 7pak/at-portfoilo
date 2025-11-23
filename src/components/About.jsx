import styles from './About.module.css'
import { useInView } from '../hooks/useInView'
import { LayoutDashboard, Server, Smartphone, Palette } from 'lucide-react'
import { useI18n } from '../i18n/index.jsx'

function ServiceCard({ icon: Icon, title, desc, index = 0 }) {
  return (
    <div className={styles.card} style={{ transitionDelay: `${index * 100}ms` }}>
      <div className={styles.cardHeader}>
        <Icon size={22} />
        <span className={styles.cardTitle}>{title}</span>
      </div>
      <p className={styles.cardDesc}>{desc}</p>
    </div>
  )
}

export default function About() {
  const header = useInView()
  const text = useInView()
  const photo = useInView()
  const services = useInView()
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

            <div ref={services.ref} className={`${styles.services} ${styles.reveal} ${services.inView ? styles.visible : ''}`}>
              <h3 className={styles.servicesTitle}>{t('about.servicesTitle')}</h3>
              <div className={styles.servicesGrid}>
                {[
                  { icon: LayoutDashboard },
                  { icon: Server },
                  { icon: Smartphone },
                  { icon: Palette },
                ].map((meta, idx) => {
                  const svc = t('about.services')[idx]
                  return (
                    <ServiceCard
                      key={idx}
                      index={idx}
                      icon={meta.icon}
                      title={svc?.title || ''}
                      desc={svc?.desc || ''}
                    />
                  )
                })}
              </div>
            </div>
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