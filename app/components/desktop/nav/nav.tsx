"use client";
import { categoryTab } from "@/app/lib/helpers/categories";
import { LogoDesktop } from "@/app/lib/svg/nav/logo-desktop";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import { useEffect, useState } from "react";

const NavDesktop = (): JSX.Element => {
  // const [scroll, setScroll] = useState<number>(0);
  const [subMenuActive, setSubMenuActive] = useState(false);
  useEffect(() => {
    if (window.document != undefined) {
      const links = document.querySelectorAll(".link");
      links.forEach((link: any) => {
        if (link.href != "/tatouages-therapeutiques") {
          link.addEventListener("mouseenter", () => {
            setSubMenuActive(false);
          });
        }
      });
      const linkTatooThera = document.querySelector("#tatoo-thera");
      linkTatooThera?.addEventListener("mouseenter", () => {
        setSubMenuActive(!subMenuActive);
      });
      const subMenu = document.querySelector("#sub-menu");
      subMenu?.addEventListener("mouseleave", () => {
        setSubMenuActive(!subMenuActive);
      });
    }
  });
  const classNormal =
    "lg:inline-flex h-full lg:w-auto w-full px-0 items-center justify-center hover:text-dore";
  const pathname = usePathname();
  // useEffect(() => {
  //   const scrollNav = () => {
  //     const nav = document.getElementById("nav-desktop");

  //     setScroll(window.scrollY);
  //     if (scroll > 50) {
  //       if (nav) nav.style.opacity = "1";
  //     } else {
  //       if (nav) nav.style.opacity = "0";
  //     }
  //   };
  //   window.addEventListener("scroll", scrollNav);

  //   return () => {
  //     window.removeEventListener("scroll", scrollNav);
  //   };
  // }, [scroll]);
  return pathname != "/maintenance" ? (
    <>
      <nav
        id="nav-desktop"
        className="hidden h-[9vh] lg:block shadow-[0px_2px_20px_rgba(0,0,0,0.14)] fixed w-full z-50 bg-blanc"
      >
        <div className="max-w-9xl mx-8 xl:mx-16 h-full flex items-center flex-wrap flex-row">
          <Link href="/" className="link p-2 mr-4 w-[182px]">
            <LogoDesktop />
          </Link>

          <div className="li inline-flex flex-row xl:ml-auto w-auto items-center h-full justify-around flex-grow">
            <div
              className={`nav-desktop-link h-full ${
                pathname == "/" ? "active" : ""
              }`}
            >
              <Link
                href="/"
                className={
                  pathname == "/"
                    ? `${classNormal} link text-dore`
                    : `${classNormal} link`
                }
              >
                Accueil
              </Link>
            </div>
            <div
              className={`nav-desktop-link h-full ${
                pathname == "/a-propos" ? "active" : ""
              }`}
            >
              <Link
                href="/a-propos"
                className={
                  pathname == "/a-propos"
                    ? `${classNormal} link text-dore`
                    : `${classNormal} link`
                }
              >
                A propos
              </Link>
            </div>
            <div
              className={`nav-desktop-link h-full ${
                pathname.split("/").includes("tatouages-therapeutiques")
                  ? "active"
                  : ""
              }`}
            >
              <Link
                id="tatoo-thera"
                // onClick={() => setSubMenuActive(!subMenuActive)}
                href="/tatouages-therapeutiques"
                className={
                  pathname.split("/").includes("tatouages-therapeutiques")
                    ? `${classNormal} link text-dore`
                    : `${classNormal} link`
                }
              >
                Tatouages therapeutiques
              </Link>
            </div>
            <div
              className={`nav-desktop-link h-full ${
                pathname == "/partenariat" ? "active" : ""
              }`}
            >
              <Link
                href="/partenariat"
                className={
                  pathname == "/partenariat"
                    ? `${classNormal} link text-dore`
                    : `${classNormal} link`
                }
              >
                Partenariat
              </Link>
            </div>
            <div
              className={`nav-desktop-link h-full ${
                pathname == "/hommage" ? "active" : ""
              }`}
            >
              <Link
                href="/hommage"
                className={
                  pathname == "/hommage"
                    ? `${classNormal} link text-dore`
                    : `${classNormal} link`
                }
              >
                Hommage
              </Link>
            </div>
            <div className="nav-desktop-link h-full">
              <Link
                className={`${classNormal} link`}
                href="mailto:lilousnow.cica@gmail.com"
              >
                Contactez-moi
              </Link>
            </div>
          </div>
        </div>
        {subMenuActive && (
          <div
            id="sub-menu"
            className="h-[9vh] max-w-9xl w-full inline-flex items-center flex-row justify-around px-6 border-t-[0.39px] border-encre-de-chine border-solid bg-blanc shadow-[0px_2px_20px_rgba(0,0,0,0.14)]"
          >
            {categoryTab.map((subBmenu, index) => {
              return (
                <Link
                  key={index}
                  href={`/tatouages-therapeutiques${subBmenu.link}`}
                  className={
                    pathname == `/tatouages-therapeutiques${subBmenu.link}`
                      ? `${classNormal} text-dore`
                      : `${classNormal}`
                  }
                >
                  {subBmenu.slug}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </>
  ) : (
    <></>
  );
};

export default NavDesktop;
