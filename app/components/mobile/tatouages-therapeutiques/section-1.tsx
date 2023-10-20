import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";
import { GoBackButton } from "../../go-back/go-back-button";

const SectionUne = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-1"
      className={`w-screen ${logoWhite ? "white" : "black"}`}
    >
      <div className="w-full mx-auto">
        <div
          className="text-center min-h-[50vh] w-full flex flex-col items-center justify-between pt-32"
          style={{
            backgroundImage: `url('img/mobile/realisations/fond-entete-realisations-mobile.png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-md grow flex flex-col">
            <div>
              <p className="s1AP mb-2">
                Mes
                <br />
                Mes réalisations
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {/* <div className="grow flex w-full items-center">
              <GoBackButton
                classname={
                  "flex items-center fixed left-4 top-[40vh] mix-blend-exclusion"
                }
                color={"#FFFFFF"}
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionUne;
