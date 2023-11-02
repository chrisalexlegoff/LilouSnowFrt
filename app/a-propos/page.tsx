import React from "react";
import SectionUne from "../components/mobile/a-propos/section-1";
import SectionDeux from "../components/mobile/a-propos/section-2";
import SectionTrois from "../components/mobile/a-propos/section-3";
import SectionQuatre from "../components/mobile/a-propos/section-4";
import SectionUneDesktop from "../components/desktop/a-propos/section-1";
import SectionDeuxDesktop from "../components/desktop/a-propos/section-2";
import SectionTroisDesktop from "../components/desktop/a-propos/section-3";
import SectionQuatreDesktop from "../components/desktop/a-propos/section-4";

const Apropos = () => {
  return (
    <>
      <div className="md:hidden" id="a-propos">
        <SectionUne logoWhite={false} />
        <SectionDeux logoWhite />
        <SectionTrois logoWhite={false} />
        <SectionQuatre logoWhite />
      </div>
      <div className="hidden md:block" id="a-propos">
        <SectionUneDesktop logoWhite={false} />
        <SectionDeuxDesktop logoWhite />
        <SectionTroisDesktop logoWhite={false} />
        <SectionQuatreDesktop logoWhite />
      </div>
    </>
  );
};
export default Apropos;
