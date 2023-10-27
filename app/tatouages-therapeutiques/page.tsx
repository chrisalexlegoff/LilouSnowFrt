import React from "react";
import SectionUne from "../components/mobile/tatouages-therapeutiques/section-1";
import SectionDeux from "../components/mobile/tatouages-therapeutiques/section-2";
import SectionTrois from "../components/mobile/tatouages-therapeutiques/section-3";
import SectionQuatre from "../components/mobile/tatouages-therapeutiques/section-4";

const MesRealisations = () => {
  return (
    <div className="md:hidden" id="mes-Realisations">
      <SectionUne logoWhite={false} />
      <SectionDeux logoWhite />
      <SectionTrois logoWhite />
      <SectionQuatre logoWhite />
    </div>
  );
};
export default MesRealisations;
