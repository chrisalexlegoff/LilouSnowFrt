"use client";
import React, { useRef } from "react";
import { sectionsProps } from "../../../../lib/interfaces/interfaces";
import useAxios from "@/app/lib/interfaces/use-axios";
import Loader from "../../../loader/loader";
import { Slider } from "../../../before-after/beforeAfter";
import { CloseImg } from "@/app/lib/svg/avant-apres/close";

const SectionCinqDesktop = ({ logoWhite, category }: sectionsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const handleClick = (key: number) => {
    ref.current?.children[key].classList.toggle("visible");
  };
  const { response, loading, error, sendData } = useAxios({
    method: "get",
    url: "/avant_apres",
    headers: {
      accept: "application/ld+json",
    },
  });
  return (
    <section
      id="section-5-desktop"
      className={`w-screen bg-blanc ${logoWhite ? "white" : "black"}`}
    >
      <div className="max-w-md w-11/12 mx-auto pt-12">
        <p className="text-center">
          Les créations en images, réalisées en avant/après
        </p>
      </div>
      <div id="before-after" className="max-w-7xl w-11/12 mx-auto pb-12">
        <div ref={ref} className="relative">
          {loading && (
            <Loader color={"#000707"} width={"auto"} height={"auto"} />
          )}
          {error && <p>{error.message}</p>}
          {!loading &&
            !error &&
            response?.data["hydra:member"]
              .filter((el: any) => el.categorie === category?.toLowerCase())
              .map((el: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="my-10 w-full mx-auto flex flex-col cursor-pointer"
                  >
                    <Slider
                      imageSrcBefore={`${process.env.NEXT_PUBLIC_IMAGES_URL}/${el.avantName}`}
                      imageSrcAfter={`${process.env.NEXT_PUBLIC_IMAGES_URL}/${el.apresName}`}
                    />
                    <p
                      className="slider-text text-center"
                      onClick={() => handleClick(index)}
                    >
                      Voir plus de détails ...
                    </p>
                    {/* <p
                      className="slider-text-alt text-center"
                      onClick={() => handleClick(index)}
                    >
                      Fermer ...
                    </p> */}
                    <div
                      className="AB-invisible p-6 relative"
                      // onClick={() => handleClick(index)}
                    >
                      <div
                        className="absolute right-6 top-6"
                        onClick={() => handleClick(index)}
                      >
                        <CloseImg
                          color={"#FFFFFF"}
                          width={"35px"}
                          height={"auto"}
                        />
                      </div>
                      <div className="flex col-span-3 lg:col-span-2 py-6">
                        <div
                          className="min-h-72 w-1/2 grayscale xl:ml-6"
                          style={{
                            backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_URL}/${el.avantName})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                          }}
                        />
                        <div className="w-1/2 px-6">
                          <span className="block !text-blanc pb-6">Avant</span>
                          <p className="txt text-justify">{el.avantText}</p>
                        </div>
                      </div>
                      <div className="flex row-start-2 lg:col-start-2 col-span-3 lg:col-span-2 py-6">
                        <div className="w-1/2 px-6">
                          <span className="block !text-blanc pb-6">Après</span>
                          <p className="txt text-justify">{el.apresText}</p>
                        </div>
                        <div
                          className="min-h-72 w-1/2 grayscale-[75%] xl:mr-6"
                          style={{
                            backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_URL}/${el.apresName})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default SectionCinqDesktop;
