"use client";
import { useEffect } from "react";
import { fixMobileSize } from "@/app/lib/helpers/mobile-size-fix";
import Nav from "../mobile/nav/nav";
import Reseaux from "../widgets/reseaux";
import { Footer } from "../mobile/footer/footer";
import { GoBackButton } from "../go-back/go-back-button";
import { usePathname } from "next/navigation.js";
import CookieConsent from "react-cookie-consent";
import NavDesktop from "../desktop/nav/nav";
import ReseauxDesktop from "../widgets/reseaux-desktop";
import { FooterDesktop } from "../desktop/footer/footer";
import ScrollButton from "../scroll-top/scroll-button";

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
      <NavDesktop />
      {pathname != "/maintenance" && pathname != "/" && (
        <>
          <div className="relative grow flex w-full items-center md:hidden z-50 mix-blend-exclusion">
            <GoBackButton
              classname={"flex items-center fixed left-8 top-[13vh]"}
              color={"#FFFFFF"}
            />
          </div>
          <div className="relative grow w-full items-center hidden md:flex z-50 mix-blend-exclusion">
            <GoBackButton
              classname={"flex items-center fixed left-24 top-[55vh]"}
              color={"#FFFFFF"}
            />
          </div>
        </>
      )}
      {children}
      <Footer />
      <FooterDesktop />
      <CookieConsent
        buttonText="Je comprends"
        style={{ background: "#000707", alignItems: "center" }}
        buttonStyle={{
          background: "#FFFFFF",
          color: "#000707",
          fontSize: "13px",
        }}
      >
        Ce site pourrait utiliser un ou deux cookies de suivi pour améliorer
        votre expérience utilisateur.
        <br /> Aucune information vous concernant n'est enregistrée!
      </CookieConsent>
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
      <ReseauxDesktop
        colorIcon="#FFFFFF"
        widthIcon={"40px"}
        heightIcon={"34px"}
        slug={["facebook", "messenger", "instagram", "email"]}
        classname={
          "hidden md:block fixed top-1/2 -translate-y-1/2 -translate-x-1/2 right-0  z-20 mix-blend-exclusion"
        }
      />
      <ScrollButton />
    </>
  );
}
