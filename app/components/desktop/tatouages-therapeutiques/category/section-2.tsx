"use client";
import React, { ReactElement, ReactNode } from "react";
import { sectionsProps } from "../../../../lib/interfaces/interfaces";
import { useRouter } from "next/navigation.js";
import useAxios from "@/app/lib/interfaces/use-axios";
import Loader from "@/app/components/loader/loader";

const SectionDeuxDesktop = ({ logoWhite, category }: sectionsProps) => {
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
            backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_URL}/${realisationEnCours?.imageName})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        {loading && <Loader color={"#FFFFFF"} width={"63"} height={"55px"} />}
        {error && <p>{error.message}</p>}
        {!loading && !error && (
          <div className="mx-auto flex flex-col justify-around col-span-3 px-12">
            <h2 className="mb-10">{realisationEnCours.titreIntroduction}</h2>
            {realisationEnCours?.introduction.map(
              (paragraphe: ReactElement, index: number) => {
                return (
                  <p key={index} className="mt-6">
                    {paragraphe}
                  </p>
                );
              }
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionDeuxDesktop;
