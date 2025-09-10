"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Garante que só renderiza no client (evita bug de hidratação)
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        relative flex items-center w-14 h-8 rounded-full p-1 transition-colors
        ${isDark ? "bg-gray-800" : "bg-yellow-400"}
      `}
    >
      {/* Ícones no fundo */}
      <Sun className="absolute left-1 h-5 w-5 text-white" />
      <Moon className="absolute right-1 h-5 w-5 text-white" />

      {/* Bolinha que desliza */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="h-6 w-6 rounded-full bg-white shadow-md"
        style={{ x: isDark ? 24 : 0 }}
      />
    </button>
  );
}
