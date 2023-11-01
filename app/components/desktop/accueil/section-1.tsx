import { sectionsProps } from "@/app/lib/interfaces/interfaces";
import { Fleche } from "@/app/lib/svg/Accueil/fleche";
import { FondGaucheDesktop } from "@/app/lib/svg/Accueil/fond-gauche-desktop";
import Link from "next/link.js";
import React from "react";

const SectionUneDesktop = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-1"
      className={`w-screen ${logoWhite ? "white" : "black"}`}
    >
      <div
        className="w-full min-h-screen flex"
        style={{
          backgroundImage: `url(/img/desktop/accueil/fond-entete-desktop-accueil.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex w-full">
          <div
            className="w-2/3 min-w-[650px] flex flex-col justify-center"
            style={{
              backgroundImage: `url(/img/desktop/accueil/fond-gauche-entete-desktop-accueil.png)`,
              backgroundPosition: "center right",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col items-center w-2/3 z-10">
              <div className="">
                <h1 className="text-center mb-1">
                  Tatouage
                  <br />
                  thérapeutique
                </h1>
                <p className="text-center">Covering cicatrices et brûlures</p>
                <div className="mx-auto w-fit my-6">
                  <Link href={"/#section-2-desktop"}>
                    <div className="w-fit mx-auto">
                      <Fleche color="#000707" />
                    </div>
                  </Link>
                </div>
                <p className="text-center villes">
                  Lille - Paris
                  <br />
                  Lyon - Saint Malo
                </p>
              </div>
              <div className="w-2/3">
                <Link
                  href="mailto:lilousnow.cica@gmail.com"
                  scroll={false}
                  passHref
                >
                  <button className="mt-12 group mx-auto roup w-3/4 hover:bg-encre-de-chine h-20 block border-2 border-encre-de-chine text-encre-de-chine">
                    <span className="texte-button group-hover:text-blanc">
                      Contactez-moi
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionUneDesktop;
