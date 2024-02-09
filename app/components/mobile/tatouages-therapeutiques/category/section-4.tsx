"use client";
import React from "react";
import { sectionsProps } from "../../../../lib/interfaces/interfaces";
import useAxios from "@/app/lib/interfaces/use-axios";
import Loader from "../../../loader/loader";

const SectionQuatre = ({ logoWhite, category }: sectionsProps) => {
  const { response, loading, error, sendData } = useAxios({
    method: "get",
    url: "/methodes",
    headers: {
      accept: "application/ld+json",
    },
  });
  const methode = response?.data["hydra:member"].filter(
    (el: any) => el.categorie === category?.toLowerCase()
  )[0];
  return (
    <section
      id="section-6-tarifs-mobile"
      className={`w-full bg-encre-de-chine p-4 ${
        logoWhite ? "white" : "black"
      }`}
    >
      {loading && <Loader color={"#000707"} width={"53"} height={"45px"} />}
      {error && <p>{error.message}</p>}
      {!loading && !error && (
        <>
          <h2 className="pt-6 pb-12 text-center">Ma méthode</h2>
          {Object.values(methode?.description).map(
            (element: any, index: number) => {
              return (
                <p key={index} className="py-2 text-justify">
                  {element}
                </p>
              );
            }
          )}
          <div
            className="min-h-[25vh] mt-6"
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_URL}/${methode?.imageName})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
        </>
      )}
    </section>
  );
};

export default SectionQuatre;
