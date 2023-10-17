"use client";
import { useEffect } from "react";
import { fixMobileSize } from "@/app/lib/helpers/mobile-size-fix";
import Nav from "../mobile/nav/nav";
import Reseaux from "../widgets/reseaux";
import { Footer } from "../footer/mobile/footer";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Mise à niveau taille pour mobile -- vh
    fixMobileSize();
  }, []);
  return (
    <>
      <Nav />
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
