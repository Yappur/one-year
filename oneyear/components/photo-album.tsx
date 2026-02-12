"use client";

import { useState, useCallback, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PHOTOS = [
  // SECCION 1 - flores
  { src: "/amarilla.jpeg", caption: "Ella sabia, que sabiaa", rotation: -3 },
  {
    src: "/robando.jpeg",
    caption: "Oye oye eso no es tuyo",
    rotation: 2,
  },

  //SECCION 2 - casitaa
  {
    src: "/casa.jpeg",
    caption: "Que le pasaba en el peloo",
    rotation: -2,
  },
  { src: "/casa2.jpeg", caption: "Tan bella como siempre", rotation: -3 },

  // LLUVIA
  {
    src: "/enxio.jpeg",
    caption: "Ni la lluvia los paro",
    rotation: 2,
  },
  {
    src: "/empilchao.jpeg",
    caption: "Empilchaoo pero feliz",
    rotation: -1,
  },

  //FIESTAS

  { src: "/chefsita.jpeg", caption: "Feliz Jarwolin", rotation: 3 },
  {
    src: "/fiesta.jpeg",
    caption: "Año nuevo con mi amorcitoo",
    rotation: 2,
  },

  //VIAJESITOS
  {
    src: "/viajandin.jpeg",
    caption: "A donde iban los chabonsitos",
    rotation: -2,
  },
  { src: "/viajandin2.jpeg", caption: "acelere chofer", rotation: 3 },

  //animalitos
  {
    src: "/inutu.jpeg",
    caption: "Traumado",
    rotation: -1,
  },
  {
    src: "/anita.jpeg",
    caption: "Perseguida",
    rotation: 2,
  },

  //Jueguitos
  { src: "/jueguito.jpeg", caption: "No andaba la palanca😑", rotation: -3 },
  {
    src: "/tejo.jpeg",
    caption: "7 - 0 jaja",
    rotation: 2,
  },

  //Sanmi
  {
    src: "/sanmi.jpeg",
    caption: "En el parquee",
    rotation: -2,
  },
  { src: "/sanmi2.jpeg", caption: "GENGAARR", rotation: 3 },

  //Desayunos
  {
    src: "/peleaditos.jpeg",
    caption: "Peleaditos pero despues amaditos",
    rotation: -2,
  },
  { src: "/deayuno.jpeg", caption: "Cuando hacia friiooo", rotation: 3 },
  //Merienditas
  {
    src: "/biblio.jpeg",
    caption: "Cuspi god merienda",
    rotation: -2,
  },
  { src: "/panqueque.jpeg", caption: "Panqueque", rotation: 3 },

  //Cenas
  {
    src: "/cena.jpeg",
    caption: "Viendo la casa de papeel",
    rotation: -1,
  },
  {
    src: "/hellokitty.jpeg",
    caption: "Los mas cools del MC",
    rotation: 2,
  },
  //Confort en casa
  {
    src: "/casa3.jpeg",
    caption: "Ese día bailamos Just Dance",
    rotation: -2,
  },
  { src: "/casa4.jpeg", caption: "Mi gran amor", rotation: 3 },

  //Pose
  {
    src: "/pose.jpeg",
    caption: "AHHH",
    rotation: -1,
  },
  {
    src: "/pose2.jpeg",
    caption: "AHHH",
    rotation: 2,
  },

  //Plazitas
  {
    src: "/plazita.jpeg",
    caption: "Ella sabia, que sabiaa",
    rotation: -2,
  },
  { src: "/plazita2.jpeg", caption: "Ella sabia, que sabiaa", rotation: 3 },
  //Amor
  {
    src: "/amor.jpeg",
    caption: "AHHH ME LAME",
    rotation: -1,
  },
  {
    src: "/amor2.jpeg",
    caption: "Zamira en plan: emm que haces",
    rotation: 2,
  },
];

const PAGE_DESCRIPTIONS = [
  "Florcitaaass 🌸", // página 1 (fotos 1-2)
  "En Casita de ZamiUwU 🏠", // página 2 (fotos 3-4)
  "Dias de lluvia juntitoos 🌧", // página 3 (fotos 5-6)
  "Noche de fiestaas 🎉", // página 4 (fotos 7-8)
  "Viajecitooss 🚗", // página 5 (fotos 9-10)
  "Son 100% compatibles 🐾", // página 6 (fotos 11-12)
  "Días de Jueguitos 🎮", // página 7 (fotos 13-14)
  "De aventuras por sanmi", // página 8 (fotos 15-16)
  "Desayunos 🤍",
  "Merienditas 💛", // página 8 (fotos 15-16)
  "Cenitass buee tanto comian",
"Confort en casa 🥰", // página 8 (fotos 15-16)
  "AHHHH",
  "PLAZITAASS 🌳", 
  "Amandonooos 🌅", // página 9 (fotos 17-18)
];

const PolaroidPhoto = memo(function PolaroidPhoto({
  photo,
  index,
}: {
  photo: { src: string; caption: string; rotation: number };
  index: number;
}) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30, rotate: photo.rotation * 2 }}
      animate={{ opacity: 1, y: 0, rotate: photo.rotation }}
      transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
      whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
    >
      {/* Tape decoration */}
      <div
        className="absolute -top-3 left-1/2 z-10 h-6 w-16 -translate-x-1/2"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,235,200,0.7) 0%, rgba(255,220,180,0.5) 100%)",
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
            loading="lazy"
            quality={75}
          />
        </div>

        {/* Caption */}
        <p className="absolute bottom-3 left-0 right-0 text-center font-cursive text-base text-foreground/70 md:bottom-4 md:text-lg">
          {photo.caption}
        </p>
      </div>
    </motion.div>
  );
});

