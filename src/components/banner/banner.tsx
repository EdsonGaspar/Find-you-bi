import Image from "next/image";
import bi from "@/../public/bi.png";
import { H1 } from "../H1/h1";
export function Banner() {
  return (
    <section>
      <div className="my-5">
        <div className="flex items-center justify-around border">
          <div className="max-w-sm border mx-auto md:max-w-xl">
            <H1 className="text-center">
              <span className="text-primary">Ajude</span> o outro a encontar
              seus documentos que alguem vai te{" "}
              <span className="text-primary">ajudar</span> a encontrar o seu.
            </H1>
          </div>
          <div className="relative w-md h-80 hidden md:flex">
            <Image src={bi} alt="Imagem" fill />
          </div>
        </div>
      </div>
    </section>
  );
}
