import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const NavBar = () => {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <nav className="flex items-center justify-between max-w-3xl w-full mx-auto py-8 bg-opacity-60">
      <Link href="/">Chhay Bunsy</Link>
      <button
        aria-label="Toggle Light or Dark Mode"
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-600 hover:ring-2 ring-gray-300 transition-all"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {mounted && resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </nav>
  );
};

export default NavBar;
