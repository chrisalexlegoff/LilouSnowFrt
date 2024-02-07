import React from "react";
import { sectionsProps } from "@/app/lib/interfaces/interfaces";

const SectionSept = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-7"
      className={`min-h-screen w-full bg-encre-de-chine ${
        logoWhite ? "white" : "black"
      }`}
    >
      <div className="min-h-screen max-w-md mx-auto flex flex-col justify-around items-center py-24 text-white w-10/12"></div>
    </section>
  );
};

export default SectionSept;
