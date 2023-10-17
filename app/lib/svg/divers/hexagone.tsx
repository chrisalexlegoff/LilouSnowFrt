import { hexogoneProps } from "../../interfaces/interfaces.js";

export const Hexagone = ({ colorFond, colorPath }: hexogoneProps) => {
  return (
    <svg
      className="-m-1"
      width="215"
      height="215"
      viewBox="0 0 215 215"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1313_3502)">
        <path
          d="M0 0V214.5H214.5V0H0ZM149.5 183H67L28.5 107.25L67 32.5H149.5L185 107.25L149.5 183Z"
          fill={colorFond}
        />
        <path
          opacity="0.5"
          d="M82.0853 7.03306L181.959 31.9047L206.83 131.778L131.778 206.83L31.9047 181.959L7.03306 82.0853L82.0853 7.03306Z"
          stroke={colorPath}
          strokeWidth="2"
        />
        <path
          opacity="0.5"
          d="M19 54.191L107.263 1.16658L195.525 54.191V160.31L107.263 213.334L19 160.31V54.191Z"
          stroke={colorPath}
          strokeWidth="2"
        />
        <path
          opacity="0.5"
          d="M7.03306 131.778L31.9047 31.9047L131.778 7.03303L206.83 82.0852L181.959 181.959L82.0853 206.83L7.03306 131.778Z"
          stroke={colorPath}
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_1313_3502">
          <rect width="214.5" height="214.5" fill={colorFond} />
        </clipPath>
      </defs>
    </svg>
  );
};
