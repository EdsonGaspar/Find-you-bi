import { Header } from "../header/header";
import { SwictherTheme } from "../header/swither/switcher-theme";

export function CompletedHeader() {
  return (
    <section className="container mx-auto flex justify-between gap-5 items-center px-5">
      <div className="flex-1">
        <Header />
      </div>
      <div>
        <SwictherTheme />
      </div>
    </section>
  );
}
