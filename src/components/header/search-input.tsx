"use client";
import { H1 } from "../H1/h1";

export function SearchInputDesktop() {
  return (
    <div className="hidden mx-auto  py-4 md:flex justify-between items-center">
      <H1>Desktop</H1>
    </div>
  );
}

export function SearchInputMobile() {
  return (
    <div className="flex mx-auto  py-4 md:hidden justify-between items-center">
      <H1>Mobile</H1>
    </div>
  );
}
