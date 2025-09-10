"use client";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { ThemeSwitcher } from "./components/theme-swimer";

export function HeaderDesktop() {
  return (
    <header className="container mx-auto px-5 py-4 border-2 ">
      <div className="relative max-w-sm border">
        <Input type="text" placeholder="Pesquisar..." className="pl-8" />
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      </div>
      <div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}

export function HeaderMobile() {
  return <header></header>;
}
