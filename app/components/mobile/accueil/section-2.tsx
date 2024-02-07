import Link from "next/link";
import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";

const SectionDeux = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-2"
      className={`min-h-screen w-full bg-encre-de-chine ${
        logoWhite ? "white" : "black"
      }`}
    >
      <div className="min-h-screen max-w-md mx-auto flex flex-col justify-around items-center pt-32 text-white w-10/12">
        <h2>Bienvenue chez Lilou Snow</h2>
        <div
          className="mx-auto my-10 w-full min-h-60 relative"
          style={{
            backgroundImage: `url('/img/mobile/accueil/accueil-mobile-section-2.png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          platea accumsan molestie sollicitudin. Tellus sed porttitor accumsan
          eu vel in. Nunc condimentum at neque et magna nulla diam. Vitae,
          pellentesque donec hendrerit mi justo...
        </p>
        <div className="w-full">
          <Link href="/a-propos" scroll={false} passHref>
            <button className="mx-auto my-24 group w-3/4 hover:bg-dore h-20 block border-2 border-dore text-dore">
              <span className="texte-button group-hover:text-blanc">
                en savoir plus
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionDeux;
