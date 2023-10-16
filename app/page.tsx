import React from "react";
import SectionUne from "./components/mobile/accueil/section-1";
import SectionDeux from "./components/mobile/accueil/section-2";
import SectionTrois from "./components/mobile/accueil/section-3";
import SectionQuatre from "./components/mobile/accueil/section-4";
import SectionCinq from "./components/mobile/accueil/section-5";
import SectionSix from "./components/mobile/accueil/section-6";
import { Footer } from "./components/footer/mobile/footer";

const Accueil = (): JSX.Element => {
  // const element = document.querySelector("#id")
  return (
    <div className="md:hidden">
      <SectionUne logoWhite={false} />
      <SectionDeux logoWhite={false} />
      <SectionTrois logoWhite />
      <SectionQuatre logoWhite={false} />
      <SectionCinq logoWhite />
      <SectionSix logoWhite />
      <Footer />
    </div>
  );
};

export default Accueil;
