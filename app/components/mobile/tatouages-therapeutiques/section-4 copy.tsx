"use client";
import React, { useRef } from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";
import useAxios from "@/app/lib/helpers/use-axios";
import Loader from "../../loader/loader";

const SectionQuatre = ({ logoWhite }: sectionsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const handleClick = (key: number) => {
    ref.current?.children[key].classList.toggle("visible");
    console.log(ref.current);
  };
  const { response, loading, error, sendData } = useAxios({
    method: "get",
    url: "/avant_apres",
    headers: {
      accept: "application/ld+json",
    },
  });
  console.log(response);
  return (
    <section
      id="section-4"
      className={`min-h-screen w-screen bg-blanc ${
        logoWhite ? "white" : "black"
      }`}
    >
      <div id="before-after" className="max-w-md w-11/12 mx-auto pb-12">
        <div ref={ref} className="relative">
          {loading && <Loader color={"#000707"} width={"53"} height={"45px"} />}
          {error && <p>{error.message}</p>}
          {!loading &&
            !error &&
            response?.data["hydra:member"].map((el: any, index: number) => {
              return (
                <div
                  onClick={() => handleClick(index)}
                  key={index}
                  className="group transition-all my-10 w-full mx-auto flex flex-col px-6 cursor-pointer"
                >
                  <div
                    className="AB-visible min-h-72 block group-hover:hidden grayscale relative"
                    style={{
                      backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_URL}/${el.avantName})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <span className="block w-full absolute bottom-0 text-blanc text-center py-2">
                      Avant
                    </span>
                  </div>
                  <div
                    className="AB-visible min-h-72 hidden group-hover:block grayscale-[75%]"
                    style={{
                      backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_URL}/${el.apresName})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <span className="block w-full absolute bottom-0 text-blanc text-center py-2">
                      Après
                    </span>
                  </div>
                  <div className="AB-invisible px-6 mt-12">
                    <div
                      className="min-h-72 grayscale -translate-y-12"
                      style={{
                        backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_URL}/${el.avantName})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      {" "}
                      <span className="block w-full absolute bottom-0 text-blanc text-center py-2">
                        Avant
                      </span>
                    </div>
                    <p className="txt -translate-y-12 pt-6 pb-12 text-justify">
                      {el.avantText}
                    </p>
                    <div
                      className="min-h-72 -translate-y-12 grayscale-[75%]"
                      style={{
                        backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_URL}/${el.apresName})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      {" "}
                      <span className="block w-full absolute bottom-0 text-blanc text-center py-2">
                        Après
                      </span>
                    </div>
                    <p className="txt -translate-y-12 pt-6 pb-12 text-justify">
                      {el.apresText}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default SectionQuatre;
