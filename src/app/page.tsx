import { Banner } from "@/components/banner/banner";
import CardBanner from "@/components/card-banner/card";
import { HeaderDesktop } from "@/components/header/header";
import { SwictherTheme } from "@/components/header/swither/switcher-theme";
import { SearchDocument } from "@/components/search-document/searchdocument";

export default function Home() {
  return (
    <main className="container mx-auto px-5 py-4 md:py-8">
      <section className="flex justify-between gap-5 items-center">
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
      <section className="grid md:grid-cols-2 lg:grid-cols-3  gap-3 md:my-20">
        <CardBanner
          nome="Edson Gaspar"
          currentLocal="Segunda esquadra da engvia"
        />
        <CardBanner
          nome="Edson Gaspar"
          currentLocal="Segunda esquadra da engvia"
        />
        <CardBanner
          nome="Edson Gaspar"
          currentLocal="Segunda esquadra da engvia"
        />
        <CardBanner
          nome="Edson Gaspar"
          currentLocal="Segunda esquadra da engvia"
        />
        <CardBanner
          nome="Edson Gaspar"
          currentLocal="Segunda esquadra da engvia"
        />
        <CardBanner
          nome="Edson Gaspar"
          currentLocal="Segunda esquadra da engvia"
        />
        <CardBanner
          nome="Edson Gaspar"
          currentLocal="Segunda esquadra da engvia"
        />
      </section>
    </main>
  );
}
