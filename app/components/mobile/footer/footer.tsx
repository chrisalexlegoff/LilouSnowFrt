"use client";
import Link from "next/link.js";
import React from "react";
import Image from "next/image";
import Reseaux from "../../widgets/reseaux";
import { usePathname } from "next/navigation.js";

export const Footer = () => {
  const CurrentDateYear = new Date().getFullYear();
  const pathname = usePathname();
  return pathname != "/maintenance" ? (
    <footer className="bg-encre-de-chine md:hidden mx-auto pt-6">
      <div className="h-[212px] w-[212px] relative mx-auto">
        <Image
          src="/img/mobile/accueil/accueil-mobile-section-7.png"
          alt="fond accueil section mobile 7"
          fill
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
      <div className="flex flex-col text-center !text-blanc pb-10">
        <Link href={"/mentions-legales"} className="w-fit mx-auto">
          Mentions légales
          <br />
          Politique de confidentialité
        </Link>
      </div>
      <div className="bg-dore mx-auto pt-6 pb-28">
        <div className="!text-blanc flex justify-center">
          <p>Lilou Snow&nbsp;&copy;&nbsp;copyright&nbsp;</p>
          <p>{CurrentDateYear}</p>
        </div>
        <div className=" !text-blanc flex justify-center">
          <p>Site réalisé par :&nbsp;</p>
          <Link
            href="https://dualdclic.fr"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            DualDclic.fr
          </Link>
        </div>
      </div>
    </footer>
  ) : (
    <></>
  );
};
