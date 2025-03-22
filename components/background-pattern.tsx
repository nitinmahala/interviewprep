"use client"

import { useEffect, useRef } from "react"

export default function BackgroundPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create grid of dots
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const spacing = 30
      const dotSize = 1

      for (let x = spacing; x < canvas.width; x += spacing) {
        for (let y = spacing; y < canvas.height; y += spacing) {
          // Random opacity for each dot
          const opacity = Math.random() * 0.2 + 0.05

          ctx.beginPath()
          ctx.arc(x, y, dotSize, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 59, 59, ${opacity})`
          ctx.fill()
        }
      }
    }

    // Draw lines between random dots
    const drawLines = () => {
      const lineCount = Math.floor(canvas.width / 100)

      for (let i = 0; i < lineCount; i++) {
        const x1 = Math.random() * canvas.width
        const y1 = Math.random() * canvas.height
        const x2 = x1 + (Math.random() - 0.5) * 200
        const y2 = y1 + (Math.random() - 0.5) * 200

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = `rgba(255, 59, 59, ${Math.random() * 0.05 + 0.02})`
        ctx.lineWidth = Math.random() * 0.5 + 0.5
        ctx.stroke()
      }
    }

    // Initial draw
    drawGrid()
    drawLines()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-70 pointer-events-none" />
}

