"use client";
import React, { useRef } from "react";
import { sectionsProps } from "../../../../lib/interfaces/interfaces";
import Link from "next/link";
import Video from "../../../video/video";
import useAxios from "@/app/lib/interfaces/use-axios";
import Loader from "../../../loader/loader";
import { ContactDesktop } from "../../contact/index";

const SectionQuatreDesktop = ({ logoWhite, category }: sectionsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const handleClick = (key: number) => {
    ref.current?.children[key].classList.toggle("visible");
  };
  const { response, loading, error, sendData } = useAxios({
    method: "get",
    url: "/temoignages",
    headers: {
      accept: "application/ld+json",
    },
  });
  return (
    <section
      id="section-4-desktop"
      className={`w-full bg-blanc pb-12 ${logoWhite ? "white" : "black"}`}
    >
      <div id="before-after" className="max-w-7xl mx-auto px-8">
        <div
          ref={ref}
          className="flex relative flex-wrap justify-around items-center pb-12"
        >
          {loading && <Loader color={"#000707"} width={"53"} height={"45px"} />}
          {error && <p>{error.message}</p>}
          {!loading &&
            !error &&
            response?.data["hydra:member"]
              .filter((item: any) => item.categorie === category)
              .map((video: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col lg:flex-row AB-visible"
                    onClick={() => handleClick(index)}
                  >
                    <div className="my-10">
                      <p className="s3Tt mb-6 text-center">{video.nom}</p>
                      <Video
                        withImage
                        src="/img/desktop/divers/fond-videos-desktop.png"
                        videoName={video.temoignageName}
                        classname={"w-full"}
                      />
                    </div>
                    <div className="AB-invisible !bg-blanc w-full pl-6 pt-0 lg:pt-24">
                      <p className="entete px-4 my-12 text-center">
                        {video.description}
                      </p>
                      <div className="w-full">
                        <Link
                          href={`mailto:${video.link.toLowerCase()}`}
                          scroll={false}
                          passHref
                        >
                          <button className="mx-auto group w-full max-w-[230px] hover:bg-encre-de-chine h-20 block border-2 border-encre-de-chine text-encre-de-chine">
                            <span className="texte-button group-hover:text-blanc">
                              contacter
                            </span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
        {/* <ContactDesktop classname="flex" /> */}
      </div>
    </section>
  );
};

export default SectionQuatreDesktop;
