'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import Models from '@/models';

type World = ReturnType<typeof Models.generate>;
type ClientWindow = Window & { Models?: typeof Models };

type WorldContextValue = {
  world: World | null;
  setWorld: React.Dispatch<React.SetStateAction<World | null>>;
  regenerate: () => void;
};

const WorldContext = createContext<WorldContextValue | null>(null);

export function useWorld() {
  const value = useContext(WorldContext);
  if (!value) throw new Error('useWorld used outside WorldProvider');
  return value;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [world, setWorld] = useState<World | null>(null);

  useEffect(() => {
    const initial = Models.generate?.() ?? null;
    setWorld(initial);
    if (process.env.NODE_ENV !== 'production') {
      (window as ClientWindow).Models = Models;
    }
  }, []);

  const regenerate = () => {
    const next = Models.generate?.() ?? null;
    setWorld(next);
  };

  const value = useMemo(() => ({ world, setWorld, regenerate }), [world]);

  return <WorldContext.Provider value={value}>{children}</WorldContext.Provider>;
}
