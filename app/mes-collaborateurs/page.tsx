import React from "react";
import SectionUne from "../components/mobile/mes-collaborateurs/section-1";
import SectionDeux from "../components/mobile/mes-collaborateurs/section-2";

const MesCollaborateurs = () => {
  return (
    <div className="md:hidden" id="mes-collaborateurs">
      <SectionUne logoWhite={false} />
      <SectionDeux logoWhite />
    </div>
  );
};
export default MesCollaborateurs;
