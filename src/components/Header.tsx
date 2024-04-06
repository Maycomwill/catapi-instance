import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="w-full h-12 flex items-center justify-center">
      <Link href="/" className="text-lg font-bold">
        Cat<span className="text-lime-400">Api</span>
      </Link>
    </div>
  );
}

export default Header;
