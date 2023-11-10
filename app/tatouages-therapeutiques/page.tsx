import React from "react";
import SectionUne from "../components/mobile/tatouages-therapeutiques/section-1";
import SectionDeux from "../components/mobile/tatouages-therapeutiques/section-2";
import SectionTrois from "../components/mobile/tatouages-therapeutiques/section-3";
import SectionQuatre from "../components/mobile/tatouages-therapeutiques/section-4";
import SectionUneDesktop from "../components/desktop/tatouages-therapeutiques/section-1";
import SectionDeuxDesktop from "../components/desktop/tatouages-therapeutiques/section-2";
import SectionTroisDesktop from "../components/desktop/tatouages-therapeutiques/section-3";
import SectionQuatreDesktop from "../components/desktop/tatouages-therapeutiques/section-4";

const MesRealisations = () => {
  return (
    <>
      <div className="md:hidden" id="mes-Realisations">
        <SectionUne logoWhite={false} />
        <SectionDeux logoWhite />
        <SectionTrois logoWhite />
        <SectionQuatre logoWhite />
      </div>
      <div className="hidden md:block" id="mes-Realisations">
        <SectionUneDesktop logoWhite={false} />
        <SectionDeuxDesktop logoWhite />
        <SectionTroisDesktop logoWhite />
        <SectionQuatreDesktop logoWhite />
      </div>
    </>
  );
};
export default MesRealisations;
