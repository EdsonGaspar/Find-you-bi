import Image from "next/image";
import imagBanner from "@/../public/imgbanner.png";
import { H1 } from "../H1/h1";
export function Banner() {
  return (
    <section>
      <div className="my-5">
        <div className="flex items-center justify-around">
          <div className="max-w-sm mx-auto md:max-w-xl">
            <H1 className="text-center">
              <span className="text-primary">Ajude</span> o outro a encontar
              seus documentos que alguem vai te{" "}
              <span className="text-primary">ajudar</span> a encontrar o seu.
            </H1>
          </div>
          <div className="relative w-sm max-w-md h-96 hidden md:flex">
            <Image src={imagBanner} alt="Imagem" fill />
          </div>
        </div>
      </div>
    </section>
  );
}
