import Link from "next/link";
import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";

const SectionTroisDesktop = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-3-desktop"
      className={`w-screen bg-encre-de-chine ${logoWhite ? "white" : "black"}`}
    >
      <div className="min-h-[400px] grid grid-cols-6 mx-8 p-12">
        <div className="flex flex-col col-span-3 justify-center py-6">
          <h2>Pourquoi le tatoo thérapeutique ?</h2>
          <p className="text-justify mt-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            platea accumsan molestie sollicitudin. Tellus sed porttitor accumsan
            eu vel in. Nunc condimentum at neque et magna nulla diam. Vitae,
            pellentesque donec hendrerit mi justo.
          </p>
          <p className="my-6 !text-dore">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="p-with-title text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            platea accumsan molestie sollicitudin. Tellus sed porttitor accumsan
            eu vel in. Nunc condimentum at neque et magna nulla diam. Vitae,
            pellentesque donec hendrerit mi justo.
          </p>
          <div className="w-full">
            <Link href="/tatouages-therapeutiques" scroll={false} passHref>
              <button className="mt-12 group group w-[300px] hover:bg-white h-20 block border-2 border-blanc text-blanc">
                <span className="texte-button group-hover:text-encre-de-chine">
                  Voir les tatouages réalisés
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div
          className="w-auto relative col-span-3 ml-12"
          style={{
            backgroundImage: `url('/img/mobile/a-propos/fond-bas-section-3.png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </div>
    </section>
  );
};

export default SectionTroisDesktop;
