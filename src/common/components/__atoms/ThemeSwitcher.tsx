"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const currentTheme = resolvedTheme === 'system' ? 'light' : resolvedTheme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {/* {theme} */}
      {resolvedTheme}
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
};

export default ThemeSwitcher;
