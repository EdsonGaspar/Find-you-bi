import { MapPin, MessageCircleQuestionMark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import imageBi from "@/../public/imgbi.png";
import { Button } from "../ui/button";
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
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium">Status:</span>
            <MessageCircleQuestionMark className="w-5 h-5" />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3">
        <div className="relative w-full md:max-w-md h-48 md:h-56  rounded-xl overflow-hidden">
          <Image src={imageBi} alt="Imagen" fill />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3.5 ">
        <div className="flex justify-between items-center gap-2  w-full">
          <p className="flex items-center gap-2">
            <span className="text-lg font-semibold text-foreground">
              Local actual:
            </span>{" "}
            {currentLocal}
          </p>
          <MapPin className="w-5 h-5" />
        </div>
        <Button className="cursor-pointer w-full md:w-2xs text-lg py-5 transition-all duration-300">
          <Link href={"/register"}>Solicitar devolução</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
