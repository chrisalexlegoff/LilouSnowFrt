import React from "react";
import SectionUne from "../components/mobile/mentions-legales/section-1";
import SectionDeux from "../components/mobile/mentions-legales/section-2";

const MentionsLegales = () => {
  return (
    <div className="md:hidden" id="mentions-legales">
      <SectionUne logoWhite={false} />
      <SectionDeux logoWhite />
    </div>
  );
};
export default MentionsLegales;
