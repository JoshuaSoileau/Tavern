'use client';
import React from 'react';
import Header from '../@/components/layout/Header';
import Footer from '../@/components/_general/Footer';
import AlchemistRoute from '../../src/routes/AlchemistRoute';

export default function AlchemistPage() {
  return (
    <main className="App">
      <Header />
      <AlchemistRoute />
      <Footer />
    </main>
  );
}
