"use client";
import React, { ReactElement, ReactNode } from "react";
import { sectionsProps } from "../../../../lib/interfaces/interfaces";
import { useRouter } from "next/navigation.js";
// import { categoryTab } from "@/app/lib/helpers/categories";
import Link from "next/link.js";
import useAxios from "@/app/lib/interfaces/use-axios";
import Loader from "@/app/components/loader/loader";
import { FloconSectionTroisAccueilDesktop } from "@/app/lib/svg/Accueil/flocon-desktop-section-3";

const SectionTroisDesktop = ({ logoWhite, category }: sectionsProps) => {
  const router = useRouter();
  // function handleChange(e: any) {
  //   router.push(e.target.value, { scroll: false });
  // }
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
      id="section-3-desktop"
      className={`w-full bg-blanc ${logoWhite ? "white" : "black"}`}
    >
      {/*<div className="max-w-7xl mx-auto flex flex-col justify-around items-center py-6 px-8">
         <div className="w-full my-6">
          <div
            id="pet-select"
            className="w-full py-2 flex justify-between items-baseline flex-wrap"
          >
            <p className="">Filtrer par thérapie :</p>
            {categoryTab
              .filter((val) => val.slug !== "Voir tout")
              .map((val, index) => {
                return (
                  <div key={index} className="group">
                    <Link
                      className="group-hover:text-dore"
                      href={`/tatouages-therapeutiques${val.link}`}
                    >
                      {val.slug}
                    </Link>
                  </div>
                );
              })}
          </div>
        </div> 
      </div>*/}
      <div className="max-w-7xl flex flex-col items-center py-12 mx-auto">
        <FloconSectionTroisAccueilDesktop
          color={"#000707"}
          width="200px"
          height="171px"
        />
        {loading && <Loader color={"#FFFFFF"} width={"63"} height={"55px"} />}
        {error && <p>{error.message}</p>}
        {!loading && !error && (
          <div className="pt-16 mx-auto flex flex-col justify-around items-center col-span-3 px-12">
            <h2 className="mb-10">{realisationEnCours.titretemoignages}</h2>
            <p className="mt-6">{realisationEnCours.accrocheTemoignages}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionTroisDesktop;
