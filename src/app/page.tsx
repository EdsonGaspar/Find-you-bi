import { Header } from "@/components/header/header";
import { SwictherTheme } from "@/components/header/swither/switcher-theme";
import { MainComponent } from "@/components/main-component/main-component";

export default function Home() {
  return (
    <main className="space-y-5">
      <section className="container mx-auto flex justify-between gap-5 items-center px-5">
        <div className="flex-1">
          <Header />
        </div>
        <div>
          <SwictherTheme />
        </div>
      </section>
      <section>
        <MainComponent />
      </section>
    </main>
  );
}
