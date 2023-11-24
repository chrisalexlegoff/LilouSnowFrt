"use client";
import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";
import { useRouter } from "next/navigation.js";
// import { categoryTab } from "@/app/lib/helpers/categories";
import Link from "next/link.js";

const SectionDeuxDesktop = ({ logoWhite }: sectionsProps) => {
  const router = useRouter();
  // function handleChange(e: any) {
  //   router.push(e.target.value, { scroll: false });
  // }

  return (
    <section
      id="section-2-desktop"
      className={`w-screen bg-blanc ${logoWhite ? "white" : "black"}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-around items-center py-6 px-8">
        {/* <div className="w-full my-6">
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
        </div> */}
      </div>
      <div className="max-w-7xl grid grid-cols-5 py-12 px-8 mx-auto">
        <div
          className="w-full col-span-2"
          style={{
            backgroundImage: `url('/img/mobile/temoignages/temoignages-mobile-fond-haut.png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div className="mx-auto flex flex-col justify-around items-center col-span-3 p-12">
          <h2 className="mb-10">Toutes les réalisations</h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            viverra id risus imperdiet quis. Orci turpis tristique non nisi
            phasellus aliquet dui aenean. Euismod mus eros sed elit. Amet
            ultricies suscipit curabitur tortor velit mus placerat nisi cras.
            Aliquet duis sapien pulvinar sed. Lectus orci viverra pellentesque
            tincidunt eu nulla sed. Lobortis ornare vitae volutpat in molestie
            eget. Neque amet, facilisis ultrices sit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionDeuxDesktop;
