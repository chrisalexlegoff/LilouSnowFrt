import Link from "next/link";
import React from "react";
import { sectionsProps } from "@/app/lib/interfaces/interfaces";
import { Fleche } from "@/app/lib/svg/Accueil/fleche";
import { Questions } from "@/app/components/question/question";
import { FloconSectionTroisAccueilDesktop } from "@/app/lib/svg/Accueil/flocon-desktop-section-3";

const SectionTroisDesktop = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-3-desktop"
      className={`w-screen bg-blanc ${logoWhite ? "white" : "black"}`}
    >
      <div className="max-w-7xl p-8 mx-auto w-3/4 flex flex-col justify-around items-center pt-24">
        <FloconSectionTroisAccueilDesktop
          color={"#000707"}
          width="200px"
          height="171px"
        />

        <div className="mx-auto mt-20 w-full min-h-60 relative">
          <h2 className="text-center">Tatouages thérapeutiques</h2>
          <p className="text-justify my-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            platea accumsan molestie sollicitudin. Tellus sed porttitor accumsan
            eu vel in. Nunc condimentum at neque et magna nulla diam. Vitae,
            pellentesque donec hendrerit mi justo.
          </p>
        </div>
        <div className="my-12 flex flex-col items-center">
          <h3 className="text-center mb-6">
            Vous avez des questions ? Voici quelques réponses couramment données
            :{" "}
          </h3>
          <Fleche color="#000707" />
        </div>
        <Questions
          classname="mt-12"
          nombreElementsAffiches={4}
          isMobile={false}
        />
        <div className="w-full">
          <Link href="/realisations" scroll={false} passHref>
            <button className="group mx-auto my-24 group w-[300px] hover:bg-encre-de-chine h-20 block border-2 border-encre-de-chine text-encre-de-chine">
              <span className="texte-button group-hover:text-blanc">
                Voir les tatouages réalisés
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionTroisDesktop;
