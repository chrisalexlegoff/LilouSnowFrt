"use client";
import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";
import Video from "../../video/video";
import useAxios from "@/app/lib/interfaces/use-axios";
import Loader from "../../loader/loader";
import Link from "next/link.js";

const SectionTrois = ({ logoWhite }: sectionsProps) => {
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
      className={`min-h-screen w-screen bg-blanc ${
        logoWhite ? "white" : "black"
      }`}
    >
      <div className="max-w-md mx-auto flex flex-col justify-around items-center py-12">
        <h2>Témoignages</h2>
        <div className="relative">
          {loading && <Loader color={"#000707"} width={"53"} height={"45px"} />}
          {error && <p>{error.message}</p>}
          {!loading &&
            !error &&
            response?.data["hydra:member"]
              .slice(0, 4)
              .map((video: any, index: number) => {
                return (
                  <div key={index} className="my-10">
                    <p className="s3Tt mb-2 text-center">{video.nom}</p>
                    <Video
                      withImage
                      src="/img/mobile/a-propos/fond-video-presentation.png"
                      videoName={video.temoignageName}
                      classname={"w-full"}
                    />
                    <p className="entete px-4 my-12 text-center">
                      {video.description}
                    </p>
                    <div className="w-full">
                      <Link
                        href={`mailto:${video.link.toLowerCase()}`}
                        scroll={false}
                        passHref
                      >
                        <button className="mx-auto group max-w-[230px] w-full hover:bg-encre-de-chine h-20 block border-2 border-encre-de-chine text-encre-de-chine">
                          <span className="texte-button group-hover:text-blanc">
                            contacter
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default SectionTrois;
