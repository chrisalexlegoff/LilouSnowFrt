import React from "react";
import { accueilProps } from "@/app/lib/interfaces/interfaces";
import Reseaux from "@/app/components/widgets/reseaux";
import Link from "next/link";

const SectionSept = ({ logoWhite }: accueilProps) => {
  return (
    <section
      id="section-7"
      className={`min-h-screen w-screen bg-encre-de-chine ${
        logoWhite ? "white" : "black"
      }`}
    >
      <div className="min-h-screen max-w-md mx-auto flex flex-col justify-around items-center py-24 text-white w-10/12">
        <div className="">
          <img
            src="/img/mobile/accueil/accueil-mobile-section-7.png"
            alt="image section 7 accueil mobile"
          />
        </div>
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
        <div className="flex flex-col">
          <Link href={"/mentions-legales"} className="w-fit mx-auto">
            Mentions légales
          </Link>
          <Link
            href={"/politique-de-confidentialite"}
            className="w-fit mx-auto"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionSept;
