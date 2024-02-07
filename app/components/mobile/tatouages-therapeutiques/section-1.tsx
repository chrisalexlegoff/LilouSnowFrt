import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";

const SectionUne = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-1"
      className={`w-full ${logoWhite ? "white" : "black"}`}
    >
      <div className="w-full mx-auto">
        <div
          className="text-center min-h-[40vh] w-full flex flex-col items-center justify-between pt-32"
          style={{
            backgroundImage: `url(/img/mobile/realisations/fond-entete-realisations-mobile.png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-md grow flex flex-col">
            <div>
              <h1 className="s1AP mb-2">
                Mes
                <br />
                réalisations
              </h1>
              <p className="entete px-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionUne;
