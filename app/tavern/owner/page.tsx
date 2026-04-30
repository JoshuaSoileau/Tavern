'use client';
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/_general/Footer';
import NpcCard from '@/components/cards/NpcCard';
import { useWorld } from '@/app/providers';

export default function TavernOwnerPage() {
  const { world } = useWorld();
  if (!world?.tavern) return null;

  return (
    <main className="App">
      <Header />
      <NpcCard {...world.tavern.owner} owns={world.tavern.business.name} />
      <Footer />
    </main>
  );
}
