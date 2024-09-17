"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold">Hola mundo 👋 🌍</h1>
      <Button onClick={() => alert("Made you click")}>Click me!</Button>
    </main>
  );
}
