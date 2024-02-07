"use client";
import Link from "next/link";
import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";
import useAxios from "@/app/lib/interfaces/use-axios";
import { Hexagone } from "@/app/lib/svg/divers/hexagone";
import Loader from "../../loader/loader";

const SectionDeuxDesktop = ({ logoWhite }: sectionsProps) => {
  const { response, loading, error, sendData } = useAxios({
    method: "get",
    url: "/collaborateurs",
    headers: {
      accept: "application/ld+json",
    },
  });
  return (
    <section
      id="section-2-desktop"
      className={`w-full ${
        logoWhite ? "white" : "black"
      } flex flex-wrap bg-blanc`}
    >
      {loading && <Loader color={"#000707"} width={"53"} height={"45px"} />}
      {error && <p>{error.message}</p>}
      {!loading &&
        !error &&
        response?.data["hydra:member"]
          .filter((item: any) => item.enable)
          .map((section: any, index: number) => {
            return (
              <div
                key={index}
                className="w-[500px] mx-auto bg-encre-de-chine m-12 p-8 flex flex-col  justify-between"
              >
                <div className="w-full h-auto flex flex-col items-center">
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
                      colorPath={"#FFFFFF"}
                      colorFond={"#000707"}
                      width="215px"
                      height="215px"
                    />
                  </div>
                  <h3 className="sColP mt-6 !text-blanc">
                    {`${
                      section.nom.charAt(0).toUpperCase() + section.nom.slice(1)
                    }, ${section.fonction}, ${section.lieu}`}
                  </h3>
                </div>
                <div className="mt-10 text-center w-full">
                  <p className="!text-blanc">
                    {section.description && section.description}
                  </p>
                  <p className="!text-blanc">
                    {section.descriptionDeux && section.descriptionDeux}
                  </p>
                  <p className="!text-blanc">
                    {section.descriptionTrois && section.descriptionTrois}
                  </p>
                </div>
                <div className="w-full">
                  <Link href={`mailto:${section.email.toLowerCase()}`} passHref>
                    <button className="mx-auto mt-10 group w-[230px] hover:bg-dore h-16 block border-2 border-dore !text-dore">
                      <div className="texte-button group-hover:text-blanc">
                        en savoir plus
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
    </section>
  );
};

export default SectionDeuxDesktop;
