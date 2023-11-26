"use client";
import React from "react";
import { sectionsProps } from "../../../../lib/interfaces/interfaces";
import useAxios from "@/app/lib/interfaces/use-axios";
import Loader from "../../../loader/loader";

const SectionSixDesktop = ({ logoWhite, category }: sectionsProps) => {
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
      id="section-6-desktop"
      className={`w-screen bg-encre-de-chine p-12 ${
        logoWhite ? "white" : "black"
      }`}
    >
      {loading && <Loader color={"#000707"} width={"53"} height={"45px"} />}
      {error && <p>{error.message}</p>}
      {!loading && !error && (
        <div className="flex max-w-7xl mx-auto">
          <div className="w-1/2 mx-auto mr-12">
            <h2 className="pt-6 pb-12">Ma méthode : </h2>
            {methode?.description.map((element: any, index: number) => {
              return (
                <p key={index} className="py-2">
                  {element}
                </p>
              );
            })}
          </div>
          <div
            className="min-h-[25vh] w-1/2"
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_URL}/${methode?.imageName})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
        </div>
      )}
    </section>
  );
};

export default SectionSixDesktop;
