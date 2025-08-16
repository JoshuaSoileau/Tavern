'use client';
import React from 'react';
import Header from '../@/components/layout/Header';
import Footer from '../@/components/_general/Footer';
import TownRoute from '../../src/routes/TownRoute';

export default function TownPage() {
  return (
    <main className="App">
      <Header />
      <TownRoute />
      <Footer />
    </main>
  );
}
