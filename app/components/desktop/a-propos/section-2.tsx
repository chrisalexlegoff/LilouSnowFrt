"use client";
import Link from "next/link";
import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";
import Video from "../../video/video";
import useAxios from "@/app/lib/interfaces/use-axios";
import Loader from "../../loader/loader";
import { FloconSectionDeuxAProposDesktop } from "@/app/lib/svg/a-propos/flocon-desktop-section-2";
import { ContactDesktop } from "../contact/index";

const SectionDeuxDesktop = ({ logoWhite }: sectionsProps) => {
  const { response, loading, error, sendData } = useAxios({
    method: "get",
    url: "/presentations",
    headers: {
      accept: "application/ld+json",
    },
  });
  return (
    <section
      id="section-2-desktop"
      className={`w-screen bg-encre-de-chine ${logoWhite ? "white" : "black"}`}
    >
      <div className="max-w-7xl mx-auto pt-32 pb-20">
        <div className="min-h-[800px] grid grid-cols-5 bg-blanc mx-4 p-12">
          <div
            className="mx-auto w-full relative col-span-2"
            // style={{
            //   backgroundImage: `url('/img/mobile/a-propos/fond-bas.png')`,
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "cover",
            // }}
          >
            <div className="relative max-w-2xl mx-auto">
              {loading && (
                <Loader color={"#000707"} width={"53"} height={"45px"} />
              )}
              {error && <p>{error.message}</p>}
              {!loading && !error && (
                <Video
                  withImage={false}
                  src="/img/desktop/divers/preview-video-desktop.png"
                  videoName={response?.data["hydra:member"][0].presentationName}
                  classname={"w-full mt-10"}
                />
              )}
            </div>
            <FloconSectionDeuxAProposDesktop
              color="#FFFFFF"
              width="183px"
              height="157px"
            />
          </div>
          <div className="flex flex-col col-span-3 justify-center py-20 pl-24 pr-12">
            <h2>Lilou Snow</h2>
            <p className="paragraphe-1-maintenance text-justify mt-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum platea accumsan molestie sollicitudin. Tellus sed
              porttitor accumsan eu vel in. Nunc condimentum at neque et magna
              nulla diam. Vitae, pellentesque donec hendrerit mi justo...
            </p>
            <p className="paragraphe-1-maintenance text-justify my-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum platea accumsan molestie sollicitudin. Tellus sed
              porttitor accumsan eu vel in. Nunc condimentum at neque et magna
              nulla diam. Vitae, pellentesque donec hendrerit mi justo...
            </p>
            <div className="w-full">
              <Link href="mailto:contact@lilousnow.fr" passHref scroll={false}>
                <button className="mt-12 group w-60 hover:bg-encre-de-chine h-20 block border-2 border-encre-de-chine text-encre-de-chine">
                  <span className="texte-button group-hover:text-blanc">
                    Contactez-moi
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <ContactDesktop classname="max-w-7xl mx-4 my-8 py-12 px-20 bg-blanc flex flex-wrap justify-center" />
      </div>
    </section>
  );
};

export default SectionDeuxDesktop;
