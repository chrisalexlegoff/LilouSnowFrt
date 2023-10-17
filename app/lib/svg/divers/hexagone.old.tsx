import { hexogoneProps } from "../../interfaces/interfaces.js";

export const Hexagone = ({ colorFond, colorPath }: hexogoneProps) => {
  return (
    <svg
      className="w-full -m-2"
      id="Calque_1"
      data-name="Calque 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 261.25 257.91"
    >
      <path
        d="m0,0v257.91h261.25V0H0Zm176.24,214.75h-91.24l-45.62-85.79,45.62-85.79h91.24l45.62,85.79-45.62,85.79Z"
        fill={colorFond}
        stroke-width="0"
      />
      <polygon
        points="222.1 188.59 223.97 71.17 132.48 10.99 39.12 68.23 37.25 185.65 128.74 245.83 222.1 188.59"
        fill="none"
        stroke={colorPath}
        stroke-miterlimit="10"
        stroke-width="1.8"
      />
      <polygon
        points="22.36 144.14 99.53 232.66 207.79 216.17 238.88 111.17 161.71 22.66 53.45 39.14 22.36 144.14"
        fill="none"
        stroke={colorPath}
        stroke-miterlimit="10"
        stroke-width="1.8"
      />
      <polygon
        points="167.07 230.92 239.59 138.55 203.13 35.29 94.17 24.4 21.66 116.77 58.11 220.03 167.07 230.92"
        fill="none"
        stroke={colorPath}
        stroke-miterlimit="10"
        stroke-width="1.8"
      />
    </svg>
  );
};
