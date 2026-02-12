"use client";

import { memo } from "react";
import { motion } from "framer-motion";

interface BookCoverProps {
  onOpen: () => void;
}

export const BookCover = memo(function BookCover({ onOpen }: BookCoverProps) {
  return (
    <motion.div
      className="flex min-h-screen items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.button
        type="button"
        onClick={onOpen}
        className="group relative cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Open the diary"
      >
        {/* Book shadow */}
        <div className="absolute -bottom-4 left-4 right-4 h-8 rounded-b-lg bg-foreground/10 blur-xl" />

        {/* Book spine */}
        <div
          className="absolute -left-3 top-0 bottom-0 w-6 rounded-l-md bg-[hsl(20,25%,35%)]"
          style={{ transform: "perspective(200px) rotateY(15deg)" }}
        />

        {/* Book body */}
        <div
          className="relative flex flex-col items-center justify-center rounded-r-lg rounded-l-sm border border-border/50 px-12 py-16 md:px-20 md:py-24"
          style={{
            background:
              "linear-gradient(135deg, hsl(25, 30%, 45%) 0%, hsl(20, 25%, 35%) 100%)",
            boxShadow:
              "inset 0 0 60px rgba(0,0,0,0.15), 4px 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          {/* Decorative border */}
          <div className="absolute inset-4 rounded-sm border border-primary-foreground/20" />
          <div className="absolute inset-6 rounded-sm border border-primary-foreground/10" />
          {/* Corner flourishes */}
          <svg
            className="absolute top-7 left-7 h-8 w-8 text-primary-foreground/30"
            viewBox="0 0 40 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M0 20 Q0 0 20 0" />
            <path d="M5 15 Q5 5 15 5" />
          </svg>
          <svg
            className="absolute top-7 right-7 h-8 w-8 text-primary-foreground/30"
            viewBox="0 0 40 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M40 20 Q40 0 20 0" />
            <path d="M35 15 Q35 5 25 5" />
          </svg>
          <svg
            className="absolute bottom-7 left-7 h-8 w-8 text-primary-foreground/30"
            viewBox="0 0 40 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M0 20 Q0 40 20 40" />
            <path d="M5 25 Q5 35 15 35" />
          </svg>
          <svg
            className="absolute right-7 bottom-7 h-8 w-8 text-primary-foreground/30"
            viewBox="0 0 40 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M40 20 Q40 40 20 40" />
            <path d="M35 25 Q35 35 25 35" />
          </svg>
          {/* Heart ornament */}
          <svg
            className="mb-4 h-8 w-8 text-primary-foreground/40"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          {/* Title */}
          <h1 className="text-balance text-center font-cursive text-3xl leading-relaxed text-primary-foreground/90 md:text-5xl">
            Diario de
            <br />
            Nuestras Memorias
          </h1>
          {/* Divider */}
          <div className="my-4 flex items-center gap-3">
            <div className="h-px w-12 bg-primary-foreground/30" />
            <svg
              className="h-3 w-3 text-primary-foreground/30"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div className="h-px w-12 bg-primary-foreground/30" />
          </div>

          <p className="font-serif text-sm tracking-widest text-primary-foreground/50 uppercase">
            {" "}
            Zamirita ✘ Mateo
          </p>
          <p className="font-serif mt-6 text-xs tracking-widest text-primary-foreground/50 uppercase">
            Click para abrir
          </p>
          {/* Subtle glow on hover */}
          <motion.div className="absolute inset-0 rounded-r-lg rounded-l-sm bg-primary-foreground/0 transition-colors duration-500 group-hover:bg-primary-foreground/5" />
        </div>
      </motion.button>
    </motion.div>
  );
});
