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
            backgroundImage: `url(/img/desktop/realisations/fond-entete-desktop-realisations.png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-md grow flex flex-col justify-center">
            <div>
              <h1 className="s1AP mb-2">
                Mes
                <br />
                réalisations
              </h1>
              <p className="pt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Imperdiet urna lectus etiam ultricies urna sed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionUneDesktop;
