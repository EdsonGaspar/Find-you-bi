"use client";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

export function SearchInputDesktop() {
  return (
    <div className="hidden mx-auto  py-4 md:flex justify-between items-center">
      <div className="relative w-full max-w-md">
        <Input type="text" placeholder="Pesquisar..." className="pl-8 flex-1" />
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  );
}

export function SearchInputMobile() {
  return (
    <div className="flex mx-auto  py-4 md:hidden justify-between items-center">
      <div className="relative flex-1 max-w-xs">
        <Input type="text" placeholder="Pesquisar..." className="pl-8" />
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  );
}
