import { HeaderDesktop } from "@/components/header/header";
import { SwictherTheme } from "@/components/header/swither/switcher-theme";

export default function Home() {
  return (
    <main className="container flex justify-between gap-5 items-center mx-auto px-5 py-4 md:py-8">
      <div className="flex-1">
        <HeaderDesktop />
      </div>
      <div className="">
        <SwictherTheme />
      </div>
    </main>
  );
}
