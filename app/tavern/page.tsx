'use client';
import React from 'react';
import Header from '../@/components/layout/Header';
import Footer from '../@/components/_general/Footer';
import TavernRoute from '../../src/routes/TavernRoute';

export default function TavernPage() {
  return (
    <main className="App">
      <Header />
      <TavernRoute />
      <Footer />
    </main>
  );
}
