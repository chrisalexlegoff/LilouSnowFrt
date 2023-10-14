"use client";
import { questionsProps } from "@/app/lib/interfaces/interfaces.js";
import useAxios from "@/app/lib/helpers/use-axios";
import React from "react";
import Loader from "../loader/loader";

export const Questions = ({
  classname,
  nombreElementsAffiches,
  isMobile,
}: questionsProps) => {
  const { response, loading, error, sendData } = useAxios({
    method: "get",
    url: "/questions",
    headers: {
      accept: "application/ld+json",
    },
  });
  return (
    <div className={classname} id="questions">
      {loading && (
        <Loader
          classname={"mt-10"}
          color={"#000707"}
          width={"106"}
          height={"90px"}
        />
      )}
      {error && <p>{error.message}</p>}
      {!loading &&
        !error &&
        response?.data["hydra:member"]
          .filter((tab: any) => tab.enable)
          .slice(0, nombreElementsAffiches)
          .map((val: any) => {
            return (
              <div
                className={`${
                  isMobile ? "flex-col" : "flex-row flex-wrap"
                }' w-3/4 my-10 min-w-[310px] h-[300px] min-h-[300px] card-questions group flex mx-auto'`}
                key={val.id}
              >
                <div className="question group-hover:hidden bg-gris w-full h-full text-center flex items-center cursor-pointer">
                  <h4 className="w-3/4 mx-auto">{val.question}</h4>
                </div>
                <div className="response hidden group-hover:flex w-full h-full text-center items-center cursor-pointer">
                  <h4 className="w-3/4 mx-auto">{val.response}</h4>
                </div>
              </div>
            );
          })}
    </div>
  );
};
