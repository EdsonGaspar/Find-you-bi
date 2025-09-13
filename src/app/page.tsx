import { Banner } from "@/components/banner/banner";
import { HeaderDesktop } from "@/components/header/header";
import { SwictherTheme } from "@/components/header/swither/switcher-theme";
import { SearchDocument } from "@/components/search-document/searchdocument";
import { ShowCards } from "@/components/show-cards/showcards";

export default function Home() {
  return (
    <main className="">
      <section className="container mx-auto flex justify-between gap-5 items-center">
        <div className="flex-1">
          <HeaderDesktop />
        </div>
        <div className="">
          <SwictherTheme />
        </div>
      </section>
      <section>
        <SearchDocument />
      </section>
      <section>
        <Banner />
      </section>
      <ShowCards />
    </main>
  );
}
