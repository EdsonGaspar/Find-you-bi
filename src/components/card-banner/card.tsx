import { SearchIcon } from "lucide-react";
import Image from "next/image";
import imageBi from "@/../public/imgbi.png";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface CardBannerProps {
  nome: string;
  currentLocal: string;
}
export default function CardBanner({ currentLocal, nome }: CardBannerProps) {
  return (
    <Card className="hover:border-primary transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex justify-between gap-5 items-center ">
          <p className="text-lg font-semibold">
            <span className="text-foreground">Nome:</span> {nome}
          </p>
          <div>
            <span>Status: something</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3">
        <div className="relative w-full md:max-w-md h-48 md:h-56  rounded-xl overflow-hidden">
          <Image src={imageBi} alt="Imagen" fill />
        </div>
      </CardContent>
      <CardFooter>
        <p>
          <span className="text-lg font-semibold text-foreground">
            Local actual:
          </span>{" "}
          {currentLocal}
        </p>
      </CardFooter>
    </Card>
  );
}
