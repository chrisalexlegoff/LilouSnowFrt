"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FlecheRetourUrl } from "@/app/lib/svg/divers/fleche-retour-url";
import { flecheProps, retourProps } from "@/app/lib/interfaces/interfaces.js";

export const GoBackButton = ({ color, classname }: retourProps) => {
  const router = useRouter();
  return (
    <div
      className={`${classname} cursor-pointer`}
      onClick={() => router.back()}
    >
      <FlecheRetourUrl color={color} />
      <span className="text-blanc">Retour</span>
    </div>
  );
};
