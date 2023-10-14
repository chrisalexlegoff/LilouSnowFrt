import React from "react";
import { accueilProps } from "./lib/interfaces/interfaces";
// import { Etoile } from "./lib/svg/Accueil/etoile-mobile";
import SectionUne from "./components/mobile/accueil/section-1/section-1";
import SectionDeux from "./components/mobile/accueil/section-1/section-2";
import SectionTrois from "./components/mobile/accueil/section-1/section-3";
import SectionQuatre from "./components/mobile/accueil/section-1/section-4";
import SectionCinq from "./components/mobile/accueil/section-1/section-5";
import SectionSix from "./components/mobile/accueil/section-1/section-6";
import SectionSept from "./components/mobile/accueil/section-1/section-7";
import { Footer } from "./components/footer/mobile/footer";

const Accueil = ({}: accueilProps): JSX.Element => {
  // const element = document.querySelector("#id")
  return (
    <div className="md:hidden">
      {/* Section une */}
      {/* <SectionUne seo={seo} homeMobile={homeMobile} logoWhite={false} />
        <SectionDeux seo={seo} homeMobile={homeMobile} logoWhite={false} /> */}
      <div className="md:hidden">
        {/* <section
          id="section-1"
          className="flex min-h-[92vh]"
          style={{
            backgroundImage: `url('img/mobile/accueil/fond-accueil-mobile-section-1-bis.png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            className="flex flex-col w-full items-center justify-center"
            style={{
              backgroundImage: `url('img/mobile/accueil/fond-accueil-mobile-section-1.png')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          >
            <Etoile />
            <div className="text-center">
              <h1 className="h1-accueil-section-1">Tatouage thérapeutique</h1>
              <h2 className="h2-accueil-section-1">
                Covering cicatrices et brûlures
              </h2>
            </div>
          </div>
          <div></div>
        </section> */}
        <SectionUne logoWhite={false} />
        <SectionDeux logoWhite={false} />
        <SectionTrois logoWhite />
        <SectionQuatre logoWhite={false} />
        <SectionCinq logoWhite />
        <SectionSix logoWhite />
        <SectionSept logoWhite={false} />
        <Footer />
        {/* 
        <section id="section-4" className="white flex h-[700px] bg-[white]">
          <h1>section 4</h1>
        </section>
        <section id="section-5" className="flex h-[700px]  bg-[black]">
          <h1>section 5</h1>
        </section>
        <section id="section-6" className="white flex h-[700px] bg-[white]">
          <h1>section 6</h1>
        </section> */}
      </div>
    </div>
  );
};

export default Accueil;
