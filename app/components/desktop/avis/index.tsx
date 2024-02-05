"use client";
import useAxios from "@/app/lib/interfaces/use-axios";
import Loader from "../../loader/loader";
import { useEffect, useState } from "react";

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
  const testimonials = response?.data["hydra:member"];
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
    }, 7000);
  }, []);

  return (
    <div className="md:block hidden bg-blanc">
      {loading && <Loader color={"#000707"} width={"53"} height={"45px"} />}
      {error && <p>{error.message}</p>}
      {!loading && !error && (
        <div className="max-w-lg w-full mx-auto text-center">
          <div className="w-full relative select-none">
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/${testimonials[currentIndex].photoName}`}
              alt=""
            />
            <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
              <button onClick={handleOnPrevClick}>Previous</button>
              <button id="next" onClick={handleOnNextClick}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
