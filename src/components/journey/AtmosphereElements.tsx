import { motion, AnimatePresence } from "motion/react";
import { useAtmosphere, AtmosphereTheme } from "@/hooks/useAtmosphere";
import { useEffect, useState } from "react";
import { Castle, Bird, Fish, Heart, Star, Cloud } from "lucide-react";

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
      {/* Nuvenzinhas leves e linhas fluidas */}
      <Cloud 
        className="absolute top-[15%] left-[10%] w-12 h-12 text-accent/10" 
        strokeWidth={1}
      />
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
      </svg>
    </div>
  );
}

function ClassicElements({ particles }: { particles: any[] }) {
  return (
    <div className="absolute inset-0">
      {/* Silhueta sutil de castelo ao fundo */}
      <Castle 
        className="absolute bottom-[10%] right-[10%] w-48 h-48 text-accent-dark/5" 
        strokeWidth={0.5}
      />
      
      {/* Brilhos (estrelas) */}
      <Star 
        className="absolute top-[20%] left-[15%] w-4 h-4 text-accent/20 animate-pulse" 
        strokeWidth={1}
      />

      {/* Partículas de brilho */}
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
      {/* Silhuetas de pássaros/bichinhos de forma artística */}
      <motion.div
        animate={{
          x: [window.innerWidth + 100, -100],
          y: [100, 150, 100],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 text-accent/10"
      >
        <Bird size={40} strokeWidth={1} />
      </motion.div>

      <motion.div
        animate={{
          x: [-100, window.innerWidth + 100],
          y: [400, 450, 400],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-40 text-accent-dark/10"
      >
        <Bird size={32} strokeWidth={1} className="scale-x-[-1]" />
      </motion.div>

      {/* Formas orgânicas blur */}
      <motion.div 
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function MarineElements() {
  return (
    <div className="absolute inset-0">
      {/* Peixinhos passando lentamente */}
      <motion.div
        animate={{
          x: [-50, window.innerWidth + 50],
          y: [300, 320, 300],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute text-accent-dark/10"
      >
        <Fish size={24} strokeWidth={1} />
      </motion.div>

      <motion.div
        animate={{
          x: [window.innerWidth + 50, -50],
          y: [500, 480, 500],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute text-accent/10"
      >
        <Fish size={20} strokeWidth={1} className="scale-x-[-1]" />
      </motion.div>

      {/* Efeito de profundidade */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: "radial-gradient(circle at 50% 50%, var(--accent-light) 0%, transparent 70%)",
        }}
      />
      
      {/* Bolhas */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-accent-light/15"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `-20px`,
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
          }}
          animate={{
            y: -1200,
            opacity: [0, 0.3, 0],
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
