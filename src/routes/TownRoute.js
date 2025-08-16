"use client";
import React from "react";
import Link from "next/link";
import { useWorld } from "../../app/providers";
import TownCard from "@/components/cards/TownCard";

export default function TownRoute() {
  const { world } = useWorld();
  if (!world) return null;
  return (
    <>
      <TownCard {...world} />
      <nav style={{ marginTop: 16 }}>
        <Link href="/tavern">Tavern</Link>{" "}
        <Link href="/alchemist">Alchemist</Link>
      </nav>
    </>
  );
}
