import { H1 } from "../H1/h1";

export function SearchInputDesktop() {
  return (
    <nav className="hidden mx-auto py-4 md:flex justify-center items-center">
      <ul className="flex gap-4 border flex-1 justify-around max-w-3xl items-center text-xl rounded-full p-2">
        <li className="rounded-full bg-accent px-3.5 py-1.5">Início</li>
        <li className="rounded-full  px-3.5 py-1.5">Procurar</li>
        <li className="rounded-full  px-3.5 py-1.5 text-">Publicar</li>
      </ul>
    </nav>
  );
}

export function SearchInputMobile() {
  return (
    <nav className="flex mx-auto  py-4 md:hidden justify-between items-center">
      <H1>Mobile</H1>
    </nav>
  );
}
