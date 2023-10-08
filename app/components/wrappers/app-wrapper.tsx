"use client";
import { useEffect } from "react";
import { fixMobileSize } from "@/app/lib/helpers/mobile-size-fix";
import Nav from "../mobile/nav/nav";
import Reseaux from "../widgets/reseaux";

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
      <Reseaux
        homeIcon
        slug={["facebook", "messenger", "instagram", "email"]}
        classname={
          "md:hidden fixed bottom-0 flex w-full flex-wrap justify-around items-center h-[8vh] bg-blanc opacity-80 z-10"
        }
      />
    </>
  );
}
