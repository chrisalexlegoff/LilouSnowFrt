"use client";
import React, { useRef } from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";
import Video from "../../video/video";
import useAxios from "@/app/lib/interfaces/use-axios";
import Loader from "../../loader/loader";
import { ContactDesktop } from "../contact/index";

const SectionTroisDesktop = ({ logoWhite }: sectionsProps) => {
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
      id="section-3-desktop"
      className={`w-screen bg-blanc py-12 ${logoWhite ? "white" : "black"}`}
    >
      <div id="before-after" className="max-w-7xl mx-auto px-8">
        <h2>Témoignages vidéos</h2>
        <div
          ref={ref}
          className="flex relative flex-wrap justify-around items-center py-12"
        >
          {loading && <Loader color={"#000707"} width={"53"} height={"45px"} />}
          {error && <p>{error.message}</p>}
          {!loading &&
            !error &&
            response?.data["hydra:member"]
              .slice(0, 4)
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc neque convallis faucibus feugiat sit eget. Iaculis
                      eros adipiscing sed porttitor at aenean interdum. Nibh
                      tortor lectus blandit quisque pharetra, porta blandit ut
                      scelerisque. Vulputate et ultricies et a integer quis.
                      Diam leo lectus aliquet venenatis vulputate. Ipsum
                      ullamcorper ac interdum pretium. Mi, id at integer
                      porttitor tincidunt quisque volutpat rhoncus magna. Dolor
                      faucibus sed non, pretium morbi. Volutpat vitae massa
                      mattis eros nulla fermentum maecenas viverra. Aenean in
                      eget lacus tristique aliquam est in aliquam.
                    </div>
                  </div>
                );
              })}
        </div>
        <ContactDesktop classname="flex" />
      </div>
    </section>
  );
};

export default SectionTroisDesktop;
