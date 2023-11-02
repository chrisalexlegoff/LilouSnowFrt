"use client";
import React from "react";
import { sectionsProps } from "../../../../lib/interfaces/interfaces";
import Video from "../../../video/video";
import useAxios from "@/app/lib/interfaces/use-axios";
import Loader from "../../../loader/loader";

const SectionTrois = ({ logoWhite, category }: sectionsProps) => {
  const { response, loading, error, sendData } = useAxios({
    method: "get",
    url: "/temoignages",
    headers: {
      accept: "application/ld+json",
    },
  });
  return (
    <section
      id="section-3"
      className={`w-screen bg-blanc ${logoWhite ? "white" : "black"}`}
    >
      <div className="max-w-md mx-auto flex flex-col justify-around items-center pb-12">
        <h2>Témoignages</h2>
        <div className="relative">
          {loading && <Loader color={"#000707"} width={"53"} height={"45px"} />}
          {error && <p>{error.message}</p>}
          {!loading &&
            !error &&
            response?.data["hydra:member"]
              .filter((el: any) => el.categorie === category?.toLowerCase())
              .map((video: any, index: number) => {
                return (
                  <div key={index} className="my-10">
                    <p className="s3Tt mb-2 text-center">{video.nom}</p>
                    <Video
                      isMobile
                      videoName={video.temoignageName}
                      classname={"w-full"}
                    />
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default SectionTrois;
