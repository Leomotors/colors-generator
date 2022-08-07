import { ColorCard } from "$components/elements/ColorCard";
import type { IColorResponse } from "$lib/colors";

import type { NextPage } from "next";
import Link from "next/link";

import { useState } from "react";

const Home: NextPage = () => {
  const [colors, setColors] = useState<IColorResponse[]>([]);

  async function handleGenerate() {
    const data = await fetch("/api/colors").then((r) => r.json());
    setColors(data);
  }

  return (
    <main className="flex flex-col items-center gap-6 p-8">
      <h1 className="text-6xl font-bold">Colors Generator</h1>

      <button
        className="rounded-2xl border border-green-400 bg-gradient-to-br from-green-200 to-green-300 p-4 text-3xl font-bold"
        onClick={handleGenerate}
      >
        Generate!
      </button>

      <h2 className="text-4xl font-bold">Colors</h2>

      <div className="grid grid-cols-5 justify-items-center">
        {colors.map((color, index) => (
          <ColorCard key={`color-card-${index}`} color={color} />
        ))}
      </div>

      {colors.length ? null : <p>No Colors Yet</p>}

      <Link href="/journey">My Journey</Link>
    </main>
  );
};

export default Home;