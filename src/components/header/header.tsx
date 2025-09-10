"use client";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { SwictherTheme } from "./swither/switcher-theme";

export function HeaderDesktop() {
  return (
    <header className="container mx-auto px-5 py-4 flex justify-between items-center">
      <div className="relative flex-1 max-w-sm">
        <Input type="text" placeholder="Pesquisar..." className="pl-8" />
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      </div>
      <div className="">
        <SwictherTheme />
      </div>
    </header>
  );
}

export function HeaderMobile() {
  return <header></header>;
}
