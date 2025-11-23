import React from 'react'
import styles from './Experience.module.css'

export default function TimelineNode({ item, index, lit }) {
  const above = index % 2 === 0
  return (
    <div className={styles.timelineNodeWrap}>
      <div className={`${styles.nodeDot} ${lit ? styles.nodeLit : ''}`} />
      <div className={`${styles.timelineCard} ${above ? styles.above : styles.below}`} style={{ animationDelay: `${index * 120}ms` }}>
        <div className={styles.timelineYear}>{item.year}</div>
        <div className={styles.timelineTitle}>{item.title}</div>
        {item.desc && <div className={styles.timelineDesc}>{item.desc}</div>}
      </div>
    </div>
  )
}