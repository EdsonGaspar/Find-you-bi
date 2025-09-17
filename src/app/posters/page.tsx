import { Combobox } from "@/components/combo-box/combo-box";
import { H3 } from "@/components/H1/h1";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Publics() {
  return (
    <main className="container mx-auto px-5 py-6 flex justify-center">
      <form className="flex gap-6 flex-col border p-7 md:max-w-xl flex-1 rounded-3xl">
        <div className="space-y-5">
          <H3>Dados do documento</H3>
          <div className="space-y-2">
            <Label>Tipo de documento</Label>
            <Combobox />
          </div>
          <div className="space-y-2">
            <Label>Nome {"documento"} </Label>
            <Input type="text" placeholder="Nome que está no documento" />
          </div>
          <div className="space-y-2">
            <Label>Numero {"documento"} </Label>
            <Input type="text" placeholder="Numero que está no documento" />
          </div>
          <div className="space-y-2">
            <Label>Imagen do {"documento"} </Label>
            <Input
              type="file"
              className="w-full md:w-xs"
              placeholder="Imagen que está no documento"
            />
          </div>
        </div>
        <div className="space-y-3">
          <H3>Pessoa que encontrou</H3>
          <div className="space-y-2">
            <Label>Contacto</Label>
            <Input type="text" placeholder="Telefone" />
          </div>
        </div>
        <div className="text-center md:text-start">
          <Button
            type="submit"
            className="text-lg w-sm md:w-40 md:self-start cursor-pointer transition-all duration-300"
          >
            Publicar
          </Button>
        </div>
      </form>
    </main>
  );
}
