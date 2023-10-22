import Link from "next/link";
import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";

const SectionTrois = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-3"
      className={`min-h-screen w-screen bg-encre-de-chine ${
        logoWhite ? "white" : "black"
      }`}
    >
      <div className="min-h-screen max-w-md mx-auto flex flex-col justify-around items-center py-32 text-white w-10/12">
        <h2>
          Pourquoi le tatoo
          <br /> thérapeutique ?
        </h2>
        <p className="text-justify min-h-60 mt-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          platea accumsan molestie sollicitudin. Tellus sed porttitor accumsan
          eu vel in. Nunc condimentum at neque et magna nulla diam. Vitae,
          pellentesque donec hendrerit mi justo.
        </p>
        <div
          className="mx-auto my-10 h-[700px] w-full relative"
          style={{
            backgroundImage: `url('/img/mobile/a-propos/fond-bas-section-3.png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <p className="p-with-title text-justify min-h-60 mt-16">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>{" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          platea accumsan molestie sollicitudin. Tellus sed porttitor accumsan
          eu vel in. Nunc condimentum at neque et magna nulla diam. Vitae,
          pellentesque donec hendrerit mi justo.
        </p>
        <div className="w-full">
          <Link href="/mes-realisations" scroll={false} passHref>
            <button className="my-12 group mx-auto roup w-3/4 hover:bg-white h-20 block border-2 border-blanc text-blanc">
              <span className="texte-button group-hover:text-encre-de-chine">
                Voir mes réalistations
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionTrois;
