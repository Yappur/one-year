"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookCover } from "@/components/book-cover"
import { RomanticPhrases } from "@/components/romantic-phrases"
import { PhotoAlbum } from "@/components/photo-album"
import { ThankYou } from "@/components/thank-you"
import { FloatingHearts } from "@/components/floating-hearts"
import { Sparkles } from "@/components/sparkles"

type Stage = "cover" | "opening" | "phrases" | "album" | "thank-you"

export default function Home() {
  const [stage, setStage] = useState<Stage>("cover")

  const handleOpenBook = useCallback(() => {
    setStage("opening")
    setTimeout(() => setStage("phrases"), 1200)
  }, [])

  const handlePhrasesComplete = useCallback(() => {
    setStage("album")
  }, [])

  const handleAlbumComplete = useCallback(() => {
    setStage("thank-you")
  }, [])

  const handlePreviousStage = useCallback(() => {
    if (stage === "thank-you") {
      setStage("album")
    } else if (stage === "album") {
      setStage("phrases")
    } else if (stage === "phrases") {
      setStage("cover")
    }
  }, [stage])

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <FloatingHearts />
      <Sparkles />

      <AnimatePresence mode="wait">
        {stage === "cover" && (
          <motion.div
            key="cover"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <BookCover onOpen={handleOpenBook} />
          </motion.div>
        )}

        {stage === "opening" && (
          <motion.div
            key="opening"
            className="flex min-h-screen items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative" style={{ perspective: "800px" }}>
              <motion.div
                className="h-64 w-48 rounded-r-lg md:h-80 md:w-56"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(25, 30%, 45%) 0%, hsl(20, 25%, 35%) 100%)",
                  transformOrigin: "left center",
                }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: -180 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              <div
                className="absolute top-0 left-0 h-64 w-48 rounded-r-lg md:h-80 md:w-56"
                style={{
                  background: "hsl(30, 33%, 94%)",
                  boxShadow: "inset 0 0 30px rgba(0,0,0,0.05)",
                }}
              />
            </div>
          </motion.div>
        )}

        {stage === "phrases" && (
          <motion.div
            key="phrases"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <RomanticPhrases onComplete={handlePhrasesComplete} />
          </motion.div>
        )}

        {stage === "album" && (
          <motion.div
            key="album"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <PhotoAlbum onComplete={handleAlbumComplete} onPrevious={handlePreviousStage} />
          </motion.div>
        )}

        {stage === "thank-you" && (
          <motion.div
            key="thank-you"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ThankYou 
              photoSrc="/spcode.jpeg" 
              onPrevious={handlePreviousStage}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
