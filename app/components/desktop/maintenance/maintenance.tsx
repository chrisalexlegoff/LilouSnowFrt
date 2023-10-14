"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import * as ReactDOMServer from "react-dom/server";
import { maintenanceProps } from "../../../lib/interfaces/interfaces";
import { BgDesktopMaintenanceImg } from "@/app/lib/svg/maintenance/bg-desktop";
import { LogoDesktopBlackMaintenanceImg } from "@/app/lib/svg/maintenance/logo-desktop-black";
import { FlecheMaintenanceImg } from "@/app/lib/svg/maintenance/fleche";
import Reseaux from "../../widgets/reseaux";
import { DemiFloconMaintenanceImg } from "@/app/lib/svg/maintenance/demi-flocon";
import { FloconUnMaintenanceImg } from "@/app/lib/svg/maintenance/flocon-un";
import { FloconDeuxMaintenanceImg } from "@/app/lib/svg/maintenance/flocon-deux";

const MaintenanceComponentDesktop = ({}: maintenanceProps) => {
  const bgToString = encodeURIComponent(
    ReactDOMServer.renderToStaticMarkup(<BgDesktopMaintenanceImg />)
  );
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hiddens: NodeListOf<HTMLElement> =
        document.querySelectorAll(".appear");
      hiddens.forEach((hidden) => {
        hidden.style.visibility = "hidden";
      });
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const appears = gsap.utils.toArray<HTMLElement>(".appear");
      var tl = gsap.timeline({ delay: 1 });

      appears.forEach((appear) => {
        appear.style.scale = "0";
        tl.to(appear, {
          visibility: "visible",
          scale: 1,
          duration: 0.5,
        });
      });

      gsap.fromTo(
        ".open",
        {
          transform: "translateX(-100%)",
        },
        {
          transform: "translateX(0)",
          duration: 1.5,
        }
      );
      gsap.fromTo(
        ".show",
        {
          scale: 0.5,
          visibility: "hidden",
          rotate: -60,
        },
        {
          visibility: "visible",
          rotate: 0,
          scale: 1,
          delay: 2,
          duration: 2,
        }
      );
      gsap.fromTo(
        ".demiFlocon",
        {
          transformOrigin: "left",
          scale: 0.2,
        },
        {
          scale: 1,
          delay: 0.5,
          duration: 2,
        }
      );
    }
  }, []);
  return (
    <div
      id="maintenance"
      style={{
        backgroundImage: `url("data:image/svg+xml,${bgToString}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="min-h-screen w-screen"
    >
      <div className="open bg-gris-transparent w-1/2 min-w-[700px] text-center px-4">
        <div className="flex flex-col min-h-screen justify-around py-16 items-center">
          <div className="flex appear flex-col items-center">
            <LogoDesktopBlackMaintenanceImg />
            <div>
              <h1 className="h1-maintenance">Tatouage thérapeutique</h1>
              <h2 className="h2-maintenance">
                Covering cicatrices et brûlures
              </h2>
              <div />
            </div>
          </div>
          <FlecheMaintenanceImg />
          <div className="appear">
            <div className="">
              <h3 className="h3-maintenance mb-10">
                Le site est actuellement en maintenance.
                <br />
                Patience, je serais bientôt de retour !
              </h3>
              <p className="paragraphe-1-maintenance mb-10">
                En attendant retrouvez moi par mail ou sur les réseaux sociaux :{" "}
              </p>
            </div>
            <div className="flex w-full justify-around mb-16">
              <div className="flex flex-col w-fit min-w-[160px]">
                <p className="titre-reseau mb-6">Suivez-moi</p>
                <Reseaux
                  colorIcon={"#000707"}
                  widthIcon={"45"}
                  heightIcon={"39px"}
                  homeIcon={false}
                  slug={["facebook", "instagram"]}
                  classname={"flex w-full justify-around"}
                />
              </div>
              <div className="flex flex-col w-fit min-w-[160px]">
                <p className="titre-reseau mb-6">Contactez-moi</p>
                <Reseaux
                  colorIcon={"#000707"}
                  widthIcon={"45"}
                  heightIcon={"39px"}
                  homeIcon={false}
                  slug={["email", "messenger"]}
                  classname={"flex w-full justify-around"}
                />
              </div>
            </div>
            <h4 className="h4-maintenance">
              Lille - Paris - Lyon - Saint Malo
            </h4>
          </div>
        </div>
        <DemiFloconMaintenanceImg />
        <FloconUnMaintenanceImg />
        <FloconDeuxMaintenanceImg />
      </div>
    </div>
  );
};

export default MaintenanceComponentDesktop;
