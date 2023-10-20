"use client";
import { sectionsProps } from "@/app/lib/interfaces/interfaces.js";
import Link from "next/link.js";
import React from "react";

const Error = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="error-mobile"
      className={`w-screen ${logoWhite ? "white" : "black"}`}
    >
      <div className="w-full mx-auto">
        <div
          className="text-center min-h-screen w-full flex flex-col items-center justify-between pt-32 pb-20"
          style={{
            backgroundImage: `url('img/mobile/error.png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-md grow flex flex-col">
            <div>
              <p className="s1AP mb-2">Page introuvable !</p>
              <p>Ce n’est pas grave, voici de quoi retrouver votre chemin : </p>
            </div>
          </div>
          <div className="w-full">
            <Link href="/" passHref>
              <button className="mb-12 group mx-auto roup w-3/4 hover:bg-blanc h-20 block border-2 border-blanc text-blanc">
                <span className="texte-button group-hover:text-encre-de-chine">
                  Retour à l'accueil
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
