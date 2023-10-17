import { hexogoneProps } from "../../interfaces/interfaces.js";

export const HexagoneBis = ({ color }: hexogoneProps) => {
  return (
    <svg
      className="absolute block w-full h-auto"
      width="203"
      height="216"
      viewBox="0 0 203 216"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.5"
        d="M77.1277 8.03307L177.001 32.9047L201.873 132.778L126.821 207.83L26.9472 182.959L2.07554 83.0853L77.1277 8.03307Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        opacity="0.5"
        d="M2.03307 132.778L26.9047 32.9046L126.778 8.03303L201.83 83.0852L176.959 182.959L77.0853 207.83L2.03307 132.778Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        opacity="0.5"
        d="M13.771 54.8384L102.034 1.81404L190.296 54.8384V160.957L102.034 213.981L13.771 160.957V54.8384Z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};
