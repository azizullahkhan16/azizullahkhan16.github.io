'use client'
import { useState, useEffect, useRef } from 'react'

export function useStreamText(fullText: string, speed: number = 15) {
  const [displayed, setDisplayed] = useState('')
  const [isDone, setIsDone] = useState(false)
  const indexRef = useRef(0)

  useEffect(() => {
    setDisplayed('')
    setIsDone(false)
    indexRef.current = 0

    if (!fullText) return

    const interval = setInterval(() => {
      indexRef.current += 1
      setDisplayed(fullText.slice(0, indexRef.current))
      if (indexRef.current >= fullText.length) {
        clearInterval(interval)
        setIsDone(true)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [fullText, speed])

  return { displayed, isDone }
}
