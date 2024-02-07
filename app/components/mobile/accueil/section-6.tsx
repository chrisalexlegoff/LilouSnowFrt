"use client";
import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";

const SectionSix = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-6"
      style={{
        backgroundImage: `url('/img/mobile/accueil/fond-accueil-mobile-section-6.png')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={`min-h-screen w-full py-12 ${logoWhite ? "white" : "black"}`}
    >
      <div
        className="min-h-[91vh] w-full max-w-md mx-auto flex flex-col justify-around"
        style={{
          backgroundImage: `url('/img/mobile/accueil/fond-accueil-mobile-section-6-bis.png')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="text-center w-3/4 flex flex-col items-center justify-center mx-auto">
          <div className="text opacity-0 z-10 h-[300px] flex flex-col justify-center">
            <h2>
              Citation ou mantra au choix
              <br />
              <br /> Nunc condimentum at neque et magna nulla diam. Vitae,
              pellentesque donec hendrerit mi justo.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
