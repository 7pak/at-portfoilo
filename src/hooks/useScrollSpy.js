import { useEffect, useState } from 'react'

export function useScrollSpy(ids = [], offset = 0) {
  const [activeId, setActiveId] = useState(ids[0] || null)

  useEffect(() => {
    const sections = ids
      .map((id) => ({ id, el: document.querySelector(id) }))
      .filter((s) => s.el)

    const handler = () => {
      const scrollY = window.scrollY + offset + 1
      let current = sections[0]?.id || null
      for (const s of sections) {
        const top = s.el.offsetTop
        const height = s.el.offsetHeight
        if (scrollY >= top && scrollY < top + height) {
          current = s.id
        }
      }
      setActiveId(current)
    }

    handler()
    window.addEventListener('scroll', handler)
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
    }
  }, [ids, offset])

  return activeId
}