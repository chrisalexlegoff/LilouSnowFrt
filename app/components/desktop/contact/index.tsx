import { contactDesktopProps } from "@/app/lib/interfaces/interfaces.js";
import React from "react";
import Reseaux from "../../widgets/reseaux";

export const ContactDesktop = ({ classname }: contactDesktopProps) => {
  return (
    <div className={classname}>
      <div className="w-1/2">
        <h2 className="mb-6">Me contacter ...</h2>
        <p className="mb-12 lg:mb-0 pr-6">
          Vous êtes interessé par mes services ? Vous avez des questions ?
          N’hésitez pas, je suis là pour vous répondre...
        </p>
      </div>
      <div className="flex w-1/2 min-w-[400px] justify-around text-center">
        <div className="flex flex-col w-fit min-w-[130px]">
          <p className="texte-reseau-accueil mb-6">Suivez-moi</p>
          <Reseaux
            colorIcon={"#000707"}
            widthIcon={"45"}
            heightIcon={"39px"}
            homeIcon={false}
            slug={["facebook", "instagram"]}
            classname={"flex w-full justify-around"}
          />
        </div>
        <div className="flex flex-col w-fit min-w-[130px]">
          <p className="texte-reseau-accueil mb-6">Contact</p>
          <Reseaux
            colorIcon={"#000707"}
            widthIcon={"45"}
            heightIcon={"39px"}
            homeIcon={false}
            slug={["email", "messenger"]}
            classname={"flex w-full justify-around"}
          />
        </div>
      </div>
    </div>
  );
};
