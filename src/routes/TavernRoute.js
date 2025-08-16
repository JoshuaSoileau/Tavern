"use client";
import React from "react";
import Link from "next/link";
import { useWorld } from "../../app/providers";
import TavernCard from "@/components/cards/TavernCard";
import NpcCard from "@/components/cards/NpcCard";

export default function TavernRoute() {
  const { world } = useWorld();
  if (!world?.tavern) return null;
  const { tavern } = world;
  return (
    <>
      <TavernCard {...tavern} />
      <nav style={{ marginTop: 16 }}>
        <Link href="/tavern/owner">Owner</Link>
      </nav>
    </>
  );
}
