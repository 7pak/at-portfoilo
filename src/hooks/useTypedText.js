import { useEffect, useState } from 'react'

export function useTypedText(phrases, options = {}) {
  const typeSpeed = options.typeSpeed ?? 75
  const deleteSpeed = options.deleteSpeed ?? 40
  const pauseMs = options.pauseMs ?? 1200

  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index]

    let timeout
    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length + 1))
        }, typeSpeed)
      } else {
        timeout = setTimeout(() => setDeleting(true), pauseMs)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length - 1))
        }, deleteSpeed)
      } else {
        setDeleting(false)
        setIndex((i) => (i + 1) % phrases.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, pauseMs])

  return text
}