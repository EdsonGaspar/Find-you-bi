import { Search } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { Input } from "../ui/input";

interface SearchDocumentsProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export function SearchDocuments({ search, setSearch }: SearchDocumentsProps) {
  return (
    <div className="container mx-auto px-5 flex items-center justify-center">
      <div className=" relative flex items-center justify-center min-w-xs max-w-5xl h-12 flex-1">
        <Input
          type="text"
          placeholder="Pesquisar..."
          className="pl-10 h-full text-lg placeholder:text-lg"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Search className="absolute left-2 top-1/3 h-5 w-5 text-muted-foreground hover:text-accent-foreground" />
      </div>
    </div>
  );
}
