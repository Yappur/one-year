"use client";

import { useEffect, useState, useMemo } from "react";

interface Sparkle {
  id: number;
  left: number;
  top: number;
  delay: number;
  size: number;
}

export function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const generatedSparkles = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      size: 3 + Math.random() * 5,
    }));
  }, []);

  useEffect(() => {
    setSparkles(generatedSparkles);
  }, [generatedSparkles]);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-primary/20 will-change-transform"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animation: `sparkle 3s ease-in-out ${s.delay}s infinite`,
            contain: "layout style paint",
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
