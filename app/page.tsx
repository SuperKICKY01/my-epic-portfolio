import { Hero } from "@/components/sections/Hero";
import { Architect } from "@/components/sections/Architect";
import { Evolution } from "@/components/sections/Evolution";
import { Arsenal } from "@/components/sections/Arsenal";
import { Directives } from "@/components/sections/Directives";
import { Masterpieces } from "@/components/sections/Masterpieces";
import { CommLink } from "@/components/sections/CommLink";

export default function Page() {
  return (
    <>
      <Hero />
      <Architect />
      <Evolution />
      <Arsenal />
      <Directives />
      <Masterpieces />
      <CommLink />
    </>
  );
}
