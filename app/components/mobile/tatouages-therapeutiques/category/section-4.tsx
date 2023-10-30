"use client";
import React from "react";
import { sectionsProps } from "../../../../lib/interfaces/interfaces";
import useAxios from "@/app/lib/helpers/use-axios";
import Loader from "../../../loader/loader";
import { FondTarifImg } from "@/app/lib/svg/tarif/fond-tarif-mobile";

const SectionQuatre = ({ logoWhite, category }: sectionsProps) => {
  const { response, loading, error, sendData } = useAxios({
    method: "get",
    url: "/tarifs",
    headers: {
      accept: "application/ld+json",
    },
  });
  console.log(response, category);
  return (
    <section
      id="section-4-tarif"
      className={`min-h-screen w-screen bg-encre-de-chine ${
        logoWhite ? "white" : "black"
      }`}
    >
      {loading && <Loader color={"#000707"} width={"53"} height={"45px"} />}
      {error && <p>{error.message}</p>}
      {!loading &&
        !error &&
        response?.data["hydra:member"]
          .filter(
            (el: any) => el.categorie === category?.toLowerCase() && el.isActive
          )
          .map((tarif: any, index: number) => {
            return (
              <div key={index}>
                <div className="max-w-md w-10/12 mx-auto py-12">
                  <h2 className="pt-6 pb-12 text-center">
                    {tarif.categorie.charAt(0).toUpperCase()}
                    {category?.slice(1)}
                    <br />
                    Ma méthode :
                  </h2>
                  {Object.values(tarif.description).map(
                    (element: any, index: number) => {
                      return (
                        <p key={index} className="py-2 text-justify">
                          {element}
                        </p>
                      );
                    }
                  )}
                </div>
                <div
                  className="min-h-[25vh] w-full"
                  style={{
                    backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_URL}/${tarif.imageName})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                />
                <div className="max-w-md w-10/12 mx-auto py-12">
                  <h2 className="pt-6 pb-12 text-center">Tarifs</h2>
                  <p className="py-2 text-justify">
                    Mes tarifs sont en dessous des prix pratiqués par les autres
                    prestataires car mon but est d’aider le plus grand nombre
                    d’entre vous.
                  </p>
                  <p className="py-2 text-justify">
                    Le paiement a lieu en début de séance. Vous pouvez si vous
                    souhaitez les espacer, les stopper pour quelques raisons que
                    ce soit : il n’y a aucune obligation de continuer les soins.
                  </p>
                </div>
                <div className="text-center w-3/5 flex flex-col items-center justify-center mx-auto pt-24 pb-36">
                  <FondTarifImg />
                  <div className="text z-10 flex flex-col justify-center">
                    <p className="text-center !text-encre-de-chine">
                      {tarif.categorie.charAt(0).toUpperCase()}
                      {category?.slice(1)}
                    </p>
                    {tarif?.alternateName && (
                      <p className="!text-encre-de-chine">{`(ou ${tarif.alternateName})`}</p>
                    )}
                    <p className="pt-4 text-center !text-[#0EA7C9]">
                      {`${tarif.tarifBase} \u20ac la séance`}
                    </p>
                    <div className="pt-4">
                      <p className="text-justify !text-encre-de-chine">{`Journée complète de ${tarif.horaireDebut}h à ${tarif.horaireFin}h.`}</p>
                      <p className="text-left !text-encre-de-chine">
                        Comprend :{" "}
                      </p>
                      {Object.values(tarif.contenuSeance)
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
                    <p className="pt-4 text-justify !text-encre-de-chine">{`Chaque séance supplémentaire est à ${tarif.tarifSup}\u20ac tout compris. (${tarif.horaireDebut}h-${tarif.horaireFin}h).`}</p>
                  </div>
                </div>
              </div>
            );
          })}
    </section>
  );
};

export default SectionQuatre;
