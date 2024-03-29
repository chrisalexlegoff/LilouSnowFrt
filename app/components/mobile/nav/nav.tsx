import Link from "next/link.js";
import { useState } from "react";
import { usePathname } from "next/navigation.js";
import { HamburgerCloseImg } from "@/app/lib/svg/nav/hamburger-close";
import { HamburgerOpenImg } from "@/app/lib/svg/nav/hamburger-open";
import { LogoMobileCloseImg } from "@/app/lib/svg/nav/logo-mobile-close";
import { LogoMobileOpenImg } from "@/app/lib/svg/nav/logo-mobile-open";

const Nav = (): JSX.Element => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return pathname != "/maintenance" ? (
    <>
      <div
        id="main-nav-mobile"
        className="lg:hidden nav fixed bg-transparent w-full p-[30px] z-20 mix-blend-exclusion"
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
        className={`fixed h-[90%] md:h-full w-full bg-white p-[30px] transform duration-700 z-20 ${
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
            href="/partenariat"
          >
            <h3>Partenariat</h3>
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
            <h3>Mentions légales</h3>
          </Link>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Nav;
