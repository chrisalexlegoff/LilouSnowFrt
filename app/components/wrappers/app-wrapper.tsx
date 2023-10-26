"use client";
import { useEffect } from "react";
import { fixMobileSize } from "@/app/lib/helpers/mobile-size-fix";
import Nav from "../mobile/nav/nav";
import Reseaux from "../widgets/reseaux";
import { Footer } from "../mobile/footer/footer";
import { GoBackButton } from "../go-back/go-back-button";
import { usePathname } from "next/navigation.js";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  useEffect(() => {
    // Mise à niveau taille pour mobile -- vh
    fixMobileSize();
  }, []);
  return (
    <>
      <Nav />
      {pathname != "/maintenance" && pathname != "/" && (
        <div className="relative grow flex w-full items-center md:hidden z-50 mix-blend-exclusion">
          <GoBackButton
            classname={"flex items-center fixed left-8 top-[13vh]"}
            color={"#FFFFFF"}
          />
        </div>
      )}
      {children}
      <Footer />
      <Reseaux
        colorIcon="#000707"
        widthIcon={"53px"}
        heightIcon={"45px"}
        homeIcon
        slug={["facebook", "messenger", "instagram", "email"]}
        classname={
          "md:hidden fixed w-full bottom-0 grid grid-rows-1 h-[9vh] bg-blanc opacity-80 z-10"
        }
      />
    </>
  );
}
