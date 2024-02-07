"use client";
import { sectionsProps } from "@/app/lib/interfaces/interfaces.js";
import Link from "next/link.js";
import React from "react";

const ErrorDesktop = ({ logoWhite }: sectionsProps) => {
  return (
    <section id="error" className={`w-full ${logoWhite ? "white" : "black"}`}>
      <div className="w-full mx-auto">
        <div
          className="text-center min-h-screen w-full flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url('/img/mobile/error.png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-7xl flex flex-col justify-center">
            <h1 className="s1AP">Page introuvable !</h1>
            <p className="my-12">
              Ce n’est pas grave, voici de quoi retrouver votre chemin :{" "}
            </p>
            <div className="w-full flex justify-between">
              <Link href="/" scroll={false} passHref>
                <button className="min-w-[263px] mx-4 group group hover:bg-blanc h-20 block border-2 border-blanc text-blanc">
                  <span className="texte-button group-hover:text-encre-de-chine">
                    Retour à l'accueil
                  </span>
                </button>
              </Link>
              <Link
                href="mailto:lilousnow.cica@gmail.com"
                scroll={false}
                passHref
              >
                <button className="group mx-4 min-w-[263px] group hover:bg-blanc h-20 block border-2 border-blanc text-blanc">
                  <span className="texte-button group-hover:text-encre-de-chine">
                    Contactez-moi
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorDesktop;
