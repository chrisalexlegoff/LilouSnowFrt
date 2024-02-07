import Link from "next/link";
import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";

const SectionQuatreDesktop = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-2-desktop"
      className={`w-full bg-encre-de-chine ${logoWhite ? "white" : "black"}`}
    >
      <div className="max-w-7xl mx-auto pt-32 pb-20">
        <div className="min-h-[350px] grid grid-cols-6 bg-blanc mx-4 p-12">
          <div
            className="mx-auto w-full relative col-span-3"
            style={{
              backgroundImage: `url('/img/mobile/a-propos/fond-bas.png')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="flex flex-col col-span-3 justify-center py-20 pl-24 pr-12">
            <h2>Où je pratique ?</h2>
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
              <Link href="/partenariat" passHref>
                <button className="mt-12 group w-60 hover:bg-dore h-20 block border-2 text-dore border-dore">
                  <div className="texte-button group-hover:text-blanc">
                    Voir mes partenaires
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionQuatreDesktop;
