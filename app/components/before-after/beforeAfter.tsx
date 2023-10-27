"use client";
import { sliderProps } from "@/app/lib/interfaces/interfaces.js";
import { useState } from "react";

export const Slider = ({ imageSrcBefore, imageSrcAfter }: sliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="'w-full relative slider cursor-e-resize"
      onMouseUp={handleMouseUp}
    >
      <div
        className="relative w-full max-w-[700px] aspect-[70/45] m-auto overflow-hidden select-none"
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
      >
        <div
          className="h-full w-full relative grayscale-[85%]"
          style={{
            backgroundImage: `url(${imageSrcAfter})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p className="slider-text origin-center	-rotate-90 absolute right-1 top-1/2 -translate-y-1/2 !text-blanc">
            Après
          </p>
        </div>

        <div
          className="absolute top-0 left-0 right-0 w-full max-w-[700px] aspect-[70/45] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div
            className="w-full h-full grayscale"
            style={{
              backgroundImage: `url(${imageSrcBefore})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <p className="slider-text origin-center rotate-90 absolute left-1 top-1/2 -translate-y-1/2 !text-blanc">
              Avant
            </p>
          </div>
        </div>
        <div
          // className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          className="absolute top-0 bottom-0 bg-white cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          {/* <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]"> */}
          <div className="absolute -translate-x-1/2 top-[calc(50%-5px)]">
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M24,12l-5.7-5.7V11c-3.7,0-9,0-12.6,0V6.3L0,12l5.8,5.7V13c3.6,0,8.9,0,12.5,0v4.7L24,12z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
