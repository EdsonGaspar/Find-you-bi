import { H1 } from "@/components/H1/h1";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  return (
    <main className="container mx-auto px-5 py-6 flex flex-col items-center justify-center">
      <form className="flex gap-6 flex-col border p-7 w-full md:max-w-xl flex-1 rounded-3xl">
        <H1>Cadastre-se</H1>
        <div className="space-y-3">
          <Label>Nome completo</Label>
          <Input type="text" placeholder="Digite seu nome completo" />
        </div>
        <div className="space-y-3">
          <Label>Telefone</Label>
          <Input type="text" placeholder="Seu número de telefone" />
        </div>
        <div className="space-y-3">
          <Label>Senha</Label>
          <Input type="password" placeholder="Digite senha" />
        </div>
        <div className="space-y-3">
          <Label>Confirmar senha</Label>
          <Input type="password" placeholder="Confirmar senha" />
        </div>
        <Button
          type="submit"
          className="w-full md:max-w-60 cursor-pointer transition-all duration-300 text-lg py-5"
        >
          Cadastrar
        </Button>
      </form>
    </main>
  );
}
