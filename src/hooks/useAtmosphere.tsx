import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type AtmosphereTheme = "ballet" | "classic" | "artistic" | "marine" | "default";

interface AtmosphereState {
  theme: AtmosphereTheme;
  bgColor: string;
  intensity: number; // 0 a 1
}

interface AtmosphereContextType {
  state: AtmosphereState;
  setTheme: (theme: AtmosphereTheme) => void;
}

const THEMES: Record<AtmosphereTheme, { color: string }> = {
  ballet: { color: "#fcf9f7" },    // Off-white puro
  classic: { color: "#fdf8f3" },   // Creme levemente dourado
  artistic: { color: "#f7f2ee" },  // Papel quente
  marine: { color: "#eef4f5" },    // Azul gelo sutil (mais visível)
  default: { color: "#fcf9f7" },
};

const AtmosphereContext = createContext<AtmosphereContextType | undefined>(undefined);

export function AtmosphereProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<AtmosphereTheme>("ballet");
  const [state, setState] = useState<AtmosphereState>({
    theme: "ballet",
    bgColor: THEMES.ballet.color,
    intensity: 0,
  });

  const setTheme = (newTheme: AtmosphereTheme) => {
    setThemeState(newTheme);
  };

  useEffect(() => {
    setState({
      theme,
      bgColor: THEMES[theme].color,
      intensity: 1, // Poderíamos animar isso
    });
    
    // Atualiza a variável CSS global para transição suave via Tailwind/CSS
    document.documentElement.style.setProperty("--bg-primary", THEMES[theme].color);
  }, [theme]);

  return (
    <AtmosphereContext.Provider value={{ state, setTheme }}>
      {children}
    </AtmosphereContext.Provider>
  );
}

export const useAtmosphere = () => {
  const context = useContext(AtmosphereContext);
  if (!context) {
    throw new Error("useAtmosphere must be used within an AtmosphereProvider");
  }
  return context;
};
