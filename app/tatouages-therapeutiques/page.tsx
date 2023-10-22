// "use client";
import React from "react";
import SectionUne from "../components/mobile/tatouages-therapeutiques/section-1";
import SectionDeux from "../components/mobile/tatouages-therapeutiques/section-2";

const MesRealisations = () => {
  return (
    <div className="md:hidden" id="mes-Realisations">
      <SectionUne logoWhite={false} />
      <SectionDeux logoWhite />
    </div>
  );
};
export default MesRealisations;
