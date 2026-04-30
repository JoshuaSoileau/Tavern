"use client";
import React from "react";
import { useWorld } from "../../app/providers";
import TavernCard from "@/components/cards/TavernCard";

export default function TavernRoute() {
  const { world } = useWorld();
  if (!world?.tavern) return null;
  const { tavern } = world;
  return <TavernCard {...tavern} />;
}
