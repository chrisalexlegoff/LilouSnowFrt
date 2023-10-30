"use client";
import SectionUne from "@/app/components/mobile/tatouages-therapeutiques/category/section-1";
import SectionDeux from "@/app/components/mobile/tatouages-therapeutiques/category/section-2";
import SectionTrois from "@/app/components/mobile/tatouages-therapeutiques/category/section-3";
import SectionQuatre from "@/app/components/mobile/tatouages-therapeutiques/category/section-4";
import SectionCinq from "@/app/components/mobile/tatouages-therapeutiques/category/section-5";
import React from "react";

const CategoryTemoignage = ({ params }: { params: { category: string } }) => {
  return (
    <div className="md:hidden" id="mes-Realisations">
      <SectionUne logoWhite={false} category={params.category} />
      <SectionDeux logoWhite />
      <SectionTrois logoWhite category={params.category} />
      <SectionQuatre logoWhite={false} category={params.category} />
      <SectionCinq logoWhite category={params.category} />
    </div>
  );
};
export default CategoryTemoignage;
