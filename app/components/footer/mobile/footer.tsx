import Link from "next/link.js";
import React from "react";

export const Footer = () => {
  const CurrentDateYear = new Date().getFullYear();
  return (
    <footer className="md-hidden bg-dore mx-auto pt-6 pb-28">
      <div className=" !text-blanc flex justify-center">
        <p>Lilou Snow&nbsp;&copy;&nbsp;copyright&nbsp;</p>
        <p>{CurrentDateYear}</p>
      </div>
      <div className=" !text-blanc flex justify-center">
        <p>Site réalisé par :&nbsp;</p>
        <Link
          href="https://dualdclic.fr"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          DualDclic.fr
        </Link>
      </div>
    </footer>
  );
};
