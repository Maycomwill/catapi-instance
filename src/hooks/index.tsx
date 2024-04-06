import { CatsContextProvider } from "@/context/Cats";
import { ReactNode } from "react";

export default function AppProvider({ children }: { children: ReactNode }) {
  return <CatsContextProvider>{children}</CatsContextProvider>;
}
