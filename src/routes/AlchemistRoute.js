"use client";
import React from "react";
import { useWorld } from "../../app/providers";
import AlchemistCard from "@/components/cards/AlchemistCard";

export default function AlchemistRoute() {
  const { world } = useWorld();
  if (!world?.alchemist) return null;
  return <AlchemistCard {...world.alchemist} />;
}
