"use client";
import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";

const SectionSixDesktop = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-6-desktop"
      style={{
        backgroundImage: `url('/img/mobile/accueil/fond-accueil-mobile-section-6.png')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={`w-full py-12 ${logoWhite ? "white" : "black"}`}
    >
      <div
        className="min-h-[80vh] w-full max-w-2xl mx-auto flex flex-col justify-around"
        style={{
          backgroundImage: `url('/img/desktop/accueil/fond-blanc-section-6-acceuil-desktop.png')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="text-center w-3/4 flex flex-col items-center justify-center mx-auto">
          <div className="text opacity-0 z-10 h-[200px] flex flex-col justify-around">
            <h2>Citation ou mantra au choix</h2>
            <p>
              Nunc condimentum at neque et magna nulla diam. Vitae, pellentesque
              donec hendrerit mi justo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSixDesktop;
