"use client";
import Link from "next/link";
import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";
import Video from "../../video/video";
import useAxios from "@/app/lib/interfaces/use-axios";
import Loader from "../../loader/loader";

const SectionDeux = ({ logoWhite }: sectionsProps) => {
  const { response, loading, error, sendData } = useAxios({
    method: "get",
    url: "/presentations",
    headers: {
      accept: "application/ld+json",
    },
  });
  return (
    <section
      id="section-2"
      className={`min-h-screen w-screen bg-blanc ${
        logoWhite ? "white" : "black"
      }`}
    >
      <div className="min-h-screen max-w-md mx-auto flex flex-col justify-around items-center text-white w-10/12">
        <div className="relative mb-24">
          {loading && <Loader color={"#000707"} width={"53"} height={"45px"} />}
          {error && <p>{error.message}</p>}
          {!loading && !error && (
            <Video
              withImage={false}
              src="/img/mobile/a-propos/fond-video-presentation.png"
              videoName={response?.data["hydra:member"][0].presentationName}
              classname={"w-full mt-10"}
            />
          )}
        </div>
        <h2>Lilou Snow</h2>
        {/* <div
          className="mx-auto my-10 h-[350px] w-full relative"
          style={{
            backgroundImage: `url('/img/mobile/a-propos/fond-bas.png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        /> */}
        <p className="text-justify min-h-60 mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          platea accumsan molestie sollicitudin. Tellus sed porttitor accumsan
          eu vel in. Nunc condimentum at neque et magna nulla diam. Vitae,
          pellentesque donec hendrerit mi justo...
        </p>
        <div className="w-full">
          <Link href="mailto:contact@lilousnow.fr" passHref scroll={false}>
            <button className="mb-12 group mx-auto roup w-3/4 hover:bg-encre-de-chine h-20 block border-2 border-encre-de-chine text-encre-de-chine">
              <span className="texte-button group-hover:text-blanc">
                Contactez-moi
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionDeux;
