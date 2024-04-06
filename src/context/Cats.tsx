"use client";
import { Cat, Cats } from "@/interfaces/cats";
import api from "@/lib/axios";
import { cache, createContext, useState } from "react";

export interface CatsContextProps {
  getBreeds: () => void;
  getCat: (name: string) => void;
  breeds: Cats[];
  cat: Cat | undefined;
}
export const CatsContext = createContext({} as CatsContextProps);

export function CatsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [breeds, setBreeds] = useState<Cats[]>([]);
  const [cat, setCat] = useState<Cat>();

  const [isLoading, setIsLoading] = useState(false);
  const getBreeds = cache(async () => {
    const { data } = await api.get("/breeds");
    setBreeds(data);
  });

  const getCat = cache(async (id: string) => {
    console.log(id);
    const images = await api.get(`images/search?breed_ids=${id}&limit=10`);
    const breeds = await api.get<Cats[]>("/breeds");
    const breed_data = breeds.data.find((breed) => {
      return breed.id === id;
    });
    // console.log(breed_data?.temperament)

    const data = {
      data: breed_data,
      images: images.data.map(
        (image: { id: string; url: string; width: number; height: number }) => {
          return image.url;
        }
      ),
    } as Cat;
    setCat(data);
  });

  return (
    <CatsContext.Provider value={{ getBreeds, getCat, cat, breeds }}>
      {children}
    </CatsContext.Provider>
  );
}
