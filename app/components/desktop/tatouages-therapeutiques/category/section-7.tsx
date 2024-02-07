"use client";
import React from "react";
import { sectionsProps } from "../../../../lib/interfaces/interfaces";
import { ContactDesktop } from "../../contact/index";

const SectionSeptDesktop = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-7-desktop"
      className={`w-full bg-blanc ${logoWhite ? "white" : "black"}`}
    >
      <ContactDesktop classname="max-w-7xl mx-4 my-8 py-12 px-20 bg-blanc flex flex-wrap justify-center" />
    </section>
  );
};

export default SectionSeptDesktop;
