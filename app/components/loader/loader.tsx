import { loaderProps } from "@/app/lib/interfaces/interfaces.js";
import { LoaderImg } from "@/app/lib/svg/loader/loaderImg";
import React from "react";

const Loader = ({ color, width, height, classname }: loaderProps) => {
  return (
    <LoaderImg
      classname={`${classname} loader mx-auto`}
      color={color}
      width={width}
      height={height}
    />
  );
};

export default Loader;
