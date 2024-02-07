import React from "react";
import { sectionsProps } from "@/app/lib/interfaces/interfaces";
import Reseaux from "@/app/components/widgets/reseaux";
import Image from "next/image.js";

const SectionQuatre = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-4"
      className={`min-h-screen w-full bg-encre-de-chine ${
        logoWhite ? "white" : "black"
      }`}
    >
      <div className="min-h-screen max-w-md mx-auto flex flex-col justify-around items-center py-24 text-white w-10/12">
        <div className="h-[390px] w-[350px] relative">
          <Image
            src="/img/mobile/accueil/fond-accueil-mobile-section-4.png"
            alt="fond accueil section mobile 4"
            fill
            sizes="auto"
          />
        </div>
        <h2 className="mt-6">Me contacter</h2>
        <p className="my-12 text-justify">
          Vous avez des questions ? Vous êtes interessé par mes services ?
          N’hésitez pas à me contacter, je suis disponible via les réseaux
          sociaux ou par mail :{" "}
        </p>
        <div className="flex w-full justify-around mb-16 text-center">
          <div className="flex flex-col w-fit min-w-[160px]">
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
          <div className="flex flex-col w-fit min-w-[160px]">
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
    </section>
  );
};

export default SectionQuatre;
