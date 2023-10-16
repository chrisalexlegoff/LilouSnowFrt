import Link from "next/link.js";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { usePathname } from "next/navigation.js";
import { HamburgerCloseImg } from "@/app/lib/svg/nav/hamburger-close";
import { HamburgerOpenImg } from "@/app/lib/svg/nav/hamburger-open";
import { LogoMobileCloseImg } from "@/app/lib/svg/nav/logo-mobile-close";
import { LogoMobileOpenImg } from "@/app/lib/svg/nav/logo-mobile-open";
gsap.registerPlugin(ScrollTrigger);

const Nav = (): JSX.Element => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        const sectionsEnCours = gsap.utils.toArray<HTMLElement>("section");
        const sections = sectionsEnCours.slice(1);
        const nav: any = document.querySelector("#main-nav-mobile .nav");

        sections.forEach((section) => {
          gsap.to(section, {
            scrollTrigger: {
              // markers: true,
              start: `top-=${nav != null ? nav?.offsetHeight : 40}`,
              // start: "top-=40",
              end: "bottom",
              trigger: section,
              onEnter: () => section.scrollIntoView({ behavior: "smooth" }),
            },
          });
        });
        const sectionsWhite = gsap.utils.toArray<HTMLElement>(".white");

        sectionsWhite.forEach((section) => {
          gsap.to(section, {
            scrollTrigger: {
              start: `top-=${nav != null ? nav?.offsetHeight : 40}`,
              end: "bottom",
              trigger: section,
              toggleClass: {
                targets: nav,
                className: "logo-white",
              },
            },
          });
        });
      }
    }, 1000);
  }, []);
  return pathname != "/maintenance" ? (
    <>
      <div
        id="main-nav-mobile"
        className="md:hidden nav fixed bg-transparent w-screen p-[30px] z-20"
      >
        <div className="nav justify-between w-full mx-auto flex flex-row">
          <Link className="h-full" href={"/"}>
            <LogoMobileCloseImg />
          </Link>
          <button className="cursor-pointer" onClick={() => setOpen(!open)}>
            <HamburgerOpenImg />
          </button>
        </div>
      </div>
      <div
        className={`fixed h-[90%] w-screen bg-white p-[30px] transform duration-700 z-20 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className=" justify-between w-full mx-auto flex flex-row">
          <Link className="h-full" href={"/"} onClick={() => setOpen(!open)}>
            <LogoMobileOpenImg />
          </Link>
          <button
            className="cursor-pointer w-auto"
            onClick={() => setOpen(!open)}
          >
            <HamburgerCloseImg />
          </button>
        </div>
        <div className="h-full w-4/5 mx-auto pb-32 pt-16 flex flex-col items-center justify-around">
          <Link onClick={() => setOpen(!open)} className="text-center" href="/">
            <h3>Accueil</h3>
          </Link>
          <Link
            onClick={() => setOpen(!open)}
            className="text-center"
            href="/a-propos"
          >
            <h3>A propos</h3>
          </Link>
          <Link
            onClick={() => setOpen(!open)}
            className="text-center"
            href="/tatouages-therapeutiques"
          >
            <h3>Tatouages thérapeutiques</h3>
          </Link>
          <Link
            onClick={() => setOpen(!open)}
            className="text-center"
            href="/mes-collaborateurs"
          >
            <h3>Mes collaborateurs</h3>
          </Link>
          <Link
            onClick={() => setOpen(!open)}
            className="text-center"
            href="/hommage"
          >
            <h3>Hommage</h3>
          </Link>
          <Link
            onClick={() => setOpen(!open)}
            className="text-center"
            href="/mentions-legales"
          >
            <h3>
              Mentions légales - <br /> Politique de confidentialité
            </h3>
          </Link>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Nav;
