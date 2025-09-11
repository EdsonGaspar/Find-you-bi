"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { tv } from "tailwind-variants";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const inputVariants = tv({
  base: "absolute top-[3px] left-[4px] size-6 rounded-full bg-transparent flex items-center justify-center shadow-md transform transition duration-300 ease-in-out ",
  variants: {
    variant: {
      dark: "translate-x-0",
      light: "translate-x-6",
    },
  },
  defaultVariants: {
    variant: "dark",
  },
});

export function SwictherTheme() {
  const [muted, setMuted] = useState("dark");
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(muted);
  }, [setTheme, muted]);

  return (
    <div className="flex items-center justify-center">
      <Label
        className="flex items-center cursor-pointer"
        htmlFor="theme-toggle"
      >
        <div className="w-14 h-8 relative rounded-3xl bg-background border ">
          <Input
            type="checkbox"
            id="theme-toggle"
            className="hidden"
            onChange={() => setMuted(muted === "dark" ? "light" : "dark")}
            checked={muted === "dark"}
          />
          <div
            className={inputVariants({
              variant: muted === "dark" ? "light" : "dark",
            })}
          >
            {muted === "dark" ? (
              <MoonIcon className="fill-icon-color size-5" />
            ) : (
              <SunIcon className="fill-icon-color size-5" />
            )}
          </div>
        </div>
      </Label>
    </div>
  );
}
