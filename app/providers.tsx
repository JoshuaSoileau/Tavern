'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import Models from '@/models';

type World = any;

type WorldContextValue = {
  world: World | null;
  setWorld: (w: World) => void;
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
    const initial = (Models as any).generate?.() ?? null;
    setWorld(initial);
    if (process.env.NODE_ENV !== 'production') {
      (window as any).Models = Models;
    }
  }, []);

  const regenerate = () => {
    const next = (Models as any).generate?.() ?? null;
    setWorld(next);
  };

  const value = useMemo(() => ({ world, setWorld, regenerate }), [world]);

  return <WorldContext.Provider value={value}>{children}</WorldContext.Provider>;
}
