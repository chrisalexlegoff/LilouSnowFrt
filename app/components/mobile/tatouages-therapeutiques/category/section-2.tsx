"use client";
import React from "react";
import { sectionsProps } from "../../../../lib/interfaces/interfaces";

const SectionDeux = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-2"
      className={`w-screen bg-blanc ${logoWhite ? "white" : "black"}`}
    >
      <div className="max-w-md w-10/12 mx-auto flex flex-col justify-around items-center text-white">
        <p className="text-justify min-h-60 pt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque viverra
          id risus imperdiet quis. Orci turpis tristique non nisi phasellus
          aliquet dui aenean. Euismod mus eros sed elit. Amet ultricies suscipit
          curabitur tortor velit mus placerat nisi cras. Aliquet duis sapien
          pulvinar sed. Lectus orci viverra pellentesque tincidunt eu nulla sed.
          Lobortis ornare vitae volutpat in molestie eget. Neque amet, facilisis
          ultrices sit.
        </p>
      </div>
    </section>
  );
};

export default SectionDeux;
