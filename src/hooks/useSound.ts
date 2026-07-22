import { useState, useCallback } from 'react';

// Global state for sound preference
let isSoundEnabled = true;
const listeners = new Set<(isEnabled: boolean) => void>();

const broadcast = () => {
  listeners.forEach(listener => listener(isSoundEnabled));
};

export const useSoundState = () => {
  const [isEnabled, setIsEnabled] = useState(isSoundEnabled);

  useState(() => {
    const listener = (newVal: boolean) => setIsEnabled(newVal);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  });

  const toggleSound = useCallback(() => {
    isSoundEnabled = !isSoundEnabled;
    broadcast();
  }, []);

  return { isSoundEnabled: isEnabled, toggleSound };
};


export const playSound = (soundFile: string) => {
  if (isSoundEnabled && typeof window !== 'undefined') {
    const audio = new Audio(soundFile);
    audio.play().catch(error => {
      // Autoplay can be blocked by the browser, handle error silently
      console.error("Sound play failed:", error);
    });
  }
};
