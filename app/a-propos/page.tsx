import React from "react";
import SectionUne from "../components/mobile/a-propos/section-1";
import SectionDeux from "../components/mobile/a-propos/section-2";
import SectionTrois from "../components/mobile/a-propos/section-3";

const Apropos = () => {
  return (
    <div className="md:hidden">
      <SectionUne logoWhite={false} />
      <SectionDeux logoWhite />
      <SectionTrois logoWhite={false} />
    </div>
  );
};
export default Apropos;
