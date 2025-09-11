import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface H1Props extends ComponentProps<"h1"> {}
export function H1({ className, children }: H1Props) {
  return (
    <h1 className={cn("text-2xl md:text-4xl lg:text-5xl", className)}>
      {children}
    </h1>
  );
}

interface H2Props extends ComponentProps<"h2"> {}
export function H2({ className, children }: H2Props) {
  return (
    <h1 className={cn("text-xl md:text-3xl lg:text-4xl", className)}>
      {children}
    </h1>
  );
}

interface H3Props extends ComponentProps<"h3"> {}
export function H3({ className, children }: H3Props) {
  return (
    <h1 className={cn("text-lg md:text-2xl lg:text-3xl", className)}>
      {children}
    </h1>
  );
}
