"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// ─── EDIT YOUR PHRASES HERE ───
const PHRASES = [
  "Desde el primer dia que te vi supe que eras para mí.",
  "Este año estuvo lleno de momentos que me confirmaron que sos la persona que buscaba.",
  "You are the poem I never knew how to write.",
  "With you, every moment becomes a treasured memory.",
  "Gracias por todo, gracias por hacerlo inolvidable..",
];
// ──────────────────────────────

interface RomanticPhrasesProps {
  onComplete: () => void
}

export function RomanticPhrases({ onComplete }: RomanticPhrasesProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const showDuration = 3500
    const fadeDuration = 800

    const timer = setTimeout(() => {
      setIsVisible(false)

      setTimeout(() => {
        if (currentIndex < PHRASES.length - 1) {
          setCurrentIndex((prev) => prev + 1)
          setIsVisible(true)
        } else {
          onComplete()
        }
      }, fadeDuration)
    }, showDuration)

    return () => clearTimeout(timer)
  }, [currentIndex, onComplete])

  return (
    <motion.div
      className="flex min-h-screen flex-col items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Page texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(30, 30%, 90%) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, hsl(350, 35%, 65%, 0.05) 0%, transparent 40%)`,
        }}
      />

      {/* Page lines decoration */}
      <div className="absolute inset-x-0 top-1/4 bottom-1/4 mx-auto max-w-lg px-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`line-${i}-${Math.random()}`}
            className="border-b border-primary/5"
            style={{ height: "3rem" }}
          />
        ))}
      </div>

      <div className="relative z-10 flex max-w-2xl flex-col items-center">
        {/* Decorative top flourish */}
        <svg className="mb-8 h-6 w-32 text-primary/20" viewBox="0 0 160 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0 12 Q40 0 80 12 Q120 24 160 12" />
          <path d="M20 12 Q60 4 80 12 Q100 20 140 12" />
        </svg>

        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.p
              key={currentIndex}
              className="text-balance text-center font-cursive text-2xl leading-relaxed text-foreground md:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {`"${PHRASES[currentIndex]}"`}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Decorative bottom flourish */}
        <svg className="mt-8 h-6 w-32 text-primary/20" viewBox="0 0 160 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0 12 Q40 24 80 12 Q120 0 160 12" />
          <path d="M20 12 Q60 20 80 12 Q100 4 140 12" />
        </svg>

        {/* Progress dots */}
        <div className="mt-12 flex gap-2">
          {PHRASES.map((_, i) => (
            <div
              key={`dot-${i}-progress`}
              className={`h-2 w-2 rounded-full transition-all duration-500 ${
                i === currentIndex ? "scale-125 bg-primary" : i < currentIndex ? "bg-primary/40" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
