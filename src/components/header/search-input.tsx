import Link from "next/link";
import { H1 } from "../H1/h1";

export function HeaderDesktop() {
  return (
    <nav className="hidden mx-auto py-4 md:flex justify-center items-center">
      <ul className="flex gap-4 border flex-1 justify-around max-w-3xl items-center text-xl rounded-full p-2 font-mono">
        <Link href={"/"}>
          <li className="rounded-full bg-accent px-3.5 py-1.5">Início</li>
        </Link>
        <Link href="/posters">
          <li className="rounded-full  px-3.5 py-1.5">Publicar</li>
        </Link>
        <li className="rounded-full  px-3.5 py-1.5">Procurar</li>
      </ul>
    </nav>
  );
}

export function HeaderMobile() {
  return (
    <nav className="flex mx-auto  py-4 md:hidden justify-between items-center">
      <H1>Mobile</H1>
    </nav>
  );
}
