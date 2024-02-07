"use client";
import React, { useEffect } from "react";
import { sectionsProps } from "../../../../lib/interfaces/interfaces";
import useAxios from "@/app/lib/interfaces/use-axios";
import Loader from "@/app/components/loader/loader";

const SectionUneDesktop = ({ logoWhite, category }: sectionsProps) => {
  const { response, loading, error, sendData } = useAxios({
    method: "get",
    url: "/realisations",
    headers: {
      accept: "application/ld+json",
    },
  });
  const realisationEnCours = response?.data["hydra:member"].filter(
    (item: any) => item.categorie === category
  )[0];
  return (
    <section
      id="section-1"
      className={`w-full ${logoWhite ? "white" : "black"}`}
    >
      <div className="w-full mx-auto">
        <div
          className="text-center min-h-[60vh] w-full flex flex-col items-center justify-between pt-32"
          style={{
            backgroundImage: `url(/img/desktop/realisations/fond-entete-desktop-category-realisations.png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-md grow flex flex-col justify-center">
            {loading && (
              <Loader color={"#FFFFFF"} width={"63"} height={"55px"} />
            )}
            {error && <p>{error.message}</p>}
            {!loading && !error && (
              <div>
                <h1 className="s1AP mb-10">{realisationEnCours?.titre}</h1>
                <p className="px-6">{realisationEnCours?.sousTitre}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionUneDesktop;
