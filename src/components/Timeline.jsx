import React, { useEffect, useRef, useState } from 'react'
import styles from './Experience.module.css'
import TimelineNode from './TimelineNode'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Timeline({ milestones }) {
  const scrollerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [litCount, setLitCount] = useState(0)
  const [inited, setInited] = useState(false)

  const updateScrollIndicators = () => {
    const el = scrollerRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanScrollLeft(scrollLeft > 8)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 8)
  }

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateScrollIndicators()
    const onScroll = () => updateScrollIndicators()
    el.addEventListener('scroll', onScroll)
    const onResize = () => updateScrollIndicators()
    window.addEventListener('resize', onResize)
    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // Light up nodes sequentially when first rendered into view
  useEffect(() => {
    if (inited) return
    setInited(true)
    let i = 0
    const step = () => {
      setLitCount((prev) => Math.min(milestones.length, prev + 1))
      i += 1
      if (i < milestones.length) setTimeout(step, 220)
    }
    setTimeout(step, 180)
  }, [milestones, inited])

  const scrollByAmount = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    const amount = el.clientWidth * 0.85
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <div className={styles.timeline}>
      <div className={`${styles.scrollIndicator} ${styles.leftArrow} ${canScrollLeft ? styles.show : ''}`}>
        <button className={styles.arrowBtn} aria-label="Scroll timeline left" onClick={() => scrollByAmount('left')}>
          <ChevronLeft size={16} />
        </button>
      </div>
      <div className={`${styles.scrollIndicator} ${styles.rightArrow} ${canScrollRight ? styles.show : ''}`}>
        <button className={styles.arrowBtn} aria-label="Scroll timeline right" onClick={() => scrollByAmount('right')}>
          <ChevronRight size={16} />
        </button>
      </div>

      <div ref={scrollerRef} className={styles.timelineScroller}>
        <div className={styles.timelineTrack} />
        <div className={styles.milestonesRow}>
          {milestones.map((m, i) => (
            <TimelineNode key={`${m.year}-${i}`} item={m} index={i} lit={i < litCount} />
          ))}
        </div>
      </div>
    </div>
  )
}