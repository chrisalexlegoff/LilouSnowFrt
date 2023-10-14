import Link from "next/link";
import React from "react";
import { accueilProps } from "@/app/lib/interfaces/interfaces";

const SectionCinq = ({ logoWhite }: accueilProps) => {
  return (
    <section
      id="section-5"
      className={`min-h-screen w-screen bg-blanc ${
        logoWhite ? "white" : "black"
      }`}
    >
      <div className="min-h-screen max-w-md mx-auto flex flex-col justify-around items-center py-24 text-white w-10/12">
        <h2>Mes tarifs</h2>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          platea accumsan molestie sollicitudin. Tellus sed porttitor accumsan
          eu vel in. Nunc condimentum at neque et magna nulla diam. Vitae,
          pellentesque donec hendrerit mi justo...
        </p>
        <div className="w-full">
          <Link href="mailto:contact@lilousnow.fr" passHref>
            <button className="group mx-auto roup w-3/4 hover:bg-encre-de-chine h-20 block border-2 border-encre-de-chine text-encre-de-chine">
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

export default SectionCinq;
