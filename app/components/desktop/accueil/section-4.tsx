import React from "react";
import { sectionsProps } from "@/app/lib/interfaces/interfaces";
import Reseaux from "@/app/components/widgets/reseaux";
import Image from "next/image.js";

const SectionQuatreDesktop = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-4-desktop"
      className={`w-full bg-encre-de-chine ${logoWhite ? "white" : "black"}`}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 py-24 w-full px-8">
        <div className="h-full w-full col-span-2">
          <Image
            src="/img/mobile/accueil/fond-accueil-mobile-section-4.png"
            alt="fond accueil section mobile 4"
            width={"400"}
            height={"400"}
          />
        </div>
        <div className="p-12 lg:col-start-3 lg:col-span-3 flex flex-col justify-center">
          <h2 className="mt-6 text-center lg:text-left">Me contacter</h2>
          <p className="my-12 text-justify">
            Vous avez des questions ? Vous êtes interessé par mes services ?
            N’hésitez pas à me contacter, je suis disponible via les réseaux
            sociaux ou par mail :{" "}
          </p>
          <div className="flex lg:w-1/2 w-full min-w-[400px] justify-around lg:justify-between text-center">
            <div className="flex flex-col w-fit lg:min-w-[130px] min-w-[160px]">
              <p className="texte-reseau-accueil mb-6 !text-dore">Suivez-moi</p>
              <Reseaux
                colorIcon={"#FFFFFF"}
                widthIcon={"45"}
                heightIcon={"39px"}
                homeIcon={false}
                slug={["facebook", "instagram"]}
                classname={"flex w-full justify-around"}
              />
            </div>
            <div className="flex flex-col w-fit lg:min-w-[130px] min-w-[160px]">
              <p className="texte-reseau-accueil mb-6 !text-dore">Contact</p>
              <Reseaux
                colorIcon={"white"}
                widthIcon={"45"}
                heightIcon={"39px"}
                homeIcon={false}
                slug={["email", "messenger"]}
                classname={"flex w-full justify-around"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionQuatreDesktop;
