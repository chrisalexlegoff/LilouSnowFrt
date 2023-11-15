import Link from "next/link";
import React from "react";
import { sectionsProps } from "@/app/lib/interfaces/interfaces";

const SectionCinqDesktop = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-5-desktop"
      className={`w-screen bg-blanc ${logoWhite ? "white" : "black"}`}
    >
      <div className="max-w-5xl mx-auto flex flex-col justify-around items-center px-20 py-24">
        <h2>Mes tarifs</h2>
        <div className="pt-10 pb-24">
          <p className="py-4 text-justify">
            Mes tarifs sont en dessous des prix pratiqués par les autres
            prestataires car mon but est d’aider le plus grand nombre d’entre
            vous.
          </p>
          <p className="py-4 text-justify">
            Il n’y a pas de devis à la tête de client : les prix sont fixent et
            non negociables.
          </p>
          <p className="py-4 text-justify">
            Le paiement a lieu en début de séance. Vous pouvez si vous souhaitez
            les espacer, les stopper pour quelques raisons que ce soit : il n’y
            a aucune obligation de continuer les soins
          </p>
          {/* <p className="py-4 text-justify">
            Les démarches préalable de création, unique et sur-mesure couteront
            50€. Selon la prestation souhaitée, le prix variera entre 300 et 450
            euros la journée.
          </p>
          <p className="py-4 text-justify">
            Plus de détail sur les pages correspondants aux soins demandés. Vous
            pouvez également me contacter directement.
          </p> */}
        </div>
        <div className="w-full">
          <Link href="mailto:contact@lilousnow.fr" passHref scroll={false}>
            <button className="group mx-auto roup w-[300px] hover:bg-encre-de-chine h-20 block border-2 border-encre-de-chine text-encre-de-chine">
              <span className="texte-button group-hover:text-blanc">
                Contactez-moi
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionCinqDesktop;
