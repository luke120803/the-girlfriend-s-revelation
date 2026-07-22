import { motion, AnimatePresence } from "motion/react";
import { useAtmosphere, AtmosphereTheme } from "@/hooks/useAtmosphere";
import { useEffect, useState } from "react";

/**
 * Componente que renderiza elementos visuais sutis baseados no tema atual.
 * Partículas, brilhos ou ondas que flutuam no background.
 */
export function AtmosphereElements() {
  const { state } = useAtmosphere();
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    // Gera partículas aleatórias quando o tema muda
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, [state.theme]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={state.theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          {state.theme === "ballet" && <BalletElements />}
          {state.theme === "classic" && <ClassicElements particles={particles} />}
          {state.theme === "artistic" && <ArtisticElements />}
          {state.theme === "marine" && <MarineElements />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function BalletElements() {
  return (
    <div className="absolute inset-0">
      {/* Linhas fluidas e minimalistas evocando movimento de dança */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03] text-accent">
        <motion.path
          d="M-100,200 Q400,100 900,300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.path
          d="M-100,600 Q300,800 1000,500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 7, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

function ClassicElements({ particles }: { particles: any[] }) {
  return (
    <div className="absolute inset-0">
      {/* Brilhos sutis evocando realeza/Barbie clássica */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent-light/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function ArtisticElements() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Formas orgânicas que lembram pinceladas ou recortes de papel */}
      <motion.div 
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-accent-dark/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function MarineElements() {
  return (
    <div className="absolute inset-0">
      {/* Efeito de "caustics" ou ondas profundas e lentas */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: "radial-gradient(circle at 50% 50%, var(--accent-light) 0%, transparent 70%)",
        }}
      />
      <svg className="absolute inset-0 w-full h-full opacity-[0.02] text-accent-dark">
        <filter id="water-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
        </filter>
        <rect width="100%" height="100%" filter="url(#water-noise)" />
      </svg>
      {/* Pequenas bolhas subindo */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-accent-light/20"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `-20px`,
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
          }}
          animate={{
            y: -1200,
            x: [0, 20, -20, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
