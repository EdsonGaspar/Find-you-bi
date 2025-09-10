"use client";
import { useEffect, useState } from "react";
import { HeaderDesktop } from "@/components/header/header";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <main>
      <HeaderDesktop />
    </main>
  );
}
