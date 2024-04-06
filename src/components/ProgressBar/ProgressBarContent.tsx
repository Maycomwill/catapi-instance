import clsx from "clsx";
import { ReactNode } from "react";

function ProgressBarContent({ progress }: { progress: number }) {
  function getPercentage(progress: number) {
    const final = 10;
    const result = (progress * 100) / final;
    console.log(result);
    return `${result}%`;
  }
  const percentage = getPercentage(progress);

  return (
    <div
      style={{
        width: percentage,
      }}
      className="bg-sky-500 absolute delay-250 animate-width-grow h-6"
    />
  );
}

export default ProgressBarContent;
