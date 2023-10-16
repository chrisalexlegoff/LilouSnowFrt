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
          className="text-center min-h-[306px] w-full flex flex-col items-center justify-between pt-32"
          style={{
            backgroundImage: `url('img/mobile/a-propos/fond-haut.png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-md grow flex flex-col">
            <div>
              <p className="s1AP mb-2">Présentation</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="grow flex w-full items-center">
              <GoBackButton
                classname={"flex justify-between items-center w-16 h-6"}
                color={"#FFFFFF"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionUne;
