"use client";
import { useMemo, useState } from "react";
import { data } from "../../../data/data";
import { Banner } from "../banner/banner";
import { SearchDocuments } from "../search-document/search-documents";
import { ShowCards } from "../show-cards/showcards";

export function MainComponent() {
  const [search, setSearch] = useState("");

  const lowerBusca = search.toLowerCase();

  const dataFilted = useMemo(
    () =>
      data.filter(
        (eachElement) =>
          eachElement.name.toLowerCase().includes(lowerBusca) ||
          eachElement.bi.includes(search)
      ),
    [search]
  );

  return (
    <div className="space-y-8">
      <SearchDocuments search={search} setSearch={setSearch} />

      <Banner />

      <ShowCards dataFilted={dataFilted ?? []} />
    </div>
  );
}
