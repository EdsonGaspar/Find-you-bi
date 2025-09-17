import { Facebook, Instagram, X, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="container mx-auto my-3.5 border shadow-2xl px-5 py-16 space-y-4 md:rounded-full bg-accent">
      <div className="border max-w-2xl text-center mx-auto" />
      <div className="flex gap-5 flex-col items-center justify-center my-7">
        <span>Logo</span>
        <ul className="flex gap-4 justify-around  max-w-2xl w-full items-center font-mono text-xl">
          <li>Inicial</li>
          <li>Sobre nós</li>
          <li>Contacte-nos</li>
        </ul>
        <div className="flex gap-5 items-center">
          <Facebook />
          <X />
          <Instagram />
          <Youtube />
        </div>
      </div>
    </footer>
  );
}
