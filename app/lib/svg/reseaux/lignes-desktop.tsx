import { loaderProps } from "../../interfaces/interfaces.js";

export const LignesDesktop = ({ color, width, height }: loaderProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 2 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M1 0V150" stroke={color} />
      </g>
    </svg>
  );
};
