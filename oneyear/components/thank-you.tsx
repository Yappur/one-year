"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ThankYouProps {
  photoSrc: string;
  onPrevious?: () => void;
}

export function ThankYou({ photoSrc, onPrevious }: ThankYouProps) {
  const [isVisible, setIsVisible] = useState(false);
  const message =
    "Gracias por compartir tantos momentos juntos, este es el primer año de muchos. Sos el amor de mi vida, sabelo siempre.";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="flex min-h-screen flex-col items-center justify-center px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Navigation Buttons */}
      <div className="fixed top-6 left-6 z-50">
        {onPrevious && (
          <motion.button
            type="button"
            onClick={onPrevious}
            className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border-2 border-primary/40 bg-card/50 backdrop-blur-sm text-foreground transition-all duration-300 hover:border-primary hover:bg-card/80 hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Volver atrás"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </motion.button>
        )}
      </div>
      {/* Page texture background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, hsl(30, 30%, 90%) 0%, transparent 50%),
                           radial-gradient(circle at 70% 30%, hsl(350, 35%, 65%, 0.03) 0%, transparent 40%)`,
        }}
      />

      {/* Decorative top flourish */}
      <svg
        className="mb-8 h-6 w-32 text-primary/20"
        viewBox="0 0 160 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden="true"
      >
        <path d="M0 12 Q40 0 80 12 Q120 24 160 12" />
        <path d="M20 12 Q60 4 80 12 Q100 20 140 12" />
      </svg>

      <div className="relative z-10 flex max-w-xl flex-col items-center">
        <motion.div
          className="mb-10 w-64 sm:w-72 md:w-80 lg:w-96"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Image
            src={photoSrc}
            alt="Foto especial"
            width={400}
            height={600}
            className="rounded-lg object-contain w-full h-auto"
            quality={100}
            priority
          />
        </motion.div>

        {/* Message section */}
        <div className="flex flex-col items-center">
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <TypewriterText text={message} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Decorative flourish */}
          <svg
            className="h-6 w-32 text-primary/20"
            viewBox="0 0 160 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            aria-hidden="true"
          >
            <path d="M0 12 Q40 24 80 12 Q120 0 160 12" />
            <path d="M20 12 Q60 20 80 12 Q100 4 140 12" />
          </svg>
        </div>
      </div>

      {/* Decorative bottom flourish */}
      <svg
        className="mt-12 h-6 w-32 text-primary/20"
        viewBox="0 0 160 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden="true"
      >
        <path d="M0 12 Q40 0 80 12 Q120 24 160 12" />
        <path d="M20 12 Q60 4 80 12 Q100 20 140 12" />
      </svg>
    </motion.div>
  );
}

function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return (
    <p className="text-balance text-center font-cursive text-xl leading-relaxed text-foreground sm:text-2xl md:text-3xl lg:text-4xl">
      "{displayedText}"
      {index < text.length && (
        <motion.span
          className="inline-block ml-1 h-6 w-0.5 bg-foreground sm:h-7 md:h-8 lg:h-10"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </p>
  );
}
