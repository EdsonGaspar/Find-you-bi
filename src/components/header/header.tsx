import { SearchInputDesktop, SearchInputMobile } from "./search-input";

export function HeaderDesktop() {
  return (
    <header>
      <SearchInputDesktop />
      <SearchInputMobile />
    </header>
  );
}
