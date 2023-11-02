import React from "react";
import SectionUne from "../components/mobile/mes-collaborateurs/section-1";
import SectionDeux from "../components/mobile/mes-collaborateurs/section-2";
import SectionUneDesktop from "../components/desktop/mes-collaborateurs/section-1";
import SectionDeuxDesktop from "../components/desktop/mes-collaborateurs/section-2";

const MesCollaborateurs = () => {
  return (
    <>
      <div className="md:hidden" id="mes-collaborateurs">
        <SectionUne logoWhite={false} />
        <SectionDeux logoWhite />
      </div>
      <div className="hidden md:block" id="mes-collaborateurs">
        <SectionUneDesktop logoWhite={false} />
        <SectionDeuxDesktop logoWhite />
      </div>
    </>
  );
};
export default MesCollaborateurs;
