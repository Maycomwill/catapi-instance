'use client'
import { CatsContext, CatsContextProps } from "@/context/Cats";
import { useContext } from "react";

export default function useCats(): CatsContextProps {
  const context = useContext(CatsContext);
  return context;
}
