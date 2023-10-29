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
                <div className="text-center w-3/4 flex flex-col items-center justify-center mx-auto py-24">
                  <FondTarifImg />
                  <div className="text z-10 h-[300px] flex flex-col justify-center">
                    <p className="pt-6 text-center !text-encre-de-chine">
                      {tarif.categorie.charAt(0).toUpperCase()}
                      {category?.slice(1)}
                    </p>
                    {tarif?.alternateName && (
                      <p className="!text-encre-de-chine">{`(ou ${tarif.alternateName})`}</p>
                    )}
                    <h2 className="h2-accueil-section-1">
                      Covering cicatrices et brûlures
                    </h2>
                    <h3 className="h3-accueil-section-1 mt-3">
                      Lille - Paris Lyon - Saint Malo
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
    </section>
  );
};

export default SectionQuatre;
