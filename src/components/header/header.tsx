import { SearchInputDesktop, SearchInputMobile } from "./search-input";

export function Header() {
  return (
    <header>
      <SearchInputDesktop />
      <SearchInputMobile />
    </header>
  );
}
