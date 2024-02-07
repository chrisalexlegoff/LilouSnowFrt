import Link from "next/link";
import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";

const SectionDeuxDesktop = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-2-desktop"
      className={`w-full bg-encre-de-chine ${logoWhite ? "white" : "black"}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-5 py-24 w-full px-8">
        <div
          className="h-full w-ful col-span-2"
          style={{
            backgroundImage: `url('/img/mobile/accueil/accueil-mobile-section-2.png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div className="p-12 col-start-3 col-span-3 flex flex-col">
          <h2>Bienvenue chez Lilou Snow</h2>
          <p className="text-justify my-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            platea accumsan molestie sollicitudin. Tellus sed porttitor accumsan
            eu vel in. Nunc condimentum at neque et magna nulla diam. Vitae,
            pellentesque donec hendrerit mi justo...
          </p>
          <div className="w-full">
            <Link href="/a-propos" passHref>
              <button className="group w-1/3 min-w-[230px] hover:bg-dore h-20 block border-2 border-dore text-dore">
                <span className="texte-button group-hover:text-blanc">
                  en savoir plus
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDeuxDesktop;
