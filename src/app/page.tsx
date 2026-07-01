import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Advantages } from "@/components/sections/advantages";
import { Results } from "@/components/sections/results";
import { Programs } from "@/components/sections/programs";
import { AgeGroups } from "@/components/sections/age-groups";
import { Achievements } from "@/components/sections/achievements";
import { Teachers } from "@/components/sections/teachers";
import { Gallery } from "@/components/sections/gallery";
import { Reviews } from "@/components/sections/reviews";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Results />
        <Programs />
        <AgeGroups />
        <Achievements />
        <Teachers />
        <Gallery />
        <Reviews />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
