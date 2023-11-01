import SectionUneDesktop from "./components/desktop/accueil/section-1";
import SectionDeuxDesktop from "./components/desktop/accueil/section-2";
import SectionTroisDesktop from "./components/desktop/accueil/section-3";
import SectionQuatreDesktop from "./components/desktop/accueil/section-4";
import SectionCinqDesktop from "./components/desktop/accueil/section-5";
import SectionSixDesktop from "./components/desktop/accueil/section-6";
import SectionUne from "./components/mobile/accueil/section-1";
import SectionDeux from "./components/mobile/accueil/section-2";
import SectionTrois from "./components/mobile/accueil/section-3";
import SectionQuatre from "./components/mobile/accueil/section-4";
import SectionCinq from "./components/mobile/accueil/section-5";
import SectionSix from "./components/mobile/accueil/section-6";

const Accueil = (): JSX.Element => {
  return (
    <>
      <div className="md:hidden" id="accueil">
        <SectionUne logoWhite={false} />
        <SectionDeux logoWhite={false} />
        <SectionTrois logoWhite />
        <SectionQuatre logoWhite={false} />
        <SectionCinq logoWhite />
        <SectionSix logoWhite />
      </div>
      <div className="hidden md:block">
        <SectionUneDesktop logoWhite />
        <SectionDeuxDesktop logoWhite={false} />
        <SectionTroisDesktop logoWhite />
        <SectionQuatreDesktop logoWhite={false} />
        <SectionCinqDesktop logoWhite />
        <SectionSixDesktop logoWhite />
      </div>
    </>
  );
};

export default Accueil;
