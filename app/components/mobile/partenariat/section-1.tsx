import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";

const SectionUne = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-1"
      className={`w-screen ${logoWhite ? "white" : "black"}`}
    >
      <div className="w-full mx-auto">
        <div
          className="text-center min-h-[35vh] w-full flex flex-col items-center justify-between pt-32"
          style={{
            backgroundImage: `url('/img/mobile/a-propos/fond-haut.png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-md grow flex flex-col">
            <div>
              <h1 className="s1AP mb-2">Partenariat</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionUne;
