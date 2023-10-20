"use client";
import Link from "next/link";
import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";
import useAxios from "@/app/lib/helpers/use-axios";
import { Hexagone } from "@/app/lib/svg/divers/hexagone";
import Loader from "../../loader/loader";

const SectionDeux = ({ logoWhite }: sectionsProps) => {
  const { response, loading, error, sendData } = useAxios({
    method: "get",
    url: "/collaborateurs",
    headers: {
      accept: "application/ld+json",
    },
  });
  return (
    <>
      {/* {loading && <Loader color={"#000707"} width={"53"} height={"45px"} />} */}
      {error && <p>{error.message}</p>}
      {!loading &&
        !error &&
        response?.data["hydra:member"]
          .filter((item: any) => item.enable)
          .map((section: any, index: number) => {
            return (
              <section
                key={index}
                id={`section-${index + 2}`}
                className={`min-h-screen w-screen ${
                  index % 2 == 0 ? "black bg-encre-de-chine" : "white bg-blanc"
                }`}
              >
                <div
                  className={`min-h-screen max-w-md mx-auto flex flex-col justify-around items-center pt-32 ${
                    index % 2 == 0 ? "text-white" : "text-encre-de-chine"
                  } w-10/12`}
                >
                  <div className="w-full flex flex-col items-center">
                    <div
                      className="flex min-h-52 w-fit max-w-[215px] justify-center items-center"
                      style={{
                        backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_URL}/${section.photoName})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <Hexagone
                        colorPath={index % 2 == 0 ? "#FFFFFF" : "#000707"}
                        colorFond={index % 2 == 0 ? "#000707" : "#FFFFFF"}
                      />
                    </div>
                    <p className="sColP mt-6">
                      {`${
                        section.nom.charAt(0).toUpperCase() +
                        section.nom.slice(1)
                      }, ${section.fonction}, ${section.lieu}`}
                    </p>
                  </div>
                  <div className="mt-10 text-left w-full">
                    <p>{section.description && section.description}</p>
                    <p>{section.descriptionDeux && section.descriptionDeux}</p>
                    <p>
                      {section.descriptionTrois && section.descriptionTrois}
                    </p>
                  </div>
                  <div className="w-full">
                    <Link
                      href={`mailto:${section.email.toLowerCase()}`}
                      passHref
                    >
                      <button className="mx-auto my-24 group w-3/4 hover:bg-dore h-20 block border-2 border-dore text-dore">
                        <span className="texte-button group-hover:text-blanc">
                          en savoir plus
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
    </>
  );
};

export default SectionDeux;
