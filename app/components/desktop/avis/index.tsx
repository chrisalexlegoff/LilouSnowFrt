"use client";
import useAxios from "@/app/lib/interfaces/use-axios";
import Loader from "../../loader/loader";
import { useEffect, useState } from "react";
import { Hexagone } from "@/app/lib/svg/divers/hexagone";
import Link from "next/link";

export const AvisDesktop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);
  const { response, loading, error, sendData } = useAxios({
    method: "get",
    url: "/avis",
    headers: {
      accept: "application/ld+json",
    },
  });
  const testimonials = response?.data["hydra:member"].filter(
    (item: any) => item.enable
  );
  console.log(testimonials);
  const handleOnNextClick = () => {
    setCount((count + 1) % testimonials?.length);
    setCurrentIndex(count);
  };
  const handleOnPrevClick = () => {
    const productsLength = testimonials?.length;
    setCount((currentIndex + productsLength - 1) % productsLength);
    setCurrentIndex(count);
  };
  useEffect(() => {
    setInterval(() => {
      const next = document.querySelector<HTMLElement>("#next");
      next?.click();
    }, 4000);
  }, []);

  return (
    <div className="md:block hidden bg-blanc">
      {loading && <Loader color={"#000707"} width={"53"} height={"45px"} />}
      {error && <p>{error.message}</p>}
      {!loading && !error && (
        <div className="max-w-lg w-full mx-auto text-center py-6">
          <p>{testimonials[currentIndex].nom}</p>
          <div className="w-full relative select-none">
            <div
              className="mx-auto flex w-fit max-w-[100px] my-2 justify-center items-center"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_URL}/${testimonials[currentIndex].photoName})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Hexagone
                colorPath={"#000707"}
                colorFond={"#FFFFFF"}
                width="100px"
                height="100px"
                classname="rotate"
              />
            </div>
            <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
              <button onClick={handleOnPrevClick}>&#x219E;</button>
              <button id="next" onClick={handleOnNextClick}>
                &#x21A0;
              </button>
            </div>
          </div>
          <q>"{testimonials[currentIndex].commentaire}"</q>
          <div className="block">
            <p></p>
          </div>
        </div>
      )}
    </div>
  );
};