export function PhotoAlbum({
  onComplete,
  onPrevious,
}: {
  onComplete?: () => void;
  onPrevious?: () => void;
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const photosPerPage = 2;

  const totalPages = useMemo(
    () => Math.ceil(PHOTOS.length / photosPerPage),
    [],
  );

  const nextPage = useCallback(() => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((p) => p + 1);
    } else if (currentPage === totalPages - 1 && onComplete) {
      // Call onComplete when trying to go past the last page
      onComplete();
    }
  }, [currentPage, totalPages, onComplete]);

  const prevPage = useCallback(() => {
    if (currentPage > 0) setCurrentPage((p) => p - 1);
  }, [currentPage]);

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const currentPhotos = useMemo(
    () =>
      PHOTOS.slice(
        currentPage * photosPerPage,
        currentPage * photosPerPage + photosPerPage,
      ),
    [currentPage],
  );

  return (
    <motion.div
      className="flex min-h-screen flex-col items-center justify-center px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Navigation Button */}
      {onPrevious && (
        <motion.button
          type="button"
          onClick={onPrevious}
          className="fixed top-6 left-6 z-50 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border-2 border-primary/40 bg-card/50 backdrop-blur-sm text-foreground transition-all duration-300 hover:border-primary hover:bg-card/80 hover:shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Volver atrás"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </motion.button>
      )}

      {/* Page texture background */}
      <div
        className="absolute inset-0 pointer-events-none"
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
        transition={{ delay: 0.2 }}
      >
        Nuestro Álbum de fotos
      </motion.h2>

      <AnimatePresence mode="wait">
        <motion.p
          key={currentPage}
          className="relative mb-4 max-w-2xl text-center font-serif text-sm md:text-base text-foreground/70 leading-relaxed"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.4 }}
        >
          {PAGE_DESCRIPTIONS[currentPage]}
        </motion.p>
      </AnimatePresence>

      <div className="relative mb-8 flex items-center gap-3">
        <div className="h-px w-16 bg-primary/30" />
        <svg
          className="h-4 w-4 text-primary/40"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
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
            transition={{ duration: 0.4, ease: "easeInOut" }}
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
              onClick={() => goToPage(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                i === currentPage
                  ? "scale-125 bg-primary"
                  : "bg-border hover:bg-primary/30"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextPage}
          disabled={currentPage === totalPages - 1 && !onComplete}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label={
            currentPage === totalPages - 1
              ? "Continue to thank you section"
              : "Next page"
          }
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Page counter & hint */}
      <div className="relative mt-4 flex flex-col items-center gap-2">
        <p className="font-serif text-md tracking-wider text-muted-foreground italic">
          {`Página ${currentPage + 1} de ${totalPages}`}
        </p>
        {currentPage === totalPages - 1 && onComplete && (
          <motion.p
            className="text-sm text-primary/70 font-cursive"
            animate={{ opacity: [0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ¡Continúa para ver una sorpresa!
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
