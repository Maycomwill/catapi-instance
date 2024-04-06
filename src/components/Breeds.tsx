"use client";
import useCats from "@/hooks/useCats";
import { Cats } from "@/interfaces/cats";
import React, { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export const revalidade = 3600;
function Breeds() {
  const { getBreeds, breeds } = useCats();
  const [selected, setSelected] = useState("");
  const router = useRouter();
  useEffect(() => {
    getBreeds();
  }, []);
  if (breeds.length === 0 || !breeds) {
    return;
  }
  return (
    <div className="flex flex-col items-center justify-center space-y-4">

        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full grid grid-cols-6 gap-2 text-center items-center justify-center bg-slate-600 py-2 rounded-md outline-none focus-visible:ring-2 ring-lime-400 accent-lime-400"
        >
          <option value=""></option>
          {breeds.map((cat: Cats) => {
            return (
              <option value={cat.id} key={cat.id}>
                {cat.name}
              </option>
            );
          })}
        </select>

      <button
        className="bg-slate-800 py-4 px-6 rounded-md font-bold hover:bg-slate-700 duration-150 transition-colors ease-in-out"
        onClick={() => router.push(`/cats/${selected}`)}
      >
        Pesquisar
      </button>
    </div>
  );
}

export default Breeds;
