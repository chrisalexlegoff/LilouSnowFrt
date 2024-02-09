"use client";
import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";
import { useRouter } from "next/navigation.js";
import { categoryTab } from "@/app/lib/helpers/categories";

const SectionDeux = ({ logoWhite }: sectionsProps) => {
  const router = useRouter();
  function handleChange(e: any) {
    router.push(e.target.value, { scroll: false });
  }

  return (
    <section
      id="section-2"
      className={`w-full bg-blanc ${logoWhite ? "white" : "black"}`}
    >
      <div className="max-w-md mx-auto flex flex-col justify-around items-center text-white py-6">
        <p className="filtre my-2">Filtrer par type de thérapie :</p>
        <div className="relative text-encre-de-chine max-w-xs w-full bg-[#EFEFEF] my-6">
          <select
            style={{
              backgroundImage: `url(/img/mobile/divers/arrow-select-filtre.png)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            id="pet-select"
            onChange={handleChange}
            className="appearance-none w-full p-2 cursor-pointer"
          >
            {categoryTab.map((val, index) => {
              return (
                <option
                  key={index}
                  value={`/tatouages-therapeutiques${val.link}`}
                >
                  {val.menuLink}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div
        className="min-h-[40vh] w-full"
        style={{
          backgroundImage: `url('/img/mobile/temoignages/temoignages-mobile-fond-haut.png')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div className="max-w-md w-10/12 mx-auto flex flex-col justify-around items-center text-white">
        <h2 className="py-10">Toutes les réalisations</h2>
        <p className="text-justify min-h-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque viverra
          id risus imperdiet quis. Orci turpis tristique non nisi phasellus
          aliquet dui aenean. Euismod mus eros sed elit. Amet ultricies suscipit
          curabitur tortor velit mus placerat nisi cras. Aliquet duis sapien
          pulvinar sed. Lectus orci viverra pellentesque tincidunt eu nulla sed.
          Lobortis ornare vitae volutpat in molestie eget. Neque amet, facilisis
          ultrices sit.
        </p>
      </div>
    </section>
  );
};

export default SectionDeux;
