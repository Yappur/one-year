"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// ─── EDIT YOUR PHOTOS AND CAPTIONS HERE ───
const PHOTOS = [
  { src: "/photos/photo-1.jpg", caption: "Where it all began", rotation: -3 },
  { src: "/photos/photo-2.jpg", caption: "Our little rituals", rotation: 2 },
  { src: "/photos/photo-3.jpg", caption: "Rain or shine, always together", rotation: -2 },
  { src: "/photos/photo-4.jpg", caption: "Holding on to forever", rotation: 3 },
  { src: "/photos/photo-5.jpg", caption: "Dancing through life with you", rotation: -1 },
  { src: "/photos/photo-6.jpg", caption: "Every sunset with you is perfect", rotation: 2 },
]
// ──────────────────────────────────────────

export function PhotoAlbum() {
  const [currentPage, setCurrentPage] = useState(0)
  const photosPerPage = 2
  const totalPages = Math.ceil(PHOTOS.length / photosPerPage)

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage((p) => p + 1)
  }
  const prevPage = () => {
    if (currentPage > 0) setCurrentPage((p) => p - 1)
  }

  const currentPhotos = PHOTOS.slice(
    currentPage * photosPerPage,
    currentPage * photosPerPage + photosPerPage
  )

  return (
    <motion.div
      className="flex min-h-screen flex-col items-center justify-center px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Page texture background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, hsl(30, 30%, 90%) 0%, transparent 50%),
                           radial-gradient(circle at 70% 30%, hsl(350, 35%, 65%, 0.03) 0%, transparent 40%)`,
        }}
      />

      {/* Title */}
      <motion.h2
        className="relative mb-2 font-cursive text-3xl text-foreground md:text-4xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Our Photo Album
      </motion.h2>

      <div className="relative mb-8 flex items-center gap-3">
        <div className="h-px w-16 bg-primary/30" />
        <svg className="h-4 w-4 text-primary/40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <div className="h-px w-16 bg-primary/30" />
      </div>

      {/* Photo grid */}
      <div className="relative w-full max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {currentPhotos.map((photo, i) => (
              <PolaroidPhoto
                key={`${currentPage}-${i}`}
                photo={photo}
                index={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="relative mt-10 flex items-center gap-6">
        <button
          type="button"
          onClick={prevPage}
          disabled={currentPage === 0}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              type="button"
              key={`page-${i}`}
              onClick={() => setCurrentPage(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                i === currentPage ? "scale-125 bg-primary" : "bg-border hover:bg-primary/30"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Page counter */}
      <p className="relative mt-4 font-serif text-sm tracking-wider text-muted-foreground italic">
        {`Page ${currentPage + 1} of ${totalPages}`}
      </p>
    </motion.div>
  )
}

function PolaroidPhoto({
  photo,
  index,
}: {
  photo: { src: string; caption: string; rotation: number }
  index: number
}) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30, rotate: photo.rotation * 2 }}
      animate={{ opacity: 1, y: 0, rotate: photo.rotation }}
      transition={{ delay: index * 0.2 + 0.2, duration: 0.6, ease: "easeOut" }}
      whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
    >
      {/* Tape decoration */}
      <div
        className="absolute -top-3 left-1/2 z-10 h-6 w-16 -translate-x-1/2"
        style={{
          background: "linear-gradient(135deg, rgba(255,235,200,0.7) 0%, rgba(255,220,180,0.5) 100%)",
          transform: `translateX(-50%) rotate(${index % 2 === 0 ? -5 : 5}deg)`,
        }}
      />

      {/* Polaroid frame */}
      <div
        className="rounded-sm bg-primary-foreground p-3 pb-12 md:p-4 md:pb-14"
        style={{
          boxShadow: "0 4px 20px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)",
        }}
      >
        <div className="relative h-48 w-48 overflow-hidden md:h-56 md:w-56">
          <Image
            src={photo.src || "/placeholder.svg"}
            alt={photo.caption}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 192px, 224px"
          />
        </div>

        {/* Caption */}
        <p className="absolute bottom-3 left-0 right-0 text-center font-cursive text-base text-foreground/70 md:bottom-4 md:text-lg">
          {photo.caption}
        </p>
      </div>
    </motion.div>
  )
}
