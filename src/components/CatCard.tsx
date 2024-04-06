"use client";
import useCats from "@/hooks/useCats";
import Image from "next/image";
import { Suspense, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import ReactCountryFlag from "react-country-flag";
import { Loader2 } from "lucide-react";

function CatCard({ id }: { id: string }) {
  const { getCat, cat } = useCats();
  useEffect(() => {
    getCat(id);
  }, []);
  if (!cat) {
    return;
  }
  return (
    <div className="w-full flex flex-col items-center justify-start space-y-4">
      <section className="w-full">
        <div className="w-full flex flex-col items-start justify-start">
          <div className="text-center w-full">
            <h1 className="text-2xl font-bold">{cat.data.name}</h1>
          </div>
          <div className="w-full flex flex-col items-start justify-center space-y-4">
            <div className="w-full flex flex-row items-start justify-start space-x-2">
              <div className="w-1/4  flex items-center justify-end">
                <p className="font-bold">Origem:</p>
              </div>
              <div className="font-normal flex flex-row items-center justify-center space-x-2">
                <span>{cat.data.origin}</span>
                <span className="flex items-center justify-center">
                  <ReactCountryFlag
                    countryCode={cat.data.country_code}
                    svg
                    style={{
                      width: 24,
                      height: 24,
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="w-full flex flex-row items-start justify-start space-x-2">
              <div className="w-1/4 flex items-center justify-end">
                <p className="font-bold">Descrição:</p>
              </div>
              <span className="font-normal w-2/4">{cat.data.description}</span>
            </div>
            <div className="w-full flex flex-row items-start justify-start space-x-2">
              <div className="w-1/4 flex items-center justify-end">
                <p className="font-bold">Temperamento: </p>
              </div>
              <span className="font-normal">{cat.data.temperament}</span>
            </div>
            <div className="w-full flex flex-row items-center justify-start space-x-2">
              <div className="w-1/4  flex items-center justify-end">
                <p className="font-bold">Nível de afeto: </p>
              </div>
              <div className="w-1/2">
                <ProgressBar.Root progress={cat.data.affection_level}>
                  <ProgressBar.Content progress={cat.data.affection_level} />
                </ProgressBar.Root>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-start space-x-2">
              <div className="w-1/4  flex items-center justify-end">
                <p className="font-bold">Nível de energia: </p>
              </div>
              <div className="w-1/2">
                <ProgressBar.Root progress={cat.data.energy_level}>
                  <ProgressBar.Content progress={cat.data.energy_level} />
                </ProgressBar.Root>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-start space-x-2">
              <div className="w-1/4  flex items-center justify-end">
                <p className="font-bold">Amizade com cães: </p>
              </div>
              <div className="w-1/2">
                <ProgressBar.Root progress={cat.data.dog_friendly}>
                  <ProgressBar.Content progress={cat.data.dog_friendly} />
                </ProgressBar.Root>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 place-items-center place-content-center">
          {cat.images.map((image) => {
            return (
              <div key={image}>
                <Suspense fallback={<p>Carregando</p>}>
                  <Image
                    loading="lazy"
                    src={image}
                    width={1000}
                    height={1000}
                    className="size-64"
                    alt={cat.data.name}
                  />
                </Suspense>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default CatCard;
