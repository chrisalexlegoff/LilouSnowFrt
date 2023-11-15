"use client";
import Link from "next/link.js";
import React from "react";
import Image from "next/image";
import Reseaux from "../../widgets/reseaux";
import { usePathname } from "next/navigation.js";

export const FooterDesktop = () => {
  const CurrentDateYear = new Date().getFullYear();
  const pathname = usePathname();
  return pathname != "/maintenance" ? (
    <footer className="bg-encre-de-chine hidden md:flex flex-col mx-auto pt-6 ">
      <div className="flex max-w-7xl mx-auto px-12">
        <Image
          src="/img/mobile/accueil/accueil-mobile-section-7.png"
          alt="fond accueil section mobile 7"
          width={"212"}
          height={"212"}
        />
        <div className="flex flex-col flex-grow text-center p-12">
          <div className="flex w-1/2 min-w-[400px] justify-between text-center">
            <div className="flex flex-col w-fit min-w-[130px]">
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
            <div className="flex flex-col w-fit min-w-[130px]">
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
          <div className="flex flex-col w-full">
            <p className="texte-reseau-accueil text-left mt-10 mb-2 !text-dore">
              Où me trouver
            </p>
            <div className="">
              <p className="text-left !text-blanc">
                Nord : Yours, 260 rue des bourreliers 59320 Hallennes lez
                Haubourdin
              </p>
              <p className="text-left !text-blanc">
                Paris : CCC Atelier Tatouage, 40 rue de Charenton, Bastille
                75012 Paris
              </p>
              <p className="text-left !text-blanc">
                Lyon : Tahitian HK Tattoo, 83 bis rue Aristide Briand, 01500
                Ambérieu-en-bugey
              </p>
              <p className="text-left !text-blanc">
                Saint Malo : A définir, sur demande
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col !text-blanc hidden xl:flex py-12 justify-between">
          <Link
            href={"/"}
            scroll={false}
            className="text-right hover:text-dore"
          >
            Accueil
          </Link>
          <Link
            href={"/a-propos"}
            scroll={false}
            className="text-right hover:text-dore"
          >
            A propos
          </Link>
          <Link
            href={"/tatouages-therapeutiques"}
            scroll={false}
            className="text-right hover:text-dore"
          >
            Tatouages thérapeutiques
          </Link>
          <Link
            href={"/partenariat"}
            scroll={false}
            className="text-right hover:text-dore"
          >
            Partenariat
          </Link>
          <Link
            href={"/hommages"}
            scroll={false}
            className="text-right hover:text-dore"
          >
            Hommages
          </Link>
          <Link
            href={"/mentions-legales"}
            scroll={false}
            className="text-right hover:text-dore"
          >
            Mentions légales - Politique de confidentialité
          </Link>
        </div>
      </div>
      <div className="w-full bg-dore mx-auto py-6">
        <p className="!text-blanc flex justify-center">
          Lilou Snow, tatouages thérapeutiques&nbsp;&copy;&nbsp;copyright&nbsp;
          {CurrentDateYear} - site réalisé par :&nbsp;{" "}
          <Link
            scroll={false}
            href="https://dualdclic.fr"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            DualDclic.fr
          </Link>
        </p>
      </div>
    </footer>
  ) : (
    <></>
  );
};
