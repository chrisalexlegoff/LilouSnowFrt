"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { sectionsProps } from "../../../lib/interfaces/interfaces";
import { Etoile } from "../../../lib/svg/Accueil/etoile-mobile";
import { FondAccueilSectionUneImg } from "../../../lib/svg/Accueil/fond-section-1-mobile";
import { Fleche } from "../../../lib/svg/Accueil/fleche";

const SectionUne = ({ logoWhite }: sectionsProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        ".rotate",
        {
          scale: 0.8,
          rotate: -120,
        },
        {
          scale: 1,
          rotate: 0,
          duration: 3,
        }
      );
      gsap.fromTo(
        ".text",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 6,
        }
      );
    }
  }, []);
  return (
    <section
      id="section-1"
      style={{
        backgroundImage: `url('/img/mobile/accueil/fond-accueil-mobile-section-1-bis.png')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={`min-h-screen w-full ${logoWhite ? "white" : "black"}`}
    >
      <div className="min-h-[91vh] w-full max-w-md mx-auto flex flex-col justify-around pt-32">
        <div className="text-center w-3/4 flex flex-col items-center justify-center mx-auto">
          <FondAccueilSectionUneImg />
          <div className="text opacity-0 z-10 h-[300px] flex flex-col justify-center">
            <div className="w-fit mx-auto">
              <Etoile color={"#000707"} width={"72px"} height={"63px"} />
            </div>
            <h1 className="h1-accueil-section-1 mt-3 mb-1">
              Tatouage Thérapeutique
            </h1>
            <h2 className="h2-accueil-section-1">
              Covering cicatrices et brûlures
            </h2>
            <h3 className="h3-accueil-section-1 mt-3">
              Lille - Paris
              <br /> Lyon - Saint Malo
            </h3>
          </div>
        </div>
        <Link href={"/#section-2"}>
          <div className="w-fit mx-auto">
            <Fleche color="white" width="21px" height="66px" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SectionUne;
