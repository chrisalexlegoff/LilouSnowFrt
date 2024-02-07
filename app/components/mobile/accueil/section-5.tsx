import Link from "next/link";
import React from "react";
import { sectionsProps } from "@/app/lib/interfaces/interfaces";

const SectionCinq = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-5"
      className={`min-h-screen w-full bg-blanc ${
        logoWhite ? "white" : "black"
      }`}
    >
      <div className="min-h-screen max-w-md mx-auto flex flex-col justify-around items-center py-24 text-white w-10/12">
        <h2>Mes tarifs</h2>
        <p className="text-justify">
          Mes tarifs sont en dessous des prix pratiqués par les autres
          prestataires car mon but est d’aider le plus grand nombre d’entre
          vous.
        </p>
        <p className="text-justify">
          Il n’y a pas de devis à la tête de client : les prix sont fixent et
          non negociables.
        </p>
        <p className="text-justify">
          Le paiement a lieu en début de séance. Vous pouvez si vous souhaitez
          les espacer, les stopper pour quelques raisons que ce soit : il n’y a
          aucune obligation de continuer les soins
        </p>
        {/* <p className="text-justify">
          Les démarches préalable de création, unique et sur-mesure couteront
          50€. Selon la prestation souhaitée, le prix variera entre 300 et 450
          euros la journée.
        </p>
        <p className="text-justify">
          Plus de détail sur les pages correspondants aux soins demandés. Vous
          pouvez également me contacter directement.
        </p> */}
        <div className="w-full">
          <Link href="mailto:contact@lilousnow.fr" passHref scroll={false}>
            <button className="group mx-auto roup w-3/4 hover:bg-encre-de-chine h-20 block border-2 border-encre-de-chine text-encre-de-chine">
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

export default SectionCinq;
