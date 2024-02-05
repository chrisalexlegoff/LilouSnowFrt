"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { maintenanceProps } from "../../../lib/interfaces/interfaces";
import { FondMobileMaintenanceImg } from "@/app/lib/svg/maintenance/fond-mobile";
import { BgMobileMaintenanceImg } from "@/app/lib/svg/maintenance/bg-mobile";
import * as ReactDOMServer from "react-dom/server";
import { CircleMaintenanceImg } from "@/app/lib/svg/maintenance/circle";
import { LogoMobileBlackMaintenanceImg } from "@/app/lib/svg/maintenance/logo-mobile-black";
import { FlecheMaintenanceImg } from "@/app/lib/svg/maintenance/fleche";

const MaintenanceComponentMobile = ({}: maintenanceProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hiddens: NodeListOf<HTMLElement> =
        document.querySelectorAll(".appear");
      hiddens.forEach((hidden) => {
        hidden.style.visibility = "hidden";
      });
    }
  });
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
        ".circle",
        {
          rotate: "360",
        },
        {
          rotate: "0",
          delay: 1,
          duration: 5,
        }
      );
    }
  });
  const fondToString = encodeURIComponent(
    ReactDOMServer.renderToStaticMarkup(<FondMobileMaintenanceImg />)
  );
  const bgToString = encodeURIComponent(
    ReactDOMServer.renderToStaticMarkup(<BgMobileMaintenanceImg />)
  );
  const circleToString = encodeURIComponent(
    ReactDOMServer.renderToStaticMarkup(<CircleMaintenanceImg />)
  );
  return (
    <>
      <div
        id="maintenance"
        style={{
          backgroundImage: `url("data:image/svg+xml,${bgToString}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="min-h-screen w-screen md:hidden"
      >
        <div
          style={{
            backgroundImage: `url("data:image/svg+xml,${fondToString}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="min-h-[92vh] w-full mx-auto flex flex-col items-center justify-center text-center px-4"
        >
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center mb-[3vh]">
              <CircleMaintenanceImg />
              <LogoMobileBlackMaintenanceImg />
            </div>
            <div className="appear mb-[3vh]">
              <h1 className="h1-maintenance">Tatouage thérapeutique</h1>
              <h2 className="h2-maintenance">
                Covering cicatrices et brûlures
              </h2>
            </div>
            <h3 className="h3-maintenance appear mb-[3vh]">
              Le site est actuellement en maintenance.
              <br />
              Patience, je serais bientôt de retour !
            </h3>
            <h4 className="h4-maintenance appear mb-[3vh]">
              Lille - Paris - Lyon - Saint Malo
            </h4>
            <FlecheMaintenanceImg />
          </div>
        </div>
      </div>
    </>
  );
};

export default MaintenanceComponentMobile;
