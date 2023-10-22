"use client";
import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";
import Video from "../../video/video";
import useAxios from "@/app/lib/helpers/use-axios";
import Loader from "../../loader/loader";
import { useRouter } from "next/navigation.js";

const SectionDeux = ({ logoWhite }: sectionsProps) => {
  const router = useRouter();
  function handleChange(e: any) {
    router.push(e.target.value, { scroll: false });
  }
  const categoryTab = [
    "Voir tout",
    "Mastectomie",
    "Abdominoplastie",
    "Cicatrices",
    "Vitiligo",
    "Grands brûlés",
    "Tricopigmentation",
  ];
  const { response, loading, error, sendData } = useAxios({
    method: "get",
    url: "/temoignages",
    headers: {
      accept: "application/ld+json",
    },
  });
  console.log(response);
  return (
    <section
      id="section-2"
      className={`min-h-screen w-screen bg-blanc ${
        logoWhite ? "white" : "black"
      }`}
    >
      <div className="max-w-md mx-auto flex flex-col justify-around items-center text-white py-6">
        <p className="filtre my-2">Filtrer par type de thérapie :</p>
        <div className="relative text-encre-de-chine max-w-xs w-full bg-[#EFEFEF] my-6">
          {loading && <Loader color={"#000707"} width={"53"} height={"45px"} />}
          {error && <p>{error.message}</p>}
          {!loading && !error && (
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
                    value={`/tatouages-therapeutiques/${val.toLowerCase()}`}
                  >
                    {val}
                  </option>
                );
              })}
            </select>
          )}
        </div>
      </div>
      <div
        className="min-h-[35vh] w-full"
        style={{
          backgroundImage: `url('/img/mobile/temoignages/temoignages-mobile-fond-haut.png')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div className="min-h-screen max-w-md mx-auto flex flex-col justify-around items-center text-white">
        <h2>Toutes les réalisations</h2>
        <p className="text-justify min-h-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque viverra
          id risus imperdiet quis. Orci turpis tristique non nisi phasellus
          aliquet dui aenean. Euismod mus eros sed elit. Amet ultricies suscipit
          curabitur tortor velit mus placerat nisi cras. Aliquet duis sapien
          pulvinar sed. Lectus orci viverra pellentesque tincidunt eu nulla sed.
          Lobortis ornare vitae volutpat in molestie eget. Neque amet, facilisis
          ultrices sit.
        </p>
        <div className="relative mb-24">
          {loading && <Loader color={"#000707"} width={"53"} height={"45px"} />}
          {error && <p>{error.message}</p>}
          {!loading && !error && (
            <Video
              videoName={response?.data["hydra:member"][0].presentationName}
              classname={"w-full mt-10"}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionDeux;
