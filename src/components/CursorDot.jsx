import React, { useEffect, useRef, useState } from 'react'
import styles from './CursorDot.module.css'

export default function CursorDot() {
  const dotRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    setEnabled(finePointer)
    if (!finePointer) return

    // Hide the native cursor while the designed cursor is active
    document.documentElement.classList.add('hide-cursor')

    let x = window.innerWidth / 2, y = window.innerHeight / 2
    let tx = x, ty = y
    const speed = 0.18

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
    }

    const raf = () => {
      x += (tx - x) * speed
      y += (ty - y) * speed
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`
        dotRef.current.style.top = `${y}px`
      }
      requestAnimationFrame(raf)
    }
    const id = requestAnimationFrame(raf)
    window.addEventListener('mousemove', onMove)
    return () => {
      cancelAnimationFrame(id)
      window.removeEventListener('mousemove', onMove)
      document.documentElement.classList.remove('hide-cursor')
    }
  }, [])

  return <div ref={dotRef} className={`${styles.dot} ${!enabled ? styles.hidden : ''}`} aria-hidden="true" />
}