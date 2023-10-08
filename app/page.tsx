import React from "react";
import { accueilProps } from "./lib/interfaces/interfaces";

const Accueil = ({}: accueilProps): JSX.Element => {
  // const element = document.querySelector("#id")
  return (
    <div className="md:hidden">
      {/* Section une */}
      {/* <SectionUne seo={seo} homeMobile={homeMobile} logoWhite={false} />
        <SectionDeux seo={seo} homeMobile={homeMobile} logoWhite={false} /> */}
      <div className="md:hidden">
        <section id="section-1" className="flex h-[700px] bg-[black]">
          <h1>section 1</h1>
        </section>
        <section id="section-2" className="white flex h-[700px] bg-[white]">
          <h1>section 2</h1>
        </section>
        <section id="section-3" className="flex h-[700px]  bg-[black]">
          <h1>section 3</h1>
        </section>
        <section id="section-4" className="white flex h-[700px] bg-[white]">
          <h1>section 4</h1>
        </section>
        <section id="section-5" className="flex h-[700px]  bg-[black]">
          <h1>section 5</h1>
        </section>
        <section id="section-6" className="white flex h-[700px] bg-[white]">
          <h1>section 6</h1>
        </section>
      </div>
    </div>
  );
};

export default Accueil;
