import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";

const SectionUneDesktop = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-1-desktop"
      className={`w-full ${logoWhite ? "white" : "black"}`}
    >
      <div className="w-full mx-auto">
        <div
          className="text-center min-h-[60vh] w-full flex flex-col items-center justify-between pt-32"
          style={{
            backgroundImage: `url('/img/mobile/a-propos/fond-haut.png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-md grow flex flex-col justify-center">
            <div>
              <h1 className="s1AP mb-2">Mentions Légales</h1>
              <p className="pt-10">Politique de confidentialité</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionUneDesktop;
