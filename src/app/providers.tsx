"use client";
import { GlobalContextProvider } from "@/common/context/store";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

export default function Providers({ children }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <GlobalContextProvider>
      <ThemeProvider attribute="class">{children}</ThemeProvider>{" "}
    </GlobalContextProvider>
  );
}
