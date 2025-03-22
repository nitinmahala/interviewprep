"use client"

import { useState, useEffect, useRef } from "react"

interface CounterAnimationProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export default function CounterAnimation({
  end,
  duration = 2000,
  suffix = "",
  className = "text-3xl font-bold text-white",
}: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const startTimeRef = useRef<number | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    // Reset when end value changes
    countRef.current = 0
    startTimeRef.current = null
    setCount(0)

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)

      // Use easeOutExpo for a nice deceleration effect
      const easeOutExpo = 1 - Math.pow(2, -10 * progress)

      // Calculate the current count based on progress
      const currentCount = Math.floor(easeOutExpo * end)

      if (currentCount !== countRef.current) {
        countRef.current = currentCount
        setCount(currentCount)
      }

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        // Ensure we end exactly at the target value
        setCount(end)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [end, duration])

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  )
}

