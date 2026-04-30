'use client';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/_general/Footer';
import NpcCard from '@/components/cards/NpcCard';
import { useWorld } from '@/app/providers';

export default function AlchemistOwnerPage() {
  const { world } = useWorld();
  if (!world?.alchemist) return null;

  return (
    <main className="App">
      <Header />
      <NpcCard
        {...world.alchemist.owner}
        owns={world.alchemist.business.name}
      />
      <Footer />
    </main>
  );
}
