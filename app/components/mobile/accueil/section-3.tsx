import Link from "next/link";
import React from "react";
import { sectionsProps } from "@/app/lib/interfaces/interfaces";
import { Fleche } from "@/app/lib/svg/Accueil/fleche";
import { Questions } from "@/app/components/question/question";

const SectionTrois = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-3"
      className={`min-h-screen w-screen bg-blanc ${
        logoWhite ? "white" : "black"
      }`}
    >
      <div className="min-h-screen max-w-md mx-auto flex flex-col justify-around items-center pt-24 text-white w-10/12">
        <h2>Tatouages réalisés</h2>
        <div className="mx-auto my-10 w-full min-h-60 relative">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            platea accumsan molestie sollicitudin. Tellus sed porttitor accumsan
            eu vel in. Nunc condimentum at neque et magna nulla diam. Vitae,
            pellentesque donec hendrerit mi justo...
          </p>
        </div>
        <Fleche color="#000707" />
        <Questions
          classname="w-full flex flex-col items-center"
          nombreElementsAffiches={3}
          isMobile
        />
        <div className="w-full">
          <Link href="/realisations" scroll={false} passHref>
            <button className="group mx-auto my-24 group w-3/4 hover:bg-encre-de-chine h-20 block border-2 border-encre-de-chine text-encre-de-chine">
              <span className="texte-button group-hover:text-blanc">
                Mes réalisations
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionTrois;
