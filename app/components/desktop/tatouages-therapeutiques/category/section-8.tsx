"use client";
import React from "react";
import { sectionsProps } from "../../../../lib/interfaces/interfaces";
import useAxios from "@/app/lib/interfaces/use-axios";
import Loader from "../../../loader/loader";
import { FondTarifImg } from "@/app/lib/svg/tarif/fond-tarif-desktop";

const SectionHuitDesktop = ({ logoWhite, category }: sectionsProps) => {
  const { response, loading, error, sendData } = useAxios({
    method: "get",
    url: "/tarifs",
    headers: {
      accept: "application/ld+json",
    },
  });
  const tarifs = response?.data["hydra:member"].filter(
    (el: any) => el.categorie === category?.toLowerCase()
  );
  return (
    <section
      id="section-8-desktop"
      className={`min-h-screen w-full bg-encre-de-chine ${
        logoWhite ? "white" : "black"
      }`}
    >
      <div className="max-w-lg w-10/12 mx-auto py-12">
        <h2 className="pt-6 pb-12 text-center">Tarifs</h2>
        <p className="py-2 text-justify">
          Mes tarifs sont en dessous des prix pratiqués par les autres
          prestataires car mon but est d’aider le plus grand nombre d’entre
          vous.
        </p>
        <p className="py-2 text-justify">
          Le paiement a lieu en début de séance. Vous pouvez si vous souhaitez
          les espacer, les stopper pour quelques raisons que ce soit : il n’y a
          aucune obligation de continuer les soins.
        </p>
      </div>
      <div className="flex flex-wrap">
        {loading && <Loader color={"#000707"} width={"53"} height={"45px"} />}
        {error && <p>{error.message}</p>}
        {!loading &&
          !error &&
          tarifs?.map((tarif: any, index: number) => {
            return (
              <div
                key={index}
                className="min-w-[700px] text-center mx-auto px-3"
              >
                {/* <FondTarifImg /> */}
                <div
                  className="min-h-[725px] flex flex-col items-center justify-center"
                  style={{
                    backgroundImage: `url('/img/desktop/tarif/tarif-desktop.png')`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                  }}
                >
                  <div className="text z-10 flex flex-col justify-center max-w-sm">
                    <p className="text-center !text-encre-de-chine">
                      {tarif.titre}
                    </p>
                    <p className="pt-4 text-center !text-[#0EA7C9]">
                      {tarif.tarifs}
                    </p>
                    <div className="pt-4">
                      <p className="text-left !text-encre-de-chine">
                        {tarif.horaires ? tarif.horaires : ""} <br /> Comprend :
                      </p>
                      {Object.entries(tarif?.contenuSeance)
                        .slice(0, 5)
                        .map((element: any, index: number) => {
                          return (
                            <p
                              key={index}
                              className="text-left !text-encre-de-chine"
                            >
                              {`+ ${element}`}
                            </p>
                          );
                        })}
                    </div>
                    <p className="pt-4 text-justify !text-encre-de-chine">
                      {tarif.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default SectionHuitDesktop;
