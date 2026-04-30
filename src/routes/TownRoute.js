"use client";
import React from "react";
import { useWorld } from "../../app/providers";
import TownCard from "@/components/cards/TownCard";

export default function TownRoute() {
  const { world } = useWorld();
  if (!world) return null;
  return <TownCard {...world} />;
}
