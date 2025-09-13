import { Search } from "lucide-react";
import { useState } from "react";
import { data } from "../../../data/data";
import { Input } from "../ui/input";

export function SearchDocument() {
  const [search, setSearch] = useState("");

  const dataFilted = data.filter(
    (eachElement) =>
      eachElement.name.includes(search) || eachElement.bi.includes(search)
  );

  return (
    <div className="flex justify-center items-center my-5 md:my-8">
      <div className="relative flex items-center justify-center min-w-xs w-5xl h-12">
        <Input
          type="text"
          placeholder="Pesquisar..."
          className="pl-10 h-full text-lg"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Search className="absolute left-2 top-1/3 h-5 w-5 text-muted-foreground" />
      </div>
    </div>
  );
}
