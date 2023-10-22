"use client";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { FlecheRetourUrl } from "@/app/lib/svg/divers/fleche-retour-url";
import { retourProps } from "@/app/lib/interfaces/interfaces.js";
gsap.registerPlugin(ScrollTrigger);

export const GoBackButton = ({ color, classname }: retourProps) => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        const goBackButton: any = document.querySelector("#go-back-button");
        const sectionsWhite = gsap.utils.toArray<HTMLElement>(".white");
        sectionsWhite.forEach((section) => {
          gsap.to(section, {
            scrollTrigger: {
              start: `top-=${
                goBackButton != null &&
                goBackButton?.getBoundingClientRect()["y"]
              }`,
              end: `bottom-=${
                goBackButton != null &&
                goBackButton?.getBoundingClientRect()["y"]
              }`,
              // markers: true,
              trigger: section,
              toggleClass: {
                targets: goBackButton,
                className: "logo-white",
              },
            },
          });
        });
      }
    }, 2000);
  });

  return (
    <div
      id="go-back-button"
      className={`${classname} cursor-pointer`}
      onClick={() => {
        router.back();
        // router.refresh();
      }}
    >
      <FlecheRetourUrl color={color} />
      <span className="text-blanc ml-1">Retour</span>
    </div>
  );
};
