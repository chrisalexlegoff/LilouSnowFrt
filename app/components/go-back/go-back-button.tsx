"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FlecheRetourUrl } from "@/app/lib/svg/divers/fleche-retour-url";
import { flecheRetourUrlProps } from "@/app/lib/interfaces/interfaces";

export const GoBackButton = ({ color, classname }: flecheRetourUrlProps) => {
  const router = useRouter();

  return (
    <div
      id="go-back-button"
      className={`${classname} cursor-pointer`}
      onClick={() => {
        router.back();
      }}
    >
      <FlecheRetourUrl color={color} />
      <span className="text-blanc ml-1">Retour</span>
    </div>
  );
};
