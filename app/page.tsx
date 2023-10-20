import React, { Suspense } from "react";
import SectionUne from "./components/mobile/accueil/section-1";
import SectionDeux from "./components/mobile/accueil/section-2";
import SectionTrois from "./components/mobile/accueil/section-3";
import SectionQuatre from "./components/mobile/accueil/section-4";
import SectionCinq from "./components/mobile/accueil/section-5";
import SectionSix from "./components/mobile/accueil/section-6";
import Loader from "./components/loader/loader";

const Accueil = (): JSX.Element => {
  // const element = document.querySelector("#id")
  return (
    // <Suspense
    //   fallback={
    //     <Loader color="#000000" width="50px" height="50px" classname="" />
    //   }
    // >
    <div className="md:hidden" id="accueil">
      <SectionUne logoWhite={false} />
      <SectionDeux logoWhite={false} />
      <SectionTrois logoWhite />
      <SectionQuatre logoWhite={false} />
      <SectionCinq logoWhite />
      <SectionSix logoWhite />
    </div>
    // </Suspense>
  );
};

export default Accueil;
