import Link from "next/link";
import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";

const SectionQuatre = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-3"
      className={`min-h-screen w-full bg-blanc ${
        logoWhite ? "white" : "black"
      }`}
    >
      <div className="min-h-screen max-w-md mx-auto flex flex-col justify-around items-center py-32 text-white w-10/12">
        <h2>Où je pratique ?</h2>
        <p className="text-justify min-h-60 mt-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          platea accumsan molestie sollicitudin. Tellus sed porttitor accumsan
          eu vel in. Nunc condimentum at neque et magna nulla diam. Vitae,
          pellentesque donec hendrerit mi justo.
        </p>
        <div
          className="mx-auto my-10 h-[730px] w-full relative"
          style={{
            backgroundImage: `url('/img/mobile/a-propos/fond-mobile-section-4.png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <p className="text-justify min-h-60 mt-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          platea accumsan molestie sollicitudin. Tellus sed porttitor accumsan
          eu vel in. Nunc condimentum at neque et magna nulla diam. Vitae,
          pellentesque donec hendrerit mi justo.
        </p>
        <div className="w-full">
          <Link href="/partenariat" scroll={false} passHref>
            <button className="my-12 group mx-auto roup w-3/4 hover:bg-dore h-20 block border-2 border-dore text-dore">
              <span className="texte-button group-hover:text-blanc">
                Voir mes partenaires
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionQuatre;
