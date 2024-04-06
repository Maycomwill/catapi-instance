import { ReactNode } from "react";

function ProgressBarRoot({ children, progress }: { children: ReactNode, progress: number }) {
  function getPercentage(progress: number) {
    const final = 10;
    const result = (progress * 100) / final;
    console.log(result);
    return `${result}%`;
  }
  const percentage = getPercentage(progress);
  return (
    <div className="w-1/2 relative box-border overflow-hidden rounded-full bg-zinc-200 h-6 max-h-6">
      {children}
      <span className="absolute inset-0 flex items-center justify-end mr-2 text-sm font-medium text-gray-900 leading-none">
        {percentage}
      </span>
    </div>
  );
}

export default ProgressBarRoot;
